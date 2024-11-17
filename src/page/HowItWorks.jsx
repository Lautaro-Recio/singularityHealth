import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ZipCode from "./ZipCode";
import reserve from "../assets/Grupo69.svg";
import match from "../assets/Grupo70.svg";
import relax from "../assets/Grupo71.svg";
import Spans from "./Spans";

function HowItWorks() {
  const works = [
    {
      id: 1,
      title: "Reserve",
      image: reserve,
      parraf: "Easily schedule services that fit your needs.",
      parraf2: "Choose a time that works best for you.",
    },
    {
      id: 2,
      title: "",
      image: "",
      parraf: "",
      parraf2: "",
    },
    {
      id: 3,
      title: "",
      image: "",
      parraf: "",
      parraf2: "",
    },
    {
      id: 4,
      title: "Match",
      image: match,
      parraf: "We’ll pair you with the perfect sitter or walker.",
      parraf2: "Your pet is in trusted hands.",
    },
    {
      id: 5,
      title: "Relax",
      image: relax,
      parraf: "Sit back and enjoy peace of mind.",
      parraf2: "We’ve got this covered for you.",
    },
    {
      id: 6,
      title: "",
      image: "",
      parraf: "",
      parraf2: "",
    },
  ];

  const [selectedWork, setSelectedWork] = useState({
    title: "How it Works",
    parraf: "Because finding a good pet sitter shouldn’t be ",
    parraf2: "a hassle. With Fetch! It’s as easy as…",
  });

  return (
    <>
      <div id="AboutUs" className="grid sticky mt-32 grid-cols-2 ml-32">
        {/* Background Circles */}
        <div className="bg-[#FFE530] z-10 h-[135%] w-[135%] absolute -top-[6rem] rounded-full -right-[108%]">
          <div className="bg-[#fae529] z-20 h-[90%] w-[100%] absolute top-2 rounded-full -right-[1]">
            <div className="bg-[#FFE530] z-20 h-[80%] w-[100%] absolute top-2 rounded-full -right-[15rem]"></div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 z-50 gap-4">
          {works.map((work) => (
            <ServiceCard
              image={work.image}
              title={work.title}
              key={work.id}
              func={() => setSelectedWork(work)} // Update content dynamically
            />
          ))}
        </div>

        {/* Decorative Spans */}
        <div className="absolute left-[13%] z-50 top-[5%] h-48 flex">
          <Spans />
        </div>
        <div className="absolute left-[26%] top-[41%] rotate-[110deg] h-48 flex">
          <Spans />
        </div>

        {/* ZipCode Section */}
        <div className="z-50 ml-[15%]">
          <ZipCode
            title={selectedWork.title}
            parraf={selectedWork.parraf}
            parraf2={selectedWork.parraf2}
          />
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
