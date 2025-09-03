import styled from "styled-components";
import "@fontsource/comfortaa/400.css";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(100%);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 40%;
`;

const SpinnerCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 45%;
  opacity: 0.3;
  background: var(
    --salvo,
    radial-gradient(circle, rgba(233, 231, 231, 0.36) 80.77%, rgba(0, 0, 0, 0.47) 100%)
  );
  mix-blend-mode: luminosity;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Comfortaa', cursive;
  color: white;
  font-size: 0.6rem;
  font-weight: 400;
  opacity: 0.6;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
`;

const LoadingOverlay = () => {
  return (
    <Overlay>
      <Spinner>
        <SpinnerCircle />
        <LoadingText>Aguarde...</LoadingText>
      </Spinner>
    </Overlay>
  );
};

export default LoadingOverlay;
