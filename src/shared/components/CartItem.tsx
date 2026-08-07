import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { MdDelete } from 'react-icons/md'
import type { DummyProduct } from '../../module/dummyJson'
import type { FC } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import useCartStore from '../store/CardtStore'
import logo from  "../../assets/images/visa.png"

interface CartItemType {
    product: DummyProduct
}

const CartItem: FC<CartItemType> = ({ product }) => {
    const removeItem = useCartStore((state) => state.removeItem)
    const addItem = useCartStore((state) => state.addItem)
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
    return (
        <HStack w='100%' justifyContent='space-between'
            outline='1px solid' outlineColor='gray.300' p='20px' pl='10px' borderRadius='14px'>
            <HStack gap='1em'>
                <Image src={product.imagen} w='40px' />
                <VStack align='start'>
                    <Text>{product.nombre}</Text>
                    <Text>S/{product.precio.toFixed(2)} Unid.</Text>
                    <Text fontWeight='bold'>S/ {(product.precio * product.quantity).toFixed(2)}</Text>
                    <HStack spacing={4} align="center">
                    
                    <Text fontWeight='bold' > S/ {product.precio*product.quantity - product.precio*product.quantity*product.descuento*0.01} ({product.descuento}%) 
                    </Text>
                    <Image src={logo} />
                    </HStack>
                    <HStack>

                        <Button size='xs' onClick={() => decreaseQuantity(product)}>
                            <FiMinus />
                        </Button>
                        <Text>{product.quantity}</Text>
                        <Button size='xs' onClick={() => addItem(product)}>
                            <FiPlus />
                        </Button>
                    </HStack>
                </VStack>
            </HStack>

            <Button colorScheme='red' variant='outline' onClick={() => removeItem(product.id)}>
                <MdDelete />
            </Button>
        </HStack>
    )
}

export default CartItem