'use client';

import { useState } from "react";
import WeatherCard from "@/components/WeatherCard";
import SearchBar from "@/components/SearchBar";
import BackBtn from "@/components/BackBtn";

export default function WeatherPage() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API_KEY = "YOUR_API_KEY_HERE"; // Apni OpenWeatherMap API Key yahan daalo

    // 🔹 Search function
    const handleSearch = async () => {
        if (!city) return;

        setLoading(true);
        setError('');
        setWeather(null);

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=123456abcdef&units=metric`

            );

            if (!res.ok) throw new Error('City not found');

            const data = await res.json();
            setWeather(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4'>
            <div className='flex flex-col justify-center items-center h-[700px] gap-6 border border-blue-400 bg-gradient-to-b from-gray-950 to-gray-700 rounded-3xl p-8 sm:p-10 w-full max-w-lg'>
                
                {/* 🔹 Search Bar */}
                <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />

                {/* 🔹 Weather Card */}
                <WeatherCard weather={weather} loading={loading} error={error} />
                <BackBtn/>
            </div>
        </div>
    );
}
