function ZipCode(props) {
  // eslint-disable-next-line react/prop-types
  const { title, parraf,parraf2 } = props;

  return (
    
    <div className=" z-50">
      <h3 className="text-redBg font-bold text-5xl">{title}</h3>
      <p className="text-[#808080] mt-8">{parraf}</p>
      <p className="text-[#808080] ">{parraf2}</p>
      <p className="text-redBg font-bold my-4">
        Enter Your Location and Fetch Our Services
      </p>
      
      <div className=" bg-white flex p-1 shadow w-60 rounded-r-[50px] rounded-l-[50px] place-items-center">
        <input
          type="text"
          className=""
          placeholder="     Zip Code"
        />
        <button className="bg-redBg text-white rounded-full pb-1 font-bold text-xl h-12 w-12">
          →
        </button>
      </div>
    </div>
  );
}

export default ZipCode;
