import React from 'react';

const CoreValues = () => {
  const values = [
    {
      title: "Customer Focus",
      description: "Putting our clients' needs at the center of everything we do.",
    },
    {
      title: "Quality",
      description: "Delivering excellence in every project and service.",
    },
    {
      title: "Efficiency",
      description: "Streamlined processes for optimal results.",
    },
    {
      title: "Integrity",
      description: "Honest, transparent, and ethical business practices.",
    },
  ];

  return (
    <section
      id="values"
      className="flex flex-col md:flex-row items-center mx-auto gap-12 p-4 md:p-20"
    >
      <div className='w-full md:w-1/2  p-4'>
        <h2 className="text-4xl font-bold text-[#202b44] mb-6">
          Our Values
        </h2>
        {values.map((data, index) => (
          <div key={index} className="md:w-full">
            <ul>
              <li className='font-medium mt-4'>{data.title}</li>
              <li className='mt-2'>{data.description}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2">
        <img
          src="cam (4).jpeg"
          alt="Mission illustration representing 4K Vision's purpose"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </section>
  );
}

export default CoreValues;
