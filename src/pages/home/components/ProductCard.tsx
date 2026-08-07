import type { FC } from 'react'
import type { DummyProduct } from '../../../module/dummyJson'
import { Button, Heading, Image, Link, Tag, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import useUserStore from '../../../shared/store/UserStore'
import useCartStore from '../../../shared/store/CardtStore'
import { toast } from 'sonner'
interface ProductCardType {
    product: DummyProduct
}
const ProductCard: FC<ProductCardType> = ({ product }) => {
    const user = useUserStore((state) => state.user)
    const addItem = useCartStore((state) => state.addItem)

    const addToCard = (product: DummyProduct) => {
        if (user) {
            addItem(product)
            toast.success('Se agregó al carrito')
        } else {
            toast.error('Necesitas iniciar sesión')
        }
    }
    return (
        <VStack w='320px' h='320px' borderRadius='20px' align='start'
            outline='1px solid' outlineColor='green.200' p='1em'>
            <Image m='0 auto' w='130px' src={product.imagen} />
            {product.stock == 0 && <Text color='red'>No hay stock</Text>}
            {product.stock <= 10 && <Text color='orange.800' position='absolute' bgColor='orange.100' padding='2px 8px' borderRadius='4px'>Por agotarse</Text>}
            <Heading size='sm' as='h3'>
                <Link as={RouterLink} to={'/product/' + product.id}>{product.nombre}</Link>
            </Heading>    
            <Tag colorScheme='green'>{product.categoria}</Tag>
            <Text as='p' fontSize='xs'>{product.laboratorio}</Text>
            <Text as='p' fontSize='xl' fontWeight='bold'>S/ {product.precio.toFixed(2)}</Text>
            <Button size='sm' colorScheme='green' onClick={() => addToCard(product)}>Agregar al carrito</Button>
        </VStack>
    )
}

export default ProductCard