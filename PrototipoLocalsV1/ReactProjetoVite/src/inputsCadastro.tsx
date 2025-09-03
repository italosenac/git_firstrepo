import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import LoadingOverlay from './LoadingOverlay'

type Dados = {
  razaoSocial: string
  cpfCnpj: string
  dataInicioAtividades: string
  tempoDeExperiencia: string
  email: string
  endereco: string
  telefone: string
  especialidade: string
}

export default function FormularioCadastro() {
  const [dados, setDados] = useState<Dados>({
    razaoSocial: '',
    cpfCnpj: '',
    dataInicioAtividades: '',
    tempoDeExperiencia: '',
    email: '',
    endereco: '',
    telefone: '',
    especialidade: ''
  })

  const navegar = useNavigate()
  const [loading, setLoading] = useState(false)

  function salvarCadastro() {
    setLoading(true)
    setTimeout(() => {
      navegar('/cadastro')
    }, 1500)
  }

  function LabelAnimada(texto: string) {
    return (
      <label>
        {texto.split('').map((letra, i) => (
          <span key={i} style={{fontFamily: 'Comfortaa', transitionDelay: `${i * 100}ms` }}>{letra}</span>
        ))}
      </label>
    )
  }

  return (
    <FormWrapper>
      <div className="container" style={{ fontFamily: 'Comfortaa' }}>
        {loading && <div className="carregando"><LoadingOverlay /></div>}
      </div>
        <InputsCardsWrapper>  
        <div className="inputs">
          <div className="form-control">
            <input
              type="text"
              placeholder=" "
              value={dados.razaoSocial}
              onChange={(e) => setDados({ ...dados, razaoSocial: e.target.value })}
            />
            {LabelAnimada('RAZÃO SOCIAL')}
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder=" "
              value={dados.cpfCnpj}
              onChange={(e) => setDados({ ...dados, cpfCnpj: e.target.value })}
            />
            {LabelAnimada('CPF/CNPJ')}
          </div>
          <div className="form-control">
            <input
              type="date"
              placeholder=" "
              value={dados.dataInicioAtividades}
              onChange={(e) => setDados({ ...dados, dataInicioAtividades: e.target.value })}
            />
            {LabelAnimada('DATA INÍCIO')}
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder=" "
              value={dados.tempoDeExperiencia}
              onChange={(e) => setDados({ ...dados, tempoDeExperiencia: e.target.value })}
            />
            {LabelAnimada('EXPERIÊNCIA')}
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder=" "
              value={dados.email}
              onChange={(e) => setDados({ ...dados, email: e.target.value })}
            />
            {LabelAnimada('EMAIL')}
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder=" "
              value={dados.endereco}
              onChange={(e) => setDados({ ...dados, endereco: e.target.value })}
            />
            {LabelAnimada('ENDEREÇO')}
          </div>
          <div className="form-control">
            <input
              type="tel"
              placeholder=" "
              value={dados.telefone}
              onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
            />
            {LabelAnimada('TELEFONE')}
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder=" "
              value={dados.especialidade}
              onChange={(e) => setDados({ ...dados, especialidade: e.target.value })}
            />
            {LabelAnimada('ESPECIALIDADE')}
          </div>
          <br></br>
          <div className="divbotaoSalvar">
            <button id="divbotaoSalvar" type="submit" onClick={salvarCadastro}>
              Cadastrar
            </button>
          </div>
          <div className="divbotaoSalvar">
            <h1
              className="titulo"
              style={{
              fontFamily: 'Comfortaa, cursive',
              textAlign: 'center',
              marginTop: '30px',
              fontSize: '3rem',
              letterSpacing: '6px'
              }}
            >
            LOCALS
            </h1>
          </div>
        </div>
        <div className="slider">
          <div className="list">
        <div className="item" style={{ '--position': 1 } as React.CSSProperties}>
          <div
            className="card"
            style={{
              background:
                'linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%), linear-gradient(0deg, rgba(1, 82, 188, 0.31) 0%, rgba(1, 82, 188, 0.31) 100%), url("https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80") lightgray 50% / cover no-repeat'
            }}
          >
        <p style={{fontFamily: 'Comfortaa', fontSize: '36px'}}>LAR E CONFORTO</p>
        </div>
        </div>
            <div className="item" style={{ '--position': 2 } as React.CSSProperties}>
              <div
                className="card"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%),
                                    linear-gradient(0deg, rgba(76, 30, 89, 0.5) 0%, rgba(76, 30, 89, 0.5) 100%),
                                    url("https://www.awplasticsurgery.com/wp-content/uploads/2023/12/the-5-most-effective-non-surgical-facial-procedures.jpg")`,
                  backgroundColor: 'lightgray',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
            <p style={{fontFamily: 'Comfortaa', fontSize: '36px'}}>BELEZA E ESTÉTICA</p>
              </div>
            </div>
            <div className="item" style={{ '--position': 3 } as React.CSSProperties}>
            <div
              className="card"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), linear-gradient(0deg, rgba(99, 57, 8, 0.50) 0%, rgba(99, 57, 8, 0.50) 100%), url(https://cdn.prod.website-files.com/625436eb446946c591a1e808/631255f7dbe79f8028b64f40_Thumbnail%20Post.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >              
            <p style={{fontFamily: 'Comfortaa', fontSize: '36px'}}>CONSTRUÇÃO CIVIL</p>
              </div>
            </div>
          </div>
        </div>
      </InputsCardsWrapper>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5vh;
  align-items: flex-start;
  gap: 12px;
  font-family: 'Comfortaa';
  margin-bottom: 0px;

`
const InputsCardsWrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  max-height: 100%;
  overflow: hidden;
  fontFamily: 'Comfortaa';
  .slider {
    flex: 1 1 40%;
    height: 100vh;
    margin-top: 0;
    margin-bottom: 0;
    position: relative;
    overflow: hidden;
    fontFamily: 'Comfortaa';
  }

  .list {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    fontFamily: 'Comfortaa';
  }

  .item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100%;
    animation: autoRun 10s linear infinite;
    transition: filter 0.5s;
    fontFamily: 'Comfortaa';
  }

  .item:hover {
    filter: grayscale(0);
  }

  .slider:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }

  .card {
    width: 100%;
    height: 100%;
    padding: 15px;
    color: white;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Comfortaa';
  }

  @keyframes autoRun {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }
`
