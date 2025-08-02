import React from "react";

const Mission = () => {
  const mission = [
    {
      id: 1,
      image: "cam (1).jpeg",
      description:
        "To provide cutting-edge security solutions and innovative technologyservices that protect and empower businesses and individuals. We arecommitted to delivering excellence through advanced 4K surveillancesystems comprehensive IT infrastructure and reliable real estatesecurity solutions",
      descriptionB:
        "  4KVISION Security Solutions is revolutionizing the security industry by offering a unique combination of high-quality security products, exceptional supply chain efficiency, and guaranteed on-time delivery. We are dedicated to creating safe and secure environments for our clients, their property, and their residents.",
    },
  ];
  return (
    <section
      id="mission"
      className="py-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      {mission.map((data) => (
        <>
          <div className="w-full md:w-1/2">
            <img
              src={data.image}
              alt="Mission illustration representing 4K Vision's purpose"
              className="w-full  h-90 rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-[#202b44] mb-6">
              Our Mission
            </h2>
            <p className="mb-4 leading-relaxed">{data.description}</p>
            <button className="bg-[#202b44] p-3 w-35 text-white">More</button>
          </div>
        </>
      ))}
    </section>
  );
};

export default Mission;
