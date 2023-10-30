import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import './Input.css'

const InputUseState = () => {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const [vLogin, setVlogin] = useState();

  const VerificaLogin = (e) => {
    e.preventDefault(); //Não recarregar a pagina
    Decisao(login, senha);
  };
  const Decisao = () => {
    if (login.toLowerCase() === "lucas" && senha === "123") {
      setVlogin(true);
    } else {
      if (login.toLowerCase() === "lucas" && senha !== "123") {
        setVlogin("Senha incorreta");
      } else if (login.toLowerCase() !== "lucas" && senha === "123") {
        setVlogin("Usuário incorreto");
      } else {
        setVlogin("Usuário e senha incorretos");
      }
    }
  };

  return (
    <form>
      <div>
        <label>Login:</label>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Digite o login"
        ></input>
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite a senha"
        ></input>
      </div>
      <div>
        <button onClick={VerificaLogin}>Acessar</button>
      </div>

      {vLogin === true ? <p>Sucesso no Acesso</p> : ""}
      {vLogin !== true ? <p>{vLogin}</p> : ""}
    </form>
  );
};

export default InputUseState;
