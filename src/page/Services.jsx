import { useState } from "react";
import dog from "../assets/dog.svg";
import sitting from "../assets/Grupo63.svg";
import otherSer from "../assets/Grupo64.svg";
import nightCare from "../assets/Grupo65.svg";
import ServiceCard from "./ServiceCard";
import ZipCode from "./ZipCode";
import wave from "../assets/wave.svg";
import wave2 from "../assets/waves2.svg";
import wave3 from "../assets/wave3.svg";
import wave4 from "../assets/wave4.svg";

function Services() {
  const services = [
    {
      id: 1,
      title: "Dog Walking",
      image: dog,
      parraf: "Professional and caring dog walking services.",
      parraf2: "Your pet’s happiness is our priority.",
    },
    {
      id: 2,
      title: "Pet Sitting",
      image: sitting,
      parraf: "Reliable and loving care while you’re away.",
      parraf2: "Peace of mind for you and your pets.",
    },
    {
      id: 3,
      title: "Overnight Care",
      image: nightCare,
      parraf: "Comfortable overnight stays for your pets.",
      parraf2: "Ensuring they feel at home.",
    },
    {
      id: 4,
      title: "Other Services",
      image: otherSer,
      parraf: "Custom services tailored to your pet’s needs.",
      parraf2: "We’re here to help with everything else.",
    },
  ];

  const [selectedService, setSelectedService] = useState({
    title: "Our Services",
    parraf: "National Brand With a Local Feel.",
    parraf2: "Experience the Fetch! Difference",
  });

  return (
    <div id="services" className="sticky">
      {/* Waves */}
      <div className="absolute w-[150%] z-0 -top-[10rem]">
        <img src={wave} alt="waves" className="translate-y-[1rem] -rotate-12 z-10" />
        <img src={wave2} alt="waves" className="-translate-y-32 z-20" />
        <div className="absolute h-2 -scale w-[75%] z-0 top-[13rem] -left-40 -rotate-3">
          <img src={wave3} alt="waves" className="absolute z-10" />
          <img src={wave4} alt="waves" className="absolute translate-y-2/3 -top-10 z-20" />
        </div>
      </div>

      {/* Content */}
      <div className="my-20 grid place-items-center grid-cols-2">
        {/* ZipCode */}
        <div className="z-50 mb-auto">
          <ZipCode
            title={selectedService.title}
            parraf={selectedService.parraf}
            parraf2={selectedService.parraf2}
          />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 z-30 gap-4">
          {services.map((ser) => (
            <ServiceCard
              image={ser.image}
              title={ser.title}
              key={ser.id}
              func={() => setSelectedService(ser)} // Update selected service
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
