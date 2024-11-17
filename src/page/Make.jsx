import chi from "../assets/chi.png";
import chi2 from "../assets/chi2.png";
import "./page.css";
function Make() {
  const colors = [1, 2, 3, 4, 5];
  return (
    <div id="FranchisewithUs" className="sticky mt-48">
      <div className="bg-[#FFE530] z-30 h-64 w-64 absolute  -top-32  rounded-full -left-36 ">
        <div className="bg-[#fae529] h-52 w-48 absolute top-6 left-16 rounded-r-full z-10">
          <div className="bg-[#FFE530] h-48 w-32 absolute top-2 left-16 rounded-r-full z-20"></div>
        </div>
      </div>

      <div className="grid mx-48  rounded-lg border-2 overflow-hidden p-12 relative grid-cols-5 ">
        <div className="col-span-1 z-50">
          <div className=" top-[200px] right-40 overflow-hidden bg-[#FFE530] w-60 h-60 rounded-[100%]">
            <img
              className="w-[13rem] h-auto mt-[-30px] ml-[15px]"
              src={chi}
              alt="Chiwawa"
            />
          </div>
          <div className="absolute top-12 left-12  bg-transparent w-60 h-60 rounded-[100%]">
            <img
              className="w-[13rem] h-auto mt-[-30px] ml-[15px]"
              src={chi2}
              alt="Chiwawa"
            />
          </div>
        </div>

        <div className="col-span-4 ml-24 ">
          <div
            className={`absolute top-[-2rem] shadow-xl rounded-l-full z-[10] right-[-25%] w-[45%] h-[120%] bg-[#3f80fa]`}
          ></div>
          {colors.map((col, i) => (
            <div
              key={i}
              className={`absolute top-[-2rem] shadow-xl rounded-full w-[45%] h-[120%] bg-[#3f80fa]`}
              style={{
                right: `${-10 + 20 * i}%`,
                zIndex: 9 - i,
              }}
            ></div>
          ))}

          <div
            className={`absolute top-[-2rem] shadow-xl rounded-r-full z-[1] right-[40rem] w-[45%] h-[120%] bg-[#3f80fa]`}
          ></div>

          <div className="sticky z-50">
            <h3 className="text-[#FFE530] font-bold text-5xl">
              Make Fetch! Happen
            </h3>
            <p className="text-white text-xl mt-6">
              If you love pets and want exciting work, apply to be a Fetch! Pet
              Care Provider! We train every team member and provide ongoing
              support to help you get the most from your experience.
            </p>
            <button className="text-redBg bg-white rounded-full pb-1 mt-6 font-bold text-lg h-12 w-32">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Make;
