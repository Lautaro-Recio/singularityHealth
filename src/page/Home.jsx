import dog from "../assets/golden.png";
import dog2 from "../assets/golden2.png";
import wave from "../assets/wavered.svg";
import wave2 from "../assets/wave2home.svg";

function Home() {
  return (
    <div id="Home" className="relative grid  h-screen grid-cols-2 text-white">
      <div className="absolute z-10 w-[110%] top-10">
        <img className="absolute -rotate-[2deg]  -top-32" src={wave} alt="" />
        <img
          className="absolute -rotate-[20deg] -top-72 -left-30"
          src={wave}
          alt=""
        />
        <img
          className="absolute -rotate-[15deg] -top-5 -left-96"
          src={wave}
          alt=""
        />
        <img
          className="absolute -rotate-[20deg] -top-35 -left-20"
          src={wave}
          alt=""
        />
        <img className="absolute -left- -top-60" src={wave} alt="" />
      </div>

      <div className="absolute rotate-[180deg] -left-40 z-10 w-[120%] -top-5">
        <img className="absolute -rotate-[2deg]  -top-32" src={wave2} alt="" />
        <img
          className="absolute -rotate-[20deg] -top-72 -left-30"
          src={wave2}
          alt=""
        />
        <img
          className="absolute -rotate-[15deg] -top-5 -left-96"
          src={wave2}
          alt=""
        />
        <img
          className="absolute -rotate-[20deg] -top-35 -left-20"
          src={wave2}
          alt=""
        />
        <img className="absolute -left- -top-60" src={wave2} alt="" />
      </div>
      

      <div className="ml-20 z-20 pt-32">
        <h1 className="text-[60px] mb-6 font-semibold">We Get Pet Care!</h1>
        <p className="max-w-96 text-left  ">
          For over 17 Years,Fetch! Pet Care has been a trusted partner in
          keeping pets healty and happy!
        </p>
        <div className="flex mt-6 place-items-center text-w">
          <button
            className="font-semibold h-14 w-42 p-4  rounded-[38px]  pointer-events-auto cursor-pointer text-m bg-buttonBlue mr-4"
            type="submit"
          >
            Schedule Service
          </button>
          <p>Or call 866.338.2463</p>
        </div>
      </div>
      <div className="z-20 ">
        <div className="absolute top-[200px] right-40 overflow-hidden bg-[#FFE530] w-96 h-96 rounded-[100%]">
          <img
            className="w-[21rem] h-auto mt-[-100px] ml-[40px]"
            src={dog}
            alt="golden retriever"
          />
        </div>
        <div className="absolute top-[200px] right-40  bg-transparent w-96 h-96 rounded-[100%]">
          <img
            className="w-[21rem] h-auto mt-[-100px] ml-[40px]"
            src={dog2}
            alt="golden retriever"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
