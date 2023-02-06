import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./styles.css";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/private");
      } else {
        alert("Não deu certo.");
      }
    }
  };

  return (
    <div className="container">
      <form className="form-container">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={handleEmailInput}
          placeholder="Digite seu e-mail"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordInput}
          placeholder="Digite sua senha"
        />
        <button className="btn-button" onClick={handleLogin}>
          Logar
        </button>
      </form>
    </div>
  );
};
