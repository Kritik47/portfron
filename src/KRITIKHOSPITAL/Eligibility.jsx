import React from 'react';

const Eligibility = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-6 md:p-10 lg:p-20">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-lg p-8 md:p-12 lg:p-16">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Eligibility for Free Treatment</h1>
        <p className="text-lg text-gray-700 mb-4">
          To be eligible for free treatment at our hospital, you must meet the following criteria:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
          <li className="text-lg">Income below a certain threshold</li>
          <li className="text-lg">No health insurance coverage</li>
          <li className="text-lg">Medical diagnosis requiring cancer treatment</li>
        </ul>
      </div>
    </div>
  );
};

export default Eligibility;
