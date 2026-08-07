import { Box } from "@chakra-ui/react";
import { useState } from "react";
import type { Product } from "../Product";
import { getProducts } from "../services/productService";
import SeleccioneBusquedaProducto from "../shared/components/SeleccioneBusquedaProducto";
import BusquedaProducto from "../shared/components/BusquedaProducto"

export default function Homee() {

  const todos = getProducts();
  const [products, setProducts] = useState<Product[]>(todos);
  const buscar = (criterio: string, texto: string) => {

    if (texto.trim() === "") {
      setProducts(todos);
      return;
    }

    const resultado = todos.filter(product => {

      switch (criterio) {

        case "nombre":
          return product.nombre
            .toLowerCase()
            .includes(texto.toLowerCase());

        case "categoria":
          return product.categoria
            .toLowerCase()
            .includes(texto.toLowerCase());

        case "laboratorio":
          return product.laboratorio
            .toLowerCase()
            .includes(texto.toLowerCase());

        default:
          return true;
      }

    });

    setProducts(resultado);

  };

  return (

    <Box>     
      <SeleccioneBusquedaProducto onSearch={buscar} />
      <BusquedaProducto products={products} />
    </Box>
  );

}