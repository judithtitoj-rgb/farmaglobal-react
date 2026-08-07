import { Box, Button, Heading, HStack, Image, Link, Tooltip, VStack } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'
import { Link as RouterLink } from "react-router-dom"
import { Paths } from '../../router/routes'
import useUserStore from '../store/UserStore'
import CartDrawer from '../components/CartDrawer'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { RiMedicineBottleLine } from 'react-icons/ri'
import logo from  "../../assets/images/Logo.png"
import { TbHome, TbTruckDelivery } from 'react-icons/tb'

interface NavLayoutType {
    children: ReactNode
}

const NavLayout: FC<NavLayoutType> = ({ children }) => {
    const user = useUserStore((state) => state.user)
    const logout = useUserStore((state) => state.logout)

    return (
        <>
            <VStack gap='1em' align='start'>
                <HStack w='100%' bgColor='gray.100' borderBottom='2px solid' borderColor='gray.300'>

                    <HStack justifyContent='space-between' w='90%' m='0 auto' p='1em 0'>
                        <Heading fontSize='2xl'> 
                            <Image  src={logo} alt="Farma Global" width="90px"/>
                        </Heading>
                        <Box>Bienenvido: {user?.firstName}  {user?.lastName} {user?.role}</Box>
                        <HStack gap={6}>
                            <Tooltip label='Servicio Deivery' hasArrow>
                                <Link as={RouterLink} to={Paths.DeliverySearch}><TbTruckDelivery  size={33}/></Link>
                            </Tooltip>
                 
                          
                            <Tooltip label='Buscar clientes' hasArrow>
                                <Link as={RouterLink} to={Paths.ClientPage}><HiOutlineUserGroup size={35}/></Link>
                            </Tooltip>
                        
                       
                            <Tooltip label='Buscar farmacos' hasArrow>
                                <Link as={RouterLink} to={Paths.ConsultaFarm}><RiMedicineBottleLine size={35}/></Link>
                            </Tooltip>      
                            <Tooltip label='Inicio' hasArrow>                  
                                <Link as={RouterLink} to={Paths.home}><TbHome size={35}/></Link>                            
                            </Tooltip>                                                               
                            {
                                user ?
                                    <>
                                        <Button onClick={logout} size='sm'
                                            variant='outline' colorScheme='green'>Cerrar sesión</Button>

                                        <CartDrawer />
                                    </>
                                    : <Link as={RouterLink} to={Paths.login}>Login</Link>
                            }
                        </HStack>
                    </HStack>
                </HStack>

                <Box w='90%' m='0 auto'>
                    {children}
                </Box>
            </VStack>
        </>
    )
}

export default NavLayout