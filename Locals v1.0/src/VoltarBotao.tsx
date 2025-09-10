import { useNavigate } from "react-router-dom";

function VoltarBotao() {
  const navigate = useNavigate();

  function voltar() {
    navigate("/");
  }

  return (
    <button onClick={voltar} className="voltar" type="button">
      VOLTAR
    </button>
  );
}

export default VoltarBotao;
