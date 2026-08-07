import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import ProductOutlet from './outlets/ProductOutlet'
import SingleProduct from '../pages/home/singleProduct/SingleProduct'
import Login from '../pages/home/login/login'
import ClientPage from '../pages/ClientPage'
import ProductoBuscarPage from '../pages/ProductoBuscarPage'
import DeliveryBuscarPage from '../pages/DeliveryBuscarPage'
import FarmaContactpage from '../pages/FarmaContactpage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<ProductOutlet />}>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<SingleProduct />} />                
            </Route>

            <Route path='/login' element={<Login />}/>
            <Route path='/FarmaContactpage' element={<FarmaContactpage />}/>
            <Route path='/clientpage' element={<ClientPage />}/>
            <Route path='/consultafarm' element={<ProductoBuscarPage />}/>
            <Route path='/delivery-search' element={<DeliveryBuscarPage />} />
           

        </Routes>
    )
}

export default AppRoutes