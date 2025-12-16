"use client";
import React, { useState } from "react";
import Titles from "../Titles";
import Descriptions from "../Descriptions";
import { projects } from "./data";

const Projects = ({ data = projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div id="projects" className="relative w-full">
      <Titles setSelectedProject={setSelectedProject} data={data} />
      <Descriptions selectedProject={selectedProject} data={data} />
    </div>
  );
};

// export default function Projects({ data = projects }) {
//   const [activeIndex, setActiveIndex] = useState(null); // State to track the currently open item
//
//   const handleItemClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index); // Toggle or set new active index
//   };
//
//   return (
//     <div className="accordion">
//       {data.map((item, index) => (
//         <Project
//           key={index}
//           data={data}
//           title={item.title}
//           content={item.content}
//           isOpen={index === activeIndex}
//           onClick={() => handleItemClick(index)}
//         />
//       ))}
//     </div>
//   );
// };

export default Projects;
