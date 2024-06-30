import { NextPage } from "next";
import { FaSearch, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio: NextPage = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "/imgs/portfolio/ecommerce.PNG",
      title: "Landing Page for Ecommerce Website",
      description: "A beautiful user interface(UI) for an Ecommerce Website.",
      techStacks: ["React", "MUI", "antd"],
      githubLink: "https://github.com/jankoabel/ecommerce_website_landing_page",
      demoLink: "https://best-ecommerce-website.vercel.app",
    },
    {
      id: 2,
      image: "/imgs/portfolio/dictionary.PNG",
      title: "English Dictionary",
      description: "A Website where users can search and get words and get the meaning, synonym, antonym, pronunciation and even images for that word.",
      techStacks: ["React", "tailwindcss", "react icons", "RapidApi"],
      githubLink: "https://github.com/jankoabel/english-dictionary",
      demoLink: "https://english-dictionary-chi.vercel.app",
    },
    {
      id: 3,
      image: "/imgs/portfolio/education.PNG",
      title: "Landing Page for Educational Website",
      description: "A beautiful user interface(UI) for Educational Website.",
      techStacks: ["HTML", "CSS", "JS"],
      githubLink: "", // No GitHub link provided
      demoLink: "https://educationallandingpage.netlify.app",
    },
    {
      id: 4,
      image: "https://media.licdn.com/dms/image/C4D33AQEr351RRfbS3w/productpage-image_1128_635/0/1628572482298/oreference_school_management_system_image?e=2147483647&v=beta&t=_te239RqrMa3R002CGiEg6tRFxVyjEfZ9FXSkIlybig",
      title: "School Management System with ASP.NET Core 7 MVC",
      description: "The School Management System is a comprehensive web application developed using ASP.NET Core 7 MVC. It utilizes Entity Framework Core for database management and SQL Server for data storage.",
      techStacks: ["ASP.NET Core 7 MVC", "Entity Framework Core", "SQL Server", "Bootstrap", "jQuery", "AutoMapper"],
      githubLink: "https://github.com/jankoabel/school-management-system",
      demoLink: "", // No demo link provided
    },
    {
      id: 5,
      image: "/imgs/portfolio/blog.PNG",
      title: "FineBlog",
      description: "FineBlog is a web application built using .NET Core MVC and SQL Server. It provides a platform for users to create and manage their own blogs.",
      techStacks: [".Net Core MVC", "SQL SERVER"],
      githubLink: "https://github.com/jankoabel/blog",
      demoLink: "", // No demo link provided
    },
    {
      id: 6,
      image: "https://cdn-www.oktopost.com/blog/wp-content/uploads/2022/03/social-media-sentiment-analysis-blog-cover.png", // No image URL provided
      title: "Social Media Sentiment Analysis",
      description: "A project analyzing sentiment on social media platforms using machine learning techniques.",
      techStacks: ["Python", "NLTK", "scikit-learn"],
      githubLink: "https://github.com/jankoabel/Social-Media-Sentiment-Analysis",
      demoLink: "", // No demo link provided
    },
    {
      id: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmNQNvAvu778s7BObeCK5waAoyhba2C9JLw&s",
      title: "Movie Recommendation System using R",
      description: "A movie recommendation system built using R and various collaborative filtering techniques.",
      techStacks: ["R", "Recommenderlab"],
      githubLink: "https://github.com/jankoabel/Movie-Recommendation-System-using-R_Project",
      demoLink: "", // No demo link provided
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OM4fn3HTL-MqbZO7rtRd6VzGqGcPBWRbiQ&s",
      title: "Spam Email Classification",
      description: "A machine learning project for classifying emails as spam or not spam.",
      techStacks: ["Python", "scikit-learn", "Pandas"],
      githubLink: "https://github.com/jankoabel/Spam-Email-Classification",
      demoLink: "", // No demo link provided
    },
    {
      id: 9,
      image: "https://miro.medium.com/v2/resize:fit:372/1*AO2rIhzRYzFVQlFLx9DM9A.png",
      title: "Deep Learning Handwritten Digit Recognition",
      description: "A deep learning project for recognizing handwritten digits using a neural network.",
      techStacks: ["Python", "TensorFlow", "Keras"],
      githubLink: "https://github.com/jankoabel/Deep-Learning-Handwritten-Digit-Recognition",
      demoLink: "", // No demo link provided
    },
    {
      id: 10,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtqGGLvIl9HBB8t9b_Ayxlx1HrfZcaI28kw&s",
      title: "Customer Care Bot",
      description: "A chatbot application for customer care service using NLP techniques.",
      techStacks: ["Python", "NLTK", "Rasa"],
      githubLink: "https://github.com/jankoabel/-CustomerCare_Bot",
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
