import { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Input,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
import VoltarBotao from "./VoltarBotao";
import LoadingOverlay from './LoadingOverlay';

function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 533.5 544.3">
      <path
        fill="#4285F4"
        d="M533.5 278.4c0-18.5-1.5-36.4-4.3-53.8H272v101.9h146.9c-6.4 34.5-25.8 63.7-55 83.3v69.3h88.9c52-47.9 82.7-118.4 82.7-200.7z"
      />
      <path
        fill="#34A853"
        d="M272 544.3c74.3 0 136.6-24.7 182.1-67.3l-88.9-69.3c-24.6 16.5-56.2 26.2-93.2 26.2-71.7 0-132.5-48.4-154.3-113.3H25.8v71.4C71.1 487.2 166.1 544.3 272 544.3z"
      />
      <path
        fill="#FBBC05"
        d="M117.7 324.9c-5.5-16.5-8.6-34.1-8.6-52.1s3.1-35.6 8.6-52.1V149.3H25.8C9.2 189.5 0 234.4 0 272.8s9.2 83.3 25.8 123.5l91.9-71.4z"
      />
      <path
        fill="#EA4335"
        d="M272 108.6c39.8 0 75.5 13.7 103.7 40.7l77.8-77.8C408.9 24.1 346.6 0 272 0 166.1 0 71.1 57.1 25.8 149.3l91.9 71.4C139.5 157 200.3 108.6 272 108.6z"
      />
    </svg>
  );
}

export default function Login() {
  const navegar = useNavigate();
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  function clicarCadastro() {
    setLoading(true)
    setTimeout(() => {
      navegar('/cadastro')
    }, 1500)
  }
  async function entrarComEmail() {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navegar("/escolher-perfil");
    } catch {
      alert("Erro no login com email e senha");
    }
  }

  async function entrarComGoogle() {
    try {
      await signInWithPopup(auth, provider);
      navegar("/escolher-perfil");
    } catch {
      alert("Erro no login com Google");
    }
  }

  return (
    <div className="divcadastro">    
    <VoltarBotao />
    <div className="container" style={{ fontFamily: 'Comfortaa'}}>
        {loading && (
      <div className="carregando">
      <LoadingOverlay />
      </div>
    )}
    </div>
      <Box
      w="100vw"
      h="100vh"
      bg="linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(0,0,0,0.8)), linear-gradient(90deg, rgba(50,50,50,0.95), rgba(30,30,30,0.95), rgba(10,10,10,0.95))"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
    >
      <Flex w="100%" h="100%" align="center" justify="center">
        <Box
          w="100%"
          maxW="400px"
          p={8}
          bg="rgba(0, 0, 0, 0)"
          borderRadius="md"
          backdropFilter="blur(8px)"
        >
          <VStack spacing={4} w="100%">
            <Text fontSize="48px" fontFamily="Comfortaa" color="white">
              LOCALS
            </Text>
            <Button onClick={clicarCadastro} id = "botaocadastro" background={"none"} fontSize="18px" fontFamily="Comfortaa" color="white">
              Cadastre-se
            </Button>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="rgba(255,255,255,0.2)"
              h="40px"
              borderRadius="10px"
              px={12}
              color="white"
              border="none"
              fontFamily="Comfortaa"
              _placeholder={{ color: "white" }}
              _focus={{ boxShadow: "none", bg: "rgba(255,255,255,0.3)" }}
              w="100%"
            />
            <Input
              placeholder="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              bg="rgba(255,255,255,0.2)"
              h="40px"
              borderRadius="10px"
              px={12}
              color="white"
              border="none"
              fontFamily="Comfortaa"
              _placeholder={{ color: "white" }}
              _focus={{ boxShadow: "none", bg: "rgba(255,255,255,0.3)" }}
              w="100%"
            />
            <Button
              w="50%"
              bg="rgba(255, 255, 255, 0)"
              color="white"
              fontFamily="Comfortaa"
              onClick={entrarComEmail}
              _hover={{ bg: "rgba(255,255,255,0.3)" }}
              _focus={{ boxShadow: "none" }}
              h="40px"
              borderRadius="10px"
            >
              Entrar
            </Button>
            <Text color="white" fontFamily="Comfortaa" textAlign="center" w="100%">
              ou
            </Text>
            <IconButton
              aria-label="Entrar com Google"
              icon={<GoogleIcon />}
              onClick={entrarComGoogle}
              bg="transparent"
              _hover={{ bg: "gray.100" }}
              _focus={{ boxShadow: "none" }}
              w="50%"
              h="40px"
              borderRadius="10px"
              justifyContent="center"
            />
          </VStack>
        </Box>
      </Flex>
    </Box>
    </div>
  );
}
