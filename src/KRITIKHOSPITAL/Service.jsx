import React from 'react';

const Services = () => {
  const services = [
    'Chemotherapy',
    'Radiation Therapy',
    'Surgery',
    'Palliative Care',
    'Immunotherapy'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-6 md:p-10 lg:p-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Our Services</h1>
        <ul className="space-y-4">
          {services.map(service => (
            <li
              key={service}
              className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <span className="text-lg font-semibold text-gray-800">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
