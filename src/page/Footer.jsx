function Footer() {
  return (
    <div className="mt-20 py-10 pt-20 text-white px-20 sticky overflow-hidden  place-items-center    grid grid-cols-4">
        <div className="absolute top-0 -left-1/4 w-[150%]  bg-redBg -z-10 translate-y-10 h-[90%] rounded-t-[100%] "></div>
      <div className="col-span-1">
        <ul>
          <li className="my-2 text-[#FFE530] font-semibold">About</li>
          <li className="my-2 ">Locations</li>
          <li className="my-2 ">Franchise With Us</li>
          <li className="my-2 ">Partners</li>
          <li className="my-2 ">About us</li>
          <li className="my-2 ">Make Fetch Happen!</li>
        </ul>
      </div>
      <div className="col-span-1">
        <ul>
          <li className="my-2 text-[#FFE530] font-semibold">Resources</li>
          <li className="my-2 ">Rewies</li>
          <li className="my-2 ">Per Resource Center</li>
          <li className="my-2 ">Media Fact Sheet</li>
          <li className="my-2 ">Blog</li>
          <li className="my-2 ">News</li>
        </ul>
      </div>
      <div className="col-span-1">
        <ul>
          <li className="my-2 text-redBg">a</li>
          <li className="my-2 ">Gift Cards</li>
          <li className="my-2 ">Services</li>
          <li className="my-2 ">Franchise Login</li>
          <li className="my-2 ">Terms of Use</li>
          <li className="my-2 ">Privacy Policy</li>
        </ul>
      </div>
      <div className="col-span-1 ">
        <div className="">
            
          <h3 className="text-[#FFE530] font-bold text-lxl">NewSletter</h3>
          <p className="text-white mt-2">Sign up to receive the Fetch!</p>
          <p className="text-white ">Family Newsletter</p>
          

          <div className=" bg-white flex p-1 mt-5 shadow w-60 rounded-r-[50px] rounded-l-[50px] place-items-center">
            <input type="text" className="" placeholder=" Email Adress" />
            <button className="bg-redBg text-white rounded-full pb-1 font-bold text-xl h-12 w-12">
              →
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Footer;
