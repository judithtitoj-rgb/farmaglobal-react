import { Box, Button, Image, Text, Heading, Badge, VStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import type { Product } from "../../../Product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md"
    >
      <Image src={product.imagen} h="180px" w="100%" objectFit="contain"  />
      <VStack mt={3} align="start">
        <Heading size="sm"> 
          {product.nombre}
        </Heading>
        <Badge colorScheme="green">
               {product.categoria}
        </Badge>
        <Text>
          <b>Precio:</b> S/. {product.precio}
        </Text>
        <Text>
          <b>Laboratorio:</b> {product.laboratorio}
        </Text>
        <Text>
          <b>Stock:</b> {product.stock}
        </Text>
        <Button as={Link}  to={'/product/' + product.id} colorScheme="green" width="100%" >      
           Ver detalle
        </Button>
      </VStack>
    </Box>
  );
}