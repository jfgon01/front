/* import logo from './logo.svg'; */
import './App.css';
import {createBrowserRouter} from 'react-router-dom'


/* importar las vistas */
import HomeScreen from './pages/home'
import LoginScreen from './pages/login'
import ProductosScreen from './pages/productos'
import CategoriaScreen from './pages/categorias'
import ClienteScreen from './pages/clientes'
import PedidosScreen from './pages/pedidos'

 /* Logica y manejo del estado del componente, aqui va solamente codigo js */
 
 /* importar layout */
 import MainLayout from './layouts/MainLayout';


   const router = createBrowserRouter ([
    
    {path: '/login',
      element: <LoginScreen/>,
    },
    {
      path: '/',
      element: <MainLayout/>,
      children:[
        {path:'dasboard',element:<HomeScreen/>},
        {path:'productos', element:<ProductosScreen/>},
        {path:'categorias',element:<CategoriaScreen/>},
        {path:'clientes',element:<ClienteScreen/>},       
        {path:'pedidos',element:<PedidosScreen/>}        
      ],

    }
   ])



export default router;