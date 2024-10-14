
import React from 'react';
import Image from 'next/image';

export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 py-10">
      <div className="flex-grow flex items-center justify-center">
        <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full h-[350px] border border-gray-300 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/governo.jpg"
              alt="background image"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
            />
          </div>
          <div className="relative z-10 flex">
            {/* Left Section with Logo and Information */}
            <div className="w-2/3 p-4">
              <div className="flex items-center mb-4">
                <Image
                  src="/logo.jfif"
                  alt="card logo"
                  width={40}
                  height={60}
                  className="mr-2"
                />
                <h1 className="text-xl font-bold">Q1</h1>
              </div>
              <p className="text-lg font-bold text-gray-700">Name: TABINDA</p>
              <p className="text-lg text-gray-700">Roll No: 65232</p>
              <p className="text-lg text-gray-700">Distance Learning: No</p>
              <p className="text-lg text-gray-700">Center: Governor House Karachi</p>
              <p className="text-lg text-gray-700">Campus: Main</p>
              <p className="text-lg text-gray-700">Day/Time: Sunday 2:00PM to 5:00PM</p>
              <p className="text-lg text-gray-700">Batch: 01</p>
              {/* Button Section */}
              <div className="flex justify-center mt-4">
                <button className="bg-blue-600 text-white py-2 px-8 rounded-lg w-full">
                  Q1 & WMD
                </button>
              </div>
            </div>
            {/* Right Section with Enlarged Profile Image and Signature */}
            <div className="w-1/3 p-4 text-center">
              <Image
                src="/image.jfif"
                alt="profile picture"
                width={150}
                height={250}
                className="rounded-lg border-4 border-blue-600 mb-8"
              />
              <p className="border-t-2 border-t-gray-400 pt-2 font-bold text-gray-700">
                Authorized Signature
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}
