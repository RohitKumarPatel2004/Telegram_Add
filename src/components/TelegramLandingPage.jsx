import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";

const TelegramLandingPage = () => {
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="bg-[#1c1c1c] text-white rounded-2xl p-8 max-w-sm w-full shadow-xl text-center">
        <img
          src={logo}
          alt="Maker Trade"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold">Maker Trade</h1>
        <p className="text-gray-400 text-sm mt-1 mb-4">36,357 subscribers</p>
        <p className="text-sm mb-2">
          📊 <span className="text-white font-medium">Maker Trade | Quotex Trading</span> 📈
        </p>
        <ul className="text-sm text-white mb-6 space-y-2">
          <li>🔹 Expert Signals & Strategies</li>
          <li>🔹 Show the power of Money management</li>
        </ul>
        <a
          href="https://t.me/+kdws6C24so03YWFl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-full transition duration-300"
        >
          JOIN CHANNEL
        </a>

        {/* Countdown Timer */}
        <p className="mt-4 text-sm text-gray-400">
          ⏳ Time Left  {seconds} second{seconds !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default TelegramLandingPage;
