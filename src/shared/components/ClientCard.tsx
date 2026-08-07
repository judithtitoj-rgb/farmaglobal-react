
import { Box, Image, Text, VStack } from "@chakra-ui/react"
import type { User } from "../../module/dummyJson"

interface Props {
    user: User
}

export default function ClientCard({ user}: Props) {

    return (

        <Box borderWidth="1px"  borderRadius="lg" p={5} mt={8}>
            <VStack>
                <Image src={user.image} boxSize="150px" borderRadius="full" />
                <Text><b>ID:</b> {user.id}</Text>
                <Text><b>Nombre:</b> {user.firstName}</Text>
                <Text><b>Apellido:</b> {user.lastName}</Text>
                <Text><b>Edad:</b> {user.age}</Text>
                <Text><b>Email:</b> {user.email}</Text>
                <Text><b>Teléfono:</b> {user.phone}</Text>
                <Text><b>Ciudad:</b> {user.address.city}</Text>
                <Text><b>Vence:</b> {user.bank.cardExpire}</Text>
                <Text><b>N° Tarjeta:</b> {user.bank.cardNumber}</Text>
                <Text><b>Tipo:</b> {user.bank.cardType}</Text>
            </VStack>
        </Box>
   )
}