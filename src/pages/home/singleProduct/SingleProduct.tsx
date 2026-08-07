import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Heading, HStack, Image, Tag, Text, VStack } from '@chakra-ui/react'
import type { DummyProduct } from '../../../module/dummyJson'
import { getProductById } from '../../../services/dummyService'
import { toast } from 'sonner'
import useUserStore from '../../../shared/store/UserStore'

const SingleProduct = () => {
    const { id } = useParams()
    const user = useUserStore((state) => state.user)

    const [product, setProduct] = useState<DummyProduct | null>(null)

    useEffect(() => {
        const getProduct = async () => {
            const data = await getProductById(Number(id))
            console.log(data)
            setProduct(data)
        }

        getProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addToCard = (product) => {
        if (user) {
            toast.success('Se agregó al carrito')
        } else {
            toast.error('Necesitas iniciar sesión')
        }
    }

    if (product == null) {
        return <div>Cargando...</div>
    }

    return (
        <HStack gap='2em' w='900px' m='0 auto' outline='1px solid' outlineColor='blue.200' p='1em'>
            <Image src={product.imagen} />

            <VStack align='start' gap='1em' >
                <VStack align='start' >
                    <Text fontStyle='italic'>{product.laboratorio}</Text>
                    <Heading mb={2}>{product.nombre}</Heading>
                    <Tag colorScheme='green'>{product.categoria}</Tag>
                </VStack>
                <Text fontSize='sm' lineHeight='2'>Stock: {product.stock}</Text>
                <Text fontSize='3xl' fontWeight='bold'>Precio: S/{product.precio.toFixed(2)}</Text>
                 <Button colorScheme='green' onClick={() => addToCard(product)}>Agregar al carrito</Button>
            </VStack>
        </HStack>
    )
}

export default SingleProduct