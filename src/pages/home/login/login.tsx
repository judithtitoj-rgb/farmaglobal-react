import { Button, FormControl, FormLabel, Heading, Input, Link, VStack } from '@chakra-ui/react'
import { signIn } from '../../../services/dummyService'
import { Paths } from '../../../router/routes'
import useUserStore from '../../../shared/store/UserStore'
import { useNavigate } from 'react-router-dom'

interface LoginData {
    username: string
    password: string
}

const Login = () => {

    const { login2 } = useUserStore()
    const navigate = useNavigate()

    const dummyLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formulario = e.currentTarget
        const formData = new FormData(formulario)
        const data = Object.fromEntries(formData) as unknown as LoginData

        const result = await signIn(data.username, data.password)
        
        login2(result)

        navigate(Paths.home)
    }

    return (
        <VStack h='100vh' bg='linear-gradient(cyan, teal)' justifyContent='center'>
            
            <VStack align='start'>
                <VStack gap='2em' align='start' p='2em' w='300px' bgColor='rgba(63, 224, 216, 0.73)' borderRadius='20px'>
                    <VStack align='start'>
                        <Link fontStyle='italic'>Volver al home</Link>
                        <Heading fontSize='lg'>Iniciar Sesión</Heading>
                    </VStack>

                    <VStack as='form' gap='3em' onSubmit={(e) => dummyLogin(e)}>
                        <FormControl>
                            <FormLabel>Usuario</FormLabel>
                            <Input name='username' border='0' outline='1px solid'   required  outlineColor='green.500' placeholder="Ingrese su correo"/>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Contraseña</FormLabel>
                            <Input name='password' type='password' border='0' outline='1px solid' required outlineColor='green.700' placeholder="Ingrese su contraseña"/>
                        </FormControl>

                        <Button w='100%' colorScheme='green' type='submit'>Ingresar</Button>
                    </VStack>
                </VStack>

                <Link color='green'>Crear cuenta</Link>
                <Link color='Orange'>Olvidé mi contraseña</Link>
            </VStack>
        </VStack>
    )
}

export default Login