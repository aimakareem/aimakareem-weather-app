import react from'react';
import Link from'next/link';
import Image from 'next/image';
export default function Weather() {
return (
    <div className=' flex flex-col justify-center items-center min-h-screen bg-gray-900 gap-6'>
        <Image
        className=''
        src="/assets/app-logo.png" 
        alt="Weather Icon"
        width={100} 
        height={100}
        />
        <h1>Daily Weather</h1>
        <p>Our app will accurately diplay current weather conditions in no time</p>
        <Link href="/">
        <button>Get Started</button>
        </Link>
    </div>
);
};