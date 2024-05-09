import { NextPage } from "next";
import { FaSearch, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio: NextPage = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "/imgs/portfolio/ecommerce.PNG", // Placeholder image URL
      title: "Landing Page for Ecommerce Website",
      description: "A beautiful user interface(UI) for an Ecommerce Website.",
      techStacks: ["React", "MUI", "antd"],
      githubLink: "https://github.com/jankoabel/ecommerce_website_landing_page",
      demoLink: "https://best-ecommerce-website.vercel.app",
    },
    {
      id: 2,
      image: "/imgs/portfolio/dictionary.PNG", // Placeholder image URL
      title: "English Dictionary",
      description: "A Website where users can search and get words and get the meaning, synonym, antonym, pronunciation and even images for that word.",
      techStacks: ["React", "tailwindcss", "react icons", "RapidApi"],
      githubLink: "https://github.com/jankoabel/english-dictionary",
      demoLink: "https://english-dictionary-chi.vercel.app",
    },
    {
      id: 3,
      image: "/imgs/portfolio/education.PNG", // Placeholder image URL
      title: "Landing Page for Educational Website",
      description: "A beautiful user interface(UI) for Educational Website.",
      techStacks: ["HTML", "CSS", "JS"],
      githubLink: "", // No GitHub link provided
      demoLink: "https://educationallandingpage.netlify.app",
    },
    {
      id: 4,
      image: "/imgs/portfolio/tours.PNG", // Placeholder image URL
      title: "Tour and Travel Website",
      description: "Add description.",
      techStacks: ["React", "react icons", "antd", "axios", "react-helmet"],
      githubLink: "https://github.com/jankoabel/enat_ethiopia_tours",
      demoLink: "https://enatethiopiatours.com",
    },
    {
      id: 5,
      image: "https://media.licdn.com/dms/image/C4D33AQEr351RRfbS3w/productpage-image_1128_635/0/1628572482298/oreference_school_management_system_image?e=2147483647&v=beta&t=_te239RqrMa3R002CGiEg6tRFxVyjEfZ9FXSkIlybig", // Placeholder image URL
      title: "School Management System with ASP.NET Core 7 MVC",
      description: "The School Management System is a comprehensive web application developed using ASP.NET Core 7 MVC. It utilizes Entity Framework Core for database management and SQL Server for data storage.",
      techStacks: ["ASP.NET Core 7 MVC", "Entity Framework Core", "SQL Server", "Bootstrap", "jQuery", "AutoMapper"],
      githubLink: "https://github.com/jankoabel/school-management-system",
      demoLink: "", // No demo link provided
    },
    {
      id: 6,
      image: "/imgs/portfolio/blog.PNG", // Placeholder image URL
      title: "FineBlog",
      description: "FineBlog is a web application built using .NET Core MVC and SQL Server. It provides a platform for users to create and manage their own blogs.",
      techStacks: [".Net Core MVC", "SQL SERVER"],
      githubLink: "https://github.com/jankoabel/blog",
      demoLink: "", // No demo link provided
    },
  ];


  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <section className="portfolio section" id="portfolio">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {portfolioItems.map((item) => (
              <div key={item.id} className="rounded overflow-hidden shadow-lg bg-white dark:bg-gray-700">
                <div className="relative">
                  <img className="w-full" src={item.image} alt={item.title} />
                  <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300">
                    <FaSearch className="text-white text-4xl" />
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 dark:text-gray-200 text-base">{item.description}</p>
                  <div className="mt-4">
                    {item.techStacks.map((tech, index) => (
                      <span key={index} className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-4">
                  {item.githubLink && (
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:text-blue-700 mr-3">
                      <FaGithub className="inline-block mr-1" /> GitHub
                    </a>
                  )}
                  {item.demoLink && (
                    <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:text-blue-700">
                      <FaExternalLinkAlt className="inline-block mr-1" /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
