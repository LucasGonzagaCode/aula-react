import './cons.css'
import { useState } from "react";
import axios from "axios";
const ConsumindoApi = () => {
  const [buscaCep, setbuscaCep] = useState();

  const [data,setData] = useState([]);

  const api = `https://viacep.com.br/ws/${buscaCep}/json/`;
  const NoReset = (e) => {
    e.preventDefault();
    axios
      .get(api)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
    <form>
       <label>Pesquise o usuário:</label>

      <input
        type="text"
        value={buscaCep}
        onChange={(e) => setbuscaCep(e.target.value)}
      ></input>
      <button onClick={NoReset}>Pesquisar</button>
    </form>
    
    <p>{
      data.length === 0? 'Digite um CEP'
    :
    `Bairro: ${data.bairro}`
    }
    </p>
    </>
  );
};
export default ConsumindoApi;
