
import { Box, Button, Input, Select, VStack, HStack, FormControl, FormLabel, Heading, Text, useToast } from "@chakra-ui/react";
import NavLayout from "../shared/layout/NavLayout";
import React, { useState } from "react";

const Contactanos = () => {
  const [servicioFarmac, setServicioFarmac] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setemail] = useState("");
  const [Celular, setCelular] = useState("");
  const [mensaje, setMensaje] = useState("");

  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const contactosGuardados = JSON.parse(
          localStorage.getItem("contactos_botica") || "[]"
      );

      const nuevoContacto = {
        id: Date.now(),
        nombre,
        apellido,
        email,
        Celular,
        servicioFarmac,
        mensaje,
        fechaEnvio: new Date().toLocaleDateString(),
        
      };

      contactosGuardados.push(nuevoContacto);
      localStorage.setItem("contactos_botica", JSON.stringify(contactosGuardados));

      toast({
        title: "Mensaje enviado",
        description: "Gracias por comunicarte con nosotros. Serás atendido a la brevedad..",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      setNombre("");
      setApellido("");
      setemail("");
      setCelular("");
      setServicioFarmac("");
      setMensaje("");
    } catch (error) {
      toast({
        title: "Error",
        description: "No fue posible guardar tu consulta. Inténtalo nuevamente.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    
    <NavLayout>

      <Box minH="100vh" bg="green.200" color="green.600" py={10} px={4}>
        <VStack spacing={6} maxW="700px" mx="auto">
          <VStack spacing={2} textAlign="center">
           <Text fontSize="2xl" color="orange.400" fontWeight="bold">
              Atencion Farma Global en Linea  - 980-646-500
            </Text>
            <Heading size="xm">Comunícate con nosotros</Heading>
            <Text color="green.700" fontSize="sm">
             Te ayudamos a tus consultas en medicinas, productos de salud y servicios farmacéuticos.
            </Text>
          </VStack>
          
          <Box  as="form" onSubmit={handleSubmit} bg="green.500"
            border="1px solid"  borderColor="orange.500"  borderRadius="md"  p={8} w="100%"
          >
            <VStack spacing={4}>
              <HStack spacing={4} w="full">
                <FormControl isRequired>
                  <FormLabel fontSize="sm" color="yellow.300">Nombres :</FormLabel>
                  <Input  value={nombre} onChange={(e) => setNombre(e.target.value)}
                    placeholder="ingrese su nombre"
                    bg="green.100"
                    borderColor="green.600"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm" color="yellow.300">Apellidos :</FormLabel>

                  <Input  value={apellido}  onChange={(e) => setApellido(e.target.value)}
                    placeholder="ingrese sus apellidos"
                    bg="green.100"
                    borderColor="green.600"
                  />
                </FormControl>
              </HStack>

              <HStack spacing={4} w="full">
                <FormControl isRequired>
                  <FormLabel fontSize="sm" color="yellow.300">correo Electronico :</FormLabel>
                  <Input type="email"  value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder= "ingrese correo electrónico"
                    bg="green.100"
                    borderColor="green.600"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm" color="yellow.300">Numero Celular :</FormLabel>
                  <Input  type="tel" value={Celular}
                    onChange={(e) => setCelular(e.target.value)}
                    placeholder="ingrese su numero celular"
                    bg="green.100"
                    borderColor="green.600"
                  />
                </FormControl>
              </HStack>
              <FormControl>
  <FormLabel fontSize="sm" color="yellow.300">
    Seleccione opcion de Servicio:
  </FormLabel>

  <Select  value={servicioFarmac} onChange={(e) => setServicioFarmac(e.target.value)}
    placeholder="elige una opción" bg="green.100"  borderColor="green.600">
    <option value="medicamentos">
       Consulta sobre medicamentos
    </option>
    <option value="receta">
       Productos con receta médica
    </option>
    <option value="productos">
       Productos de cuidado personal
    </option>
    <option value="vitaminas">
       Vitaminas y suplementos
    </option>
    <option value="delivery">
       Servicio de delivery
    </option>
    <option value="laboratorio">
       Referencias  del laboratorio quimico
    </option>
    <option value="Servicios">
       Medida de Presion / Temperatura / Inyectables
    </option>
  </Select>
</FormControl>

              <Button  type="submit" colorScheme="yellow" w="full" mt={2} >
                 Enviar su  consulta
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </NavLayout>
  );
};

export default Contactanos;