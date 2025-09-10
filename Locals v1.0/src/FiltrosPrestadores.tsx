import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";

type Prestador = {
  nome: string;
  nota: number;
  especialidades: string[];
  imagem: string;
};

type Props = {
  prestador: Prestador;
  aoClicar: () => void;
  tamanho: "pequeno" | "medio" | "grande";
};

const tamanhos = {
  pequeno: { largura: "10rem", altura: "18rem", fonteNome: "md", fonteInfo: "xs", alturaInfo: "6rem" },
  medio: { largura: "15rem", altura: "26rem", fonteNome: "lg", fonteInfo: "sm", alturaInfo: "8rem" },
  grande: { largura: "20rem", altura: "34rem", fonteNome: "xl", fonteInfo: "md", alturaInfo: "10rem" },
};

export default function CartaoPrestador({ prestador, aoClicar, tamanho }: Props) {
  const { largura, altura, fonteNome, fonteInfo, alturaInfo } = tamanhos[tamanho];
  const listaEspecialidades = prestador.especialidades.join(", ");
  const barraNota = (prestador.nota / 5) * 100;

  return (
    <Box
      onClick={aoClicar}
      w={largura}
      h={altura}
      cursor="pointer"
      bg="rgba(255,255,255,0.1)"
      backdropFilter="blur(8px)"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      _hover={{ transform: "scale(1.05)", transition: "0.5s" }}
      fontFamily="Comfortaa"
      display="flex"
      flexDirection="column"
    >
      <Box flex="1" position="relative" minH={`calc(${altura} - ${alturaInfo})`}>
        <Image
          src={prestador.imagem}
          alt={prestador.nome}
          w="100%"
          h="100%"
          objectFit="cover"
          borderTopRadius="lg"
        />
        <Box
          position="absolute"
          bottom="0"
          w="100%"
          bg="rgba(0,0,0,0.6)"
          color="white"
          fontWeight="bold"
          fontSize={fonteNome}
          p="2"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {prestador.nome}
        </Box>
      </Box>

      <VStack align="start" spacing="1" p="3" bg="rgba(255,255,255,0.1)" h={alturaInfo}>
        <HStack justify="space-between" w="100%">
          <Text fontSize={fonteInfo}>Nota:</Text>
          <Text fontWeight="bold" fontSize={fonteInfo}>{prestador.nota.toFixed(1)}</Text>
        </HStack>

        <Box w="100%" h="6px" bg="whiteAlpha.300" borderRadius="md">
          <Box
            h="100%"
            w={`${barraNota}%`}
            bg="whiteAlpha.700"
            borderRadius="md"
            transition="width 0.3s"
          />
        </Box>

        <Text fontSize={fonteInfo} noOfLines={2}>{listaEspecialidades}</Text>
      </VStack>
    </Box>
  );
}
