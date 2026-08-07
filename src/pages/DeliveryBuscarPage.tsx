import { useEffect, useState } from "react";
import { Box, Button, Heading, Input, Select, Text } from "@chakra-ui/react";
import type { Delivery } from "../module/dummyJson";
import { getDeliveries } from "../services/deliveryService";
import  DeliveryCard from "../shared/components/DeliveryCard";
import NavLayout from "../shared/layout/NavLayout";

const DeliverySearchPage = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [pedido, setPedido] = useState<Delivery | null>(null);
  const [searchType, setSearchType] = useState("pedido");
  const [value, setValue] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      const data = await getDeliveries();
      setDeliveries(data);
    };

    cargarDatos();
  }, []);

  const buscar = () => {
    let resultado: Delivery | undefined;

    switch (searchType) {
      case "pedido":
        resultado = deliveries.find((d) => d.idPedido === Number(value));
        break;

      case "dni":
        resultado = deliveries.find((d) => d.dni === value );
        break;

      case "telefono":
        resultado = deliveries.find((d) => d.telefonoMovil === value);
        break;
    }

    setPedido(resultado ?? null);
  };

  return (
    <NavLayout>
    <Box>
       <Heading > Consulta pedidos delivery
        </Heading> 
      <Text mb={4}>
        Total pedidos registrados: {deliveries.length}
      </Text>

      <Select value={searchType} onChange={(e) => setSearchType(e.target.value)}  mb={3} >
        <option value="pedido">N° Pedido</option>
        <option value="dni">DNI</option>
        <option value="telefono">Teléfono</option>
      </Select>

      <Input placeholder="Ingrese Numero pedido" value={value}
        onChange={(e) => setValue(e.target.value)} mb={3} />

      <Button colorScheme="green" onClick={buscar}>
        Buscar
      </Button>
        {pedido && <DeliveryCard delivery={pedido} />}
    </Box>
    </NavLayout>
  );
};

export default DeliverySearchPage;