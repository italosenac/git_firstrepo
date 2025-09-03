import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LoadingOverlay from './LoadingOverlay'

export default function MapaBusca() {
  const location = useLocation()
  const destino = location.state?.destino || "/"
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mostrar = setTimeout(() => {
      setLoading(false)
      const mensagem = document.getElementById("mensagem")
      if (mensagem) mensagem.style.opacity = "1"
    }, 3000)

    const ir = setTimeout(() => {
      navigate(`/${destino}`)
    }, 6000)

    return () => {
      clearTimeout(mostrar)
      clearTimeout(ir)
    }
  }, [destino, navigate])

  if (loading) {
    return <LoadingOverlay />
  }

  return (
    <div className="mapa-container">
      <div className="mapa-fake"></div>
      <div id="mensagem" className="mensagem-erro">
        Nenhum prestador encontrado nas proximidades.
      </div>
    </div>
  )
}