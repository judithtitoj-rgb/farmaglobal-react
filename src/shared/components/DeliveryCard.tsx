import { Badge, Box, Divider, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import type { Delivery } from "../../module/dummyJson";
import NavLayout from "../layout/NavLayout";

interface DeliveryCardProps {
  delivery: Delivery | null;
}

const DeliveryCard = ({ delivery }: DeliveryCardProps) => {
  if (!delivery) {
    return (
      <Box mt={6} p={5} borderWidth="1px" borderRadius="lg"  textAlign="center"      >
           <Text color="red.500" fontWeight="bold">
               Pedido no encontrado....!!.
        </Text>
      </Box>
    );
  }

  return (

    <Box mt={6} p={6} borderWidth="1px" borderRadius="lg" boxShadow="md" bg="white" >
      <Heading size="md" mb={4}>
        Pedido N° {delivery.idPedido}
      </Heading>

      <Badge  colorScheme={
          delivery.estadoPedido === "Entregado"
            ? "green"
            : delivery.estadoPedido === "En camino"
            ? "orange"
            : "blue"
        }
        mb={4}
      >
        {delivery.estadoPedido}
      </Badge>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Heading size="sm" mb={2}> Cliente </Heading>
          <VStack align="start" spacing={1}>
            <Text><b>DNI:</b> {delivery.dni}
            </Text>

            <Text><b>Nombre:</b> {delivery.nombreCompleto}
            </Text>

            <Text><b>Celular:</b> {delivery.telefonoMovil}
            </Text>

            <Text><b>Dirección:</b> {delivery.direccionEntrega}
            </Text>
          </VStack>
        </GridItem>

        <GridItem>
          <Heading size="sm" mb={2}>
            Medicamento
          </Heading>

          <VStack align="start" spacing={1}>
            <Text><b>Comercial:</b>{" "}
              {delivery.medicamento.nombreComercial}
            </Text>

            <Text><b>Genérico:</b>{" "}
              {delivery.medicamento.nombreGenerico}
            </Text>

            <Text>
              <b>Lote:</b> {delivery.numeroLote}
            </Text>

            <Text>
              <b>Caduca:</b> {delivery.fechaCaducidad}
            </Text>

            <Text>
              <b>Cantidad:</b> {delivery.cantidad}
            </Text>

            <Text>
              <b>Precio:</b> S/ {delivery.precio.toFixed(2)}
            </Text>
          </VStack>
        </GridItem>
      </Grid>

      <Divider my={5} />

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Heading size="sm" mb={2}>
            Entrega
          </Heading>

          <VStack align="start" spacing={1}>
            <Text>
              <b>ETA:</b> {delivery.tiempoEstimadoEntrega}
            </Text>

            <Text>
              <b>Repartidor:</b> {delivery.repartidor}
            </Text>

            <Text>
              <b>Conservación:</b>{" "}
              {delivery.condicionesConservacion}
            </Text>

            <Text>
              <b>Latitud:</b>{" "}
              {delivery.geolocalizacion.latitud}
            </Text>

            <Text>
              <b>Longitud:</b>{" "}
              {delivery.geolocalizacion.longitud}
            </Text>
          </VStack>
        </GridItem>

        <GridItem>
          <Heading size="sm" mb={2}>
            Pago
          </Heading>

          <VStack align="start" spacing={1}>
            <Text>
              <b>Medio:</b> {delivery.medioPago}
            </Text>

            <Text>
              <b>Comprobante:</b> {delivery.comprobante}
            </Text>

            <Text>
              <b>Delivery:</b> S/{" "}
              {delivery.costoDelivery.toFixed(2)}
            </Text>

            <Text>
              <b>Observaciones:</b>{" "}
              {delivery.observaciones || "Ninguna"}
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  
  );
 

};
export default DeliveryCard;