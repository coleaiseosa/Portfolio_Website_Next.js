"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Native Chat App",
    description:
      "A Chat app is an application for mobile devices. The application provides users with a chat interface and options to share images and location. It was built with React Native Expo and Google Firestore Database",
    image: "/images/projects/chatapp.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/coleaiseosa/The-Chat-App",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React MyFlix Client App",
    description:
      "myFlix application is a React built web application that will provide users with access to information about different movies, directors and genres. I built both the front end and the back end of the application which includes REST API and database ",
    image: "/images/projects/flix.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/coleaiseosa/myFlix-client",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Meet App",
    description:
      "A severless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calender API to fetch upcoming events. I also learnt how to include data visuals like graphs and piecharts",
    image: "/images/projects/meet.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/coleaiseosa/meeting",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "MyFlix movie Api",
    description:
      "In this project I was responsible for the Back end development. I created a REST API for the web application myFlix-client and MyFlix-Movies-Angular-client with different endpoints for movie and user data. It was built with NodeJS, Express, MongoDB, Mongoose and implemented JWT token-based user authentication.",
    image: "/images/projects/mongo.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/coleaiseosa/movie_api",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Angular MyFlix App",
    description:
      "myFlix application is an Angular built web application that will provide users with access to information about different movies, directors and genres. I built both the front end and the back end of the application which includes REST API and database. Angular Material was also used for the styling of the application",
    image: "/images/projects/Myflixangular.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/coleaiseosa/MyFlix-Movies-Angular-client",
    previewUrl: "https://coleaiseosa.github.io/MyFlix-Movies-Angular-client/",
  },
  {
    id: 6,
    title: "Pokemon App",
    description:
      "A Pokemon Application that consists of pokemon characters displaying the Name, Height, Weight and types of each Pokemon Character. Each Pokemon character was fetched dynamically from an API.  It helped me develop my Javascript and Bootstrap skills as well as working with a 3rd party Api",
    image: "/images/projects/pokemon.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/coleaiseosa/First-Js-App",
    previewUrl: "https://coleaiseosa.github.io/Pokemon-Js-App/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center  gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap:12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
