import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import BelezaEstetica from './BelezaEstetica'
import ConstrucaoCivil from './ConstrucaoCivil'
import StyledInput from './StyledInput'
import Login from './Login'
import LoadingOverlay from './LoadingOverlay'
import '@fontsource/comfortaa/400.css'
import EscolhaCadastro from './cadastro.tsx'
import FormularioCadastro from './inputsCadastro.tsx'

const servicosConstrucao = [
  'alvenaria','pintura','eletricista','encanador','pedreiro',
  'carpinteiro','reforma','impermeabilizacao','acabamento',
  'manutencao','revestimento','estrutura','montagem','instalacao'
]

const servicosEstetica = [
  'corte','coloracao','barba','corte masculino','unhas','alongamento',
  'maquiagem social','noiva','limpeza de pele','tratamento facial',
  'depilacao a cera','laser','massagem relaxante','drenagem',
  'sobrancelhas','micropigmentacao','bronzeamento natural','spray'
]

function tirarAcento(texto: string) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()
}

function PaginaInicial() {
  const navegar = useNavigate()
  const [carregando, setCarregando] = useState(false)
  const [mensagem, setMensagem] = useState(false)

  function buscar(texto: string) {
    const txt = tirarAcento(texto.trim())

    const ehConstrucao = servicosConstrucao.some(s => tirarAcento(s).includes(txt))
    const ehEstetica = servicosEstetica.some(s => tirarAcento(s).includes(txt))

    if (!ehConstrucao && !ehEstetica) {
      alert('Serviço não encontrado!')
      return
    }

    setCarregando(true)
    setMensagem(false)

    let rota = ''
    if (ehConstrucao) rota = 'construcao_civil'
    else if (ehEstetica) rota = 'beleza_estetica'

    setTimeout(() => {
      setMensagem(true)
    }, 3000)

    setTimeout(() => {
      setCarregando(false)
      navegar(`/${rota}`)
    }, 6000)
  }

  return (
    <div className="container">
      <h1 className="titulo">LOCALS</h1>
      <StyledInput aoBuscar={buscar} />
      {carregando && <LoadingOverlay />}
      {mensagem && <div style={{color: 'white', marginTop: '20px', textAlign: 'center'}}>Nenhum prestador encontrado nas proximidades.</div>}
    </div>
  )
}

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial/>}/>
      <Route path="/construcao_civil" element={<ConstrucaoCivil/>}/>
      <Route path="/beleza_estetica" element={<BelezaEstetica/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<EscolhaCadastro />} />
      <Route path="/inputsCadastro" element={<FormularioCadastro />} />
    </Routes>
  )
}
