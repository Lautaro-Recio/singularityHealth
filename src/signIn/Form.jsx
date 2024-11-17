import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [invalid, setInvalid] = useState(true);

  // Función de validación de la contraseña
  const passwordOnChange = (value) => {
    const isValid = value.length > 5 && /[A-Z]/.test(value);
    setPassword(isValid);
    updateFormValidity(email, isValid);
  };

  // Función de validación del email
  const emailOnChange = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmail(isValid);
    updateFormValidity(isValid, password);
  };

  // Función para actualizar el estado de validez general
  const updateFormValidity = (emailValid, passwordValid) => {
    setInvalid(!(emailValid && passwordValid));
  };

  return (
    <form className="grid w-2/3">
      <span className="h-8 w-2 bg-redBg flex text-redBg ">
        <h3 className="text-[#4d4f5c] font-bold text-xl ml-5">BIENVENIDO</h3>
      </span>
      <div>
        <input
          className="w-full p-2 pl-5 shadow-custom shadow-slate-500/50 mt-4"
          type="email"
          placeholder="EMAIL"
          onChange={(e) => emailOnChange(e.target.value)}
        />
        {!email && (
          <span className="text-red-500">*Debes ingresar un email válido</span>
        )}
      </div>
      <div>
        <input
          className="w-full p-2 pl-5 shadow-custom shadow-slate-500/50 mt-2"
          type="password"
          placeholder="CONTRASEÑA"
          onChange={(e) => passwordOnChange(e.target.value)}
        />
        {!password && (
          <span className="text-red-500">
            *La contraseña debe tener más de 5 caracteres y al menos una
            mayúscula
          </span>
        )}
      </div>
      <p className="text-registerGray my-8 text-right">
        ¿Olvidaste tu contraseña?
      </p>
      <div className="grid place-items-center">
        <button
          className={`font-semibold h-16 w-48 text-white rounded-[38px] mt-2 ${
            invalid
              ? "pointer-events-none bg-blue-300 cursor-not-allowed"
              : "pointer-events-auto cursor-pointer bg-buttonBlue"
          }`}
          type="submit"
          disabled={invalid} 
          onClick={(e) => {
            e.preventDefault();
            if (!invalid) {
              onLoginSuccess();
            }
          }}
        >
          INICIAR SESIÓN
        </button>
        <p className="text-xs text-registerGray mt-8">
          AÚN NO TENGO CUENTA
          <span className="text-registerBlue"> REGISTRARSE</span>
        </p>
      </div>
    </form>
  );
};

export default Form;
