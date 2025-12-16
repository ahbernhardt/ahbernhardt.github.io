"use client"
import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left font-semibold text-lg focus:outline-none hover:bg-gray-50 transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
      >
        {title}
        <span className={`text-xl transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div
          id={`accordion-content-${title}`}
          className="px-6 text-gray-700"
        >
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden z-1">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
export default Accordion;

