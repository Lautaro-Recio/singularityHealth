import { useState } from "react";
import user from "../assets/user.jpg";

function Carousel() {
  const cards = [
    {
      id: 1,
      name: "Name 1",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto id dignissimos, laboriosam provident atque deleniti eum itaque.",
    },
    {
      id: 2,
      name: "Name 2",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto id dignissimos, laboriosam provident atque deleniti eum itaque.",
    },
    {
      id: 3,
      name: "Name 3",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto id dignissimos, laboriosam provident atque deleniti eum itaque.",
    },
    {
      id: 4,
      name: "Name 4",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto id dignissimos, laboriosam provident atque deleniti eum itaque.",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel relative w-3/5 mx-[20%] h-[400px] grid place-items-center">
      <div className="relative w-3/5 h-full flex items-center justify-center">
        {cards.map((card, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index === (currentIndex - 1 + cards.length) % cards.length;
          const isNext = index === (currentIndex + 1) % cards.length;
          const backgroundColor =
            card.id % 2 === 0
              ? [
                  "bg-[#fd6845]", 
                  "bg-[#ea5e41]", 
                  "bg-[#e25a40]", 
                ]
              : [
                  "bg-[#4487ff]", 
                  "bg-[#3f7af2]",
                  "bg-[#3d75ec]", 
                ];

          return (
            <div
              key={card.id}
              className={`absolute w-2/3 overflow-hidden transition-all duration-500 transform shadow-2xl ${
                isActive
                  ? "translate-x-0 scale-100 z-40"
                  : isPrev
                  ? "-translate-x-3/4 scale-90 z-0"
                  : isNext
                  ? "translate-x-3/4 scale-90 z-0"
                  : "opacity-0"
              } rounded-lg p-6 text-white w-full h-[300px] flex flex-col items-center`}
            >
              <div className="absolute w-full h-full -top-20 left-0 -z-10">
                <div
                  className={`absolute ${backgroundColor[0]} -z-10 h-full left-[10rem] rounded-l-full rounded-t-none rounded-r-none rounded-b-full rotate-[0deg] w-[150%]`}
                ></div>
                <div
                  className={`absolute ${backgroundColor[1]} -z-20 h-full -top-10 -left-20 rounded-l-full rounded-t-none -rounded-r-none rounded-b-full rotate-[45deg] w-[150%]`}
                ></div>
                <div
                  className={`absolute ${backgroundColor[2]} -z-30 h-[150%] top-0 left-0 w-[150%]`}
                ></div>
              </div>

              <img
                src={user}
                alt={card.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h2 className="text-lg mt-2 z-50 font-bold">{card.name}</h2>
              <p className="text-sm mt-7 z-50 text-center">{card.text}</p>
            </div>
          );
        })}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute -left-60 top-1/2 transform z-50 -translate-y-1/2 bg-redBg text-white rounded-full shadow-lg h-12 w-12 text-2xl"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute -right-60 top-1/2 transform z-50 -translate-y-1/2 bg-redBg text-white rounded-full shadow-lg h-12 w-12 text-2xl"
      >
        &#8594;
      </button>
    </div>
  );
}

export default Carousel;
