type WeatherCardProps = {
    city: string;
    temperature: number;
    description: string;
  icon: string; // icon URL ya react-icon
};

export default function WeatherCard({ city, temperature, description, icon }: WeatherCardProps) {
return (
    <div className="bg-blue-500 text-white rounded-xl p-6 shadow-lg w-64 flex flex-col items-center">
        <h2 className="text-2xl font-bold">{city}</h2>
        <img src={icon} alt="weather icon" className="w-20 h-20 my-4" />
        <p className="text-xl">{temperature}°C</p>
        <p className="capitalize">{description}</p>
    </div>
);
}
