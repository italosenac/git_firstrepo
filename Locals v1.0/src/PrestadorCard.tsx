import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Prestador = {
  nome: string;
  qtdAvaliacoes: number;
  tempoExp: number;
  nota: number;
  especialidades: string[];
  imagem: string;
};

type Props = {
  prestador: Prestador;
  onClick: () => void;
  tamanho: "normal";
};

const tamanhos = {
  normal: {
    largura: "200px",
    altura: "250px",
    fonteNome: "12px",
    fonteInfo: "9px",
    fonteEsp: "7px",
    alturaInfo: "64px",
    alturaBotoes: "36px",
  },
};

export default function PrestadorCard({ prestador, tamanho }: Props) {
  const {
    largura,
    altura,
    fonteNome,
    fonteInfo,
    fonteEsp,
    alturaInfo,
    alturaBotoes,
  } = tamanhos[tamanho];
  const pct = (prestador.nota / 5) * 100;
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const [dataSelecionada, setDataSelecionada] = useState("");
  const navigate = useNavigate();

  function abrirDetalhes() {
    setMostrarDetalhes(!mostrarDetalhes);
  }

  function agendar() {
    navigate("/login");
  }

  return (
    <div
      style={{
        width: largura,
        fontFamily: "'Comfortaa', cursive",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "none",
      }}
    >
      <div
        onClick={abrirDetalhes}
        style={{
          width: "100%",
          height: altura,
          cursor: "pointer",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.61)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s ease",
          transformOrigin: "top center",
          zIndex: 2,
          position: "relative",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div
          style={{
            flex: 1,
            position: "relative",
            minHeight: `calc(${altura} - ${alturaInfo})`,
          }}
        >
          <img
            src={prestador.imagem}
            alt={prestador.nome}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              fontWeight: "bold",
              fontSize: fonteNome,
              padding: "3px 4px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {prestador.nome}
          </div>
        </div>
        <div
          style={{
            padding: "12px",
            backgroundColor: "rgba(255,255,255,0.1)",
            height: alturaInfo,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontWeight: "lighter",
              fontSize: fonteInfo,
              marginTop: "-8px",
              marginBottom: "8px",
            }}
          >
            Experiência: {prestador.tempoExp} ano(s)
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: fonteInfo,
            }}
          >
            <span style={{ fontWeight: "lighter", fontSize: fonteInfo }}>
              Avaliações: {prestador.qtdAvaliacoes}
            </span>
            <span style={{ fontWeight: "lighter", fontSize: fonteInfo }}>
              {prestador.nota.toFixed(1)} ★
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: 6,
              backgroundColor: "rgba(255, 255, 255, 0.64)",
              borderRadius: 5,
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                backgroundColor: "rgba(20, 22, 25, 0.95)",
                borderRadius: 4,
                transition: "width .3s",
                alignItems: "center",
              }}
            />
          </div>
          <div
            style={{
              fontSize: fonteEsp,
              fontWeight: "lighter",
              marginTop: 8,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {prestador.especialidades.join(", ").toUpperCase()}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "8px",
          marginTop: "8px",
          width: "100%",
          height: alturaBotoes,
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        <button
          style={{
            position: "relative",
            fontFamily: "'Comfortaa'",
            fontSize: "9px",
            background: "none",
            border: "transparent",
            color: "white",
            borderRadius: "6px",
            padding: "6px 10px",
            cursor: "pointer",
            textTransform: "uppercase",
            flex: 1,
          }}
        >
          ★ FAVORITAR
        </button>
        <button
          style={{
            position: "relative",
            fontFamily: "'Comfortaa'",
            fontSize: "9px",
            background: "none",
            border: "transparent",
            color: "white",
            borderRadius: "6px",
            padding: "6px 10px",
            cursor: "pointer",
            textTransform: "uppercase",
            flex: 1,
          }}
        >
          ⚠ DENUNCIAR
        </button>
      </div>

      {mostrarDetalhes && (
        <div
          style={{
            width: "90%",
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "rgba(20, 20, 20, 0.5)",
            borderRadius: "10px",
            fontSize: "10px",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <div><strong></strong> Profissional liberal com paixão pelo que faz.</div>
          <br></br>
          <div><strong>Contato:</strong> (81) 99999-8888</div>
          <div><strong>Endereço:</strong> Rua das Palmeiras, 123 - Recife/PE</div>
          <div><strong>Serviços nos últimos 90 dias:</strong> 27</div>
          <div>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: 4 }}>
              Escolha uma data para agendamento:
            </label>
            <input
              type="date"
              value={dataSelecionada}
              onChange={(e) => setDataSelecionada(e.target.value)}
              style={{
                width: "100%",
                fontFamily: "Comfortaa",
                padding: "4px",
                fontSize: "10px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "rgba(255,255,255,0.5)",
                color: "white",
              }}
            />
          </div>
          <button
            onClick={agendar}
            style={{
              marginTop: "8px",
              padding: "6px",
              fontFamily: "Comfortaa",
              fontSize: "10px",
              backgroundColor: "rgba(29, 26, 26, 0.42)",
              border: "none",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
              textTransform: "uppercase",
              position: 'inherit'
            }}
          >
            Agendar
          </button>
        </div>
      )}
    </div>
  );
}
