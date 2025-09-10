import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  aoBuscar: (texto: string) => void
}

export default function StyledInput({ aoBuscar }: Props) {
  const [valor, setValor] = useState('')
  const label = 'O QUE VOCÊ ESTÁ BUSCANDO?'

  function teclaPressionada(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && valor.trim() !== '') {
      e.preventDefault()
      aoBuscar(valor)
    }
  }

  return (
    <FormWrapper>
      <div className="wave-group">
        <input
          type="text"
          className="input"
          value={valor}
          onChange={e => setValor(e.target.value)}
          onKeyDown={teclaPressionada}
          required
        />
        <span className="bar" />
        <label className="label">
          {label.split('').map((char, i) => (
            <span key={i} className="label-char" style={{ '--index': i } as React.CSSProperties}>
              {char}
            </span>
          ))}
        </label>
      </div>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  font-family: 'Comfortaa';

  .wave-group {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }

  .input {
    font-size: 16px;
    padding: 8px 8px 8px 5px;
    width: 100%;
    border: none;
    margin-top: 8px;
    margin-left: 10px;
    border-bottom: 1px solid #515151;
    background: linear-gradient(
      90deg,
      rgba(250, 248, 248, 0.6) 33.65%,
      rgba(233, 231, 231, 0.6) 80.77%,
      rgba(174, 171, 171, 0.6) 100%
    );
    color: black;
    font-family: 'Comfortaa';
  }

  .input:focus {
    outline: none;
  }

  .label {
    position: absolute;
    left: 0;
    font-size: 12px;
    color: transparent;
    display: flex;
    pointer-events: none;
    font-family: 'Comfortaa';
  }

  .label-char {
    transition: 0.2s ease all;
    transition-delay: calc(var(--index) * 0.05s);
    display: inline-block;
    margin-right: 22px;
  }

  .input:focus ~ .label .label-char,
  .input:valid ~ .label .label-char {
    transform: translateY(-32px);
    font-size: 18px;
    color: white;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  .bar:before,
  .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: white;
    transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }
`