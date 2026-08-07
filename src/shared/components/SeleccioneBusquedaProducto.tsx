import {  Box, Button, Heading, HStack, Input, Radio,  RadioGroup } from "@chakra-ui/react";
import { useState } from "react";
import NavLayout from "../layout/NavLayout";

interface SearchBarProps {
  onSearch: (criterio: string, texto: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {

  const [criterio, setCriterio] = useState("nombre");
  const [texto, setTexto] = useState("");

  const buscar = () => {
    onSearch(criterio, texto);
  };

  const limpiar = () => {
    setTexto("");
    onSearch("nombre", "");
  };

  return (
    <NavLayout>
    <Box p={5} borderWidth="1px" borderRadius="md">
    <Heading my={1}>
          Buscador de Fármacos
      </Heading>  

      <RadioGroup value={criterio} onChange={setCriterio} >
        <HStack spacing={5}>
          <Radio value="nombre">Nombre</Radio>
          <Radio value="categoria">Categoría</Radio>
          <Radio value="laboratorio">Laboratorio</Radio>
        </HStack>
      </RadioGroup>

      <Input mt={4} placeholder="Ingrese el dato a buscar"
        value={texto} onChange={(e) => setTexto(e.target.value)} />

      <HStack mt={4}>
        <Button colorScheme="green" onClick={buscar} >
          Buscar
        </Button>

        <Button colorScheme="red" onClick={limpiar} >
          Limpiar
        </Button>
      </HStack>
    </Box>
    </NavLayout>
  );
}