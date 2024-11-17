import chi from "../assets/chi.png";
import chi2 from "../assets/chi2.png"; 
import golden from "../assets/golden.png"; 
import golden2 from "../assets/golden2.png"; 

function Page404() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-redBg">
      <div className="rounded-full bg-[#f3f6fb] w-[80%] h-[80%]  items-center justify-center grid grid-cols-3 text-center">
        <div className="grid rounded-lg overflow-hidden p-12 relative grid-cols-5 ">
          <div className="col-span-1 z-50">
            <div className=" top-[200px] right-40 overflow-hidden bg-[#FFE530] w-60 h-60 rounded-[100%]">
              <img
                className="w-[13rem] h-auto mt-[-30px] ml-[15px]"
                src={golden}
                alt="Chiwawa"
              />
            </div>
            <div className="absolute top-12 left-12  w-60 h-60 rounded-[100%]">
              <img
                className="w-[13rem] h-auto mt-[-30px] ml-[15px]"
                src={golden2}
                alt="Chiwawa"
              />
            </div>
          </div>
        </div>

        <div className="text-redBg">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-xl">Page Not Found</p>
          <p className="mt-4 ">
            Sorry, the page you are looking for does not exist.
          </p>
          <a href="/home" className="font-bold text-xl text-[#FFE530]">
            Come back to the page
          </a>
        </div>
        <div className="grid rounded-lg overflow-hidden p-12 relative grid-cols-5 ">
          <div className="col-span-1 z-50">
            <div className=" top-[200px] right-40 overflow-hidden bg-[#FFE530] w-60 h-60 rounded-[100%]">
              <img
                className="w-[13rem] h-auto mt-[-30px] ml-[15px]"
                src={chi}
                alt="Chiwawa"
              />
            </div>
            <div className="absolute top-12 left-12  w-60 h-60 rounded-[100%]">
              <img
                className="w-[13rem] h-auto mt-[-30px] ml-[15px]"
                src={chi2}
                alt="Chiwawa"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;
