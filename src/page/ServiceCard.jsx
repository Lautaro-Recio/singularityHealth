function ServiceCard(props) {
  // eslint-disable-next-line react/prop-types
  const { image, title, func } = props;

  return (
    <>
      {image ? (
        <button
          onClick={func}
          className="bg-white p-4 grid place-items-center w-44 h-44 rounded-lg shadow-xl text-center"
        >
          <img src={image} alt={title} className="w-14 h-14 mx-auto" />
          <p className="text-l text-[#707070]">{title}</p>
        </button>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default ServiceCard;
