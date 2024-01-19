"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwibd CSS</li>
        <li>BootStrap</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>React</li>
        <li>Scrum(Trello)</li>
        <li>Jira</li>
        <li>Figma</li>
        <li>Zeplin</li>
        <li>Adobe Photoshop</li>
        <li>Microsoft Office</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Full-Stack Web development, CareerFoundry</li>
        <li>Ambrose Alli University</li>
      </ul>
    ),
  },

  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificate in Full-Stack Web development, CareerFoundry.</li>
        <li>Certificate in UI/UX design, Girl code academy.</li>
        <li>Certificate in Graphic designing, SheDesign Africa.</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransititon] = useTransition();

  const handleTabChange = (id) => {
    startTransititon(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, My name is Aiseosa Marcella Cole. I am a web developer with a
            background in Graphic designing. I am proficient in languages like
            HTML, CSS and JavaScript and frameworks such as React. I love
            creating user-friendly and visually appealing websites.
            <br></br>
            My approach is rooted in effective communication and collaboration.
            I enjoy working with clients and cross-functional teams to
            understand their unique requirements and deliver tailored solutions
            that exceed expectations. I believe in the power of continuous
            learning so I am always looking to expand my knowledge. Outside
            coding, you will find me designing clothes, reading a book or just
            spending time outdoors. If you want to discuss further please get in
            touch.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
