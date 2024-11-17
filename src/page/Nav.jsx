import logo from "../assets/Pet.svg";
function Nav() {
  return (
    <nav className=" w-full pt-2 z-20   bg-[#fd5d3f]  flex place-items-center justify-between   ">
      <div className="bg-white z-20 ml-20 rounded-full w-16 h-16 grid place-items-center  ">
        <a href="#Home">
          <img className="w-12 z-20 h-12 " src={logo} alt="logo" />
        </a>
      </div>
      <ul className="flex z-20 grid-cols-5 text-white mr-20">
        <li className="mx-2">
          <a
            className="hover:scale-110 hover:font-bold transition-all duration-300"
            href="#Home"
          >
            Location
          </a>
        </li>
        <li className="mx-2">
          <a
            className="hover:scale-110 hover:font-bold transition-all duration-300"
            href="#Blog"
          >
            Blog
          </a>
        </li>
        <li className="mx-2">
          <a
            className="hover:scale-110 hover:font-bold transition-all duration-300"
            href="#services"
          >
            Services
          </a>
        </li>
        <li className="mx-2">
          <a
            className="hover:scale-110 hover:font-bold transition-all duration-300"
            href="#AboutUs"
          >
            About Us
          </a>
        </li>
        <li className="mx-2">
          <a
            className="hover:scale-110 hover:font-bold transition-all duration-300"
            href="#FranchisewithUs"
          >
            Franchise with Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
