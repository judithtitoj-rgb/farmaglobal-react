import { SimpleGrid } from "@chakra-ui/react";
import DetalleProducto from "../../pages/home/components/DetalleProducto";
import type { Product } from "../../Product";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4  }}
      spacing={5} mt={5}  >
      {products.map(product => (<DetalleProducto key={product.id} product={product}/>
    
      ))}
    </SimpleGrid>
  );
}