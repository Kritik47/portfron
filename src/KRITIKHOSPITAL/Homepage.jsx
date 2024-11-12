import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const nav=useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center p-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">sahu and munda family international Free Cancer Treatment Hospital</h1>
        <p className="mt-4 text-lg md:text-xl">Providing free cancer treatment for those in need</p>
      </header>

      <section className="mt-10 text-center p-6">
        <h2 className="text-3xl font-semibold text-green-600">Our Services</h2>
        <p className="mt-2 text-gray-700">We offer comprehensive cancer treatment options</p>
        <button onClick={()=>nav('/freetreatment')} className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Get Free Treatment
        </button>
      </section>

      <section className="mt-10 p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold text-center text-indigo-600">Why Choose Us?</h3>
        <p className="mt-2 text-center text-gray-600">
          Our dedicated team of professionals is committed to providing the highest quality of care.
        </p>
      </section>

      <footer className="mt-10 p-6 text-center bg-gradient-to-l from-blue-600 to-purple-600 text-white">
        <p>&copy; {new Date().getFullYear()} sahu and mundas Hospital. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
