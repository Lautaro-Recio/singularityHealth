import { useState } from "react";
import { useNavigate } from "react-router-dom";
import petImg from "../assets/Pet.svg";
import Form from "./Form";
import wave from "../assets/menuwave.svg";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setLoading(true);
    setTimeout(() => {
      setShowLogin(false);
      navigate("/home");
    }, 3000);
  };

  return (
    <div className="grid bg-redBg overflow-hidden place-items-center sticky h-screen z-10 app grid-cols-2">
      {showLogin && (
        <div className="bg-white rounded-full w-72 h-72 grid place-items-center">
          <img
            className="w-52 h-52 pointer-events-none"
            src={petImg}
            alt="logo"
          />
          <img
            className="absolute  pointer-events-none top-52 -rotate-[85deg] right-10"
            src={wave}
            alt=""
          />
        </div>
      )}

      <div className="bg-white grid place-items-center w-full h-full">
        <Form onLoginSuccess={handleLoginSuccess} />
        {loading && (
          <div className="absolute left-0 pointer-events-none grid place-items-center bg-[#e28a8a72] w-full h-full">
            <div className="bg-white rounded-full w-72 h-72 grid place-items-center">
              <img
                className="w-52 h-52 pointer-events-none"
                src={petImg}
                alt="logo"
              />
            </div>
            <p className="text-white text-4xl font-semibold">Loading</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
