import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import VoltarBotao from "./VoltarBotao";
import LoadingOverlay from './LoadingOverlay';
import BotaoConsumidor from './BotaoConsumidor.tsx';
import BotaoPrestador from './BotaoPrestador.tsx';
import '@fontsource/comfortaa/400.css'

export default function EscolhaCadastro(){
const navegar = useNavigate();
const [loading, setLoading] = useState(false)

function clicarLoading() {
    setLoading(true)
    setTimeout(() => {
      navegar('/inputsCadastro')
    }, 3000)
  }
  
return (
  <div className="divcadastro">
    <VoltarBotao />
    <div className="consumidorprestador" style={{ fontFamily: 'Comfortaa' }}>
      {loading && (
        <div className="carregando">
          <LoadingOverlay />
        </div>    
      )}
    <div  onClick={clicarLoading}>
    <BotaoConsumidor />
    </div>
    <br></br>
    <div onClick={clicarLoading}>
    <BotaoPrestador />
    </div>
    </div>
  </div>
);
}