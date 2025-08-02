import React from 'react';

const Partners = () => {
  const partners = [
    {
      image: "partner (2).PNG",
    },
    {
      image: "partner (3).PNG",
    },
    {
      image: "partner (6).PNG",
    },
    {
      image: "partner (5).PNG",
    },
     {
      image: "partner (4).PNG",
    },
  ];

  return (
    <div>
      <section id="partners" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#202b44]">
          Our Partners
        </h2>
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 md:flex gap-8">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center"
              >
                <img
                  src={partner.image}
                  alt={`Partner logo #${index + 1}`}
                  className="object-contain w-full h-auto max-w-[150px] md:max-w-[200px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;
