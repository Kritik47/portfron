import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-300 to-purple-300 p-6 md:p-10 lg:p-20">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-6 md:p-10 lg:p-16">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-5 text-center">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
          sahu and munda family Cancer Treatment Hospital is dedicated to providing
          free, high-quality cancer care for everyone. We believe that financial
          constraints should never be a barrier to receiving life-saving
          treatment.
        </p>

        <h2 className="text-3xl font-bold mt-8 text-center text-blue-700">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 mt-2 leading-relaxed text-center">
          To eradicate cancer and provide free treatment to all in need,
          ensuring access to the best possible care.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Compassionate Care */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-blue-100 hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Compassionate Care
            </h3>
            <p className="text-gray-600">
              We offer compassionate care, understanding that healing begins
              with empathy and personalized treatment.
            </p>
          </div>

          {/* Advanced Treatment */}
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:bg-purple-100 hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Advanced Treatment
            </h3>
            <p className="text-gray-600">
              Our hospital is equipped with state-of-the-art technology to
              ensure the best possible outcomes for our patients.
            </p>
          </div>

          {/* Free Treatment */}
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Free Treatment
            </h3>
            <p className="text-gray-600">
              We provide cancer treatment free of cost, because every life
              matters.
            </p>
          </div>

          {/* Global Reach */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg hover:bg-yellow-100 hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              Global Reach
            </h3>
            <p className="text-gray-600">
              We aim to help people from all over the world, offering our
              services without borders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
