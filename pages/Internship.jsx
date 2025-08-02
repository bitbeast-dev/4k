import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Cpu, Database, Server, Smartphone, Wifi } from 'lucide-react';

const Internship = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const internships = [
    {
      title: "Software Development",
      icon: <Smartphone className="w-5 h-5" />,
      description: "Build responsive web interfaces using React, Next.js, and modern CSS frameworks.",
      requirements: [
        "Basic knowledge of HTML/CSS/JavaScript",
        "Familiarity with React or similar frameworks",
        "Understanding of responsive design principles",
        "Experience with Git version control"
      ],
      duration: "3-6 months",
      projects: [
        "Build an e-commerce product page",
        "Create a responsive admin dashboard",
        "Implement a progressive web app"
      ]
    },
    {
      title: "Networking",
      icon: <Server className="w-5 h-5" />,
      description: "Work with server-side technologies and databases to build scalable APIs.",
      requirements: [
        "Understanding of server-side programming",
        "Familiarity with Node.js, Python, or Java",
        "Basic knowledge of databases (SQL or NoSQL)",
        "Concepts of RESTful APIs"
      ],
      duration: "3-6 months",
      projects: [
        "Develop a REST API for a blog platform",
        "Implement user authentication system",
        "Build a real-time chat service"
      ]
    },
     {
      title: "Computer System and Architecture",
      icon: <Server className="w-5 h-5" />,
      description: "Work with server-side technologies and databases to build scalable APIs.",
      requirements: [
        "Understanding of server-side programming",
        "Familiarity with Node.js, Python, or Java",
        "Basic knowledge of databases (SQL or NoSQL)",
        "Concepts of RESTful APIs"
      ],
      duration: "3-6 months",
      projects: [
        "Develop a REST API for a blog platform",
        "Implement user authentication system",
        "Build a real-time chat service"
      ]
    },
     {
      title: "Multimedia",
      icon: <Server className="w-5 h-5" />,
      description: "Work with server-side technologies and databases to build scalable APIs.",
      requirements: [
        "Understanding of server-side programming",
        "Familiarity with Node.js, Python, or Java",
        "Basic knowledge of databases (SQL or NoSQL)",
        "Concepts of RESTful APIs"
      ],
      duration: "3-6 months",
      projects: [
        "Develop a REST API for a blog platform",
        "Implement user authentication system",
        "Build a real-time chat service"
      ]
    },
    {
      title: "DevOps Engineering",
      icon: <Cpu className="w-5 h-5" />,
      description: "Learn cloud infrastructure, CI/CD pipelines, and infrastructure as code.",
      requirements: [
        "Basic Linux/Unix command line knowledge",
        "Understanding of networking concepts",
        "Interest in cloud technologies (AWS, GCP, Azure)",
        "Familiarity with Docker basics"
      ],
      duration: "4-6 months",
      projects: [
        "Containerize a web application",
        "Setup CI/CD pipeline for a project",
        "Configure cloud infrastructure"
      ]
    },
    {
      title: "Full Stack Development",
      icon: <Code className="w-5 h-5 " />,
      description: "End-to-end web development experience from frontend to backend.",
      requirements: [
        "Basic knowledge of frontend technologies",
        "Understanding of backend concepts",
        "Willingness to learn full stack architecture",
        "Problem-solving skills"
      ],
      duration: "6 months",
      projects: [
        "Build a complete CRUD application",
        "Develop a social media dashboard",
        "Create a portfolio website with CMS"
      ]
    },
     {
      title: "CCTV installation and access control",
      icon: <Server className="w-5 h-5" />,
      description: "Work with server-side technologies and databases to build scalable APIs.",
      requirements: [
        "Understanding of server-side programming",
        "Familiarity with Node.js, Python, or Java",
        "Basic knowledge of databases (SQL or NoSQL)",
        "Concepts of RESTful APIs"
      ],
      duration: "3-6 months",
      projects: [
        "Develop a REST API for a blog platform",
        "Implement user authentication system",
        "Build a real-time chat service"
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-5 h-5 " />,
      description: "Work with large datasets, ETL pipelines, and data processing systems.",
      requirements: [
        "Basic Python programming skills",
        "Understanding of data structures",
        "Familiarity with SQL",
        "Interest in data processing"
      ],
      duration: "3-6 months",
      projects: [
        "Build a data pipeline for analytics",
        "Create a data visualization dashboard",
        "Implement a data cleaning script"
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white" id='internship'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tech Internship Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gain hands-on experience with our immersive internship programs in cutting-edge technologies
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                className={`w-full px-6 py-4 flex items-center justify-between text-left bg-white ${activeIndex === index ? 'rounded-t-lg' : 'rounded-lg'}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`internship-${index}`}
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    {internship.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{internship.title}</span>
                </div>
                <div className="ml-4">
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              <div
                id={`internship-${index}`}
                className={`px-6 pt-2 pb-6 bg-gray-50 ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-gray-900 font-medium mb-2">Description</h3>
                    <p className="text-gray-700 mb-4">{internship.description}</p>
                    
                    <h3 className="text-gray-900 font-medium mb-2">Duration</h3>
                    <p className="text-gray-700 mb-4">{internship.duration}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-900 font-medium mb-2">Requirements</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                      {internship.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    
                    <h3 className="text-gray-900 font-medium mb-2">Potential Projects</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {internship.projects.map((proj, i) => (
                        <li key={i}>{proj}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;

