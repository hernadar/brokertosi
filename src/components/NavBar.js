
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from '../assets/images/app/LogoBrokerTosi.jpeg';
import {Link} from 'react-router-dom';
import '../assets/css/nav.css'

function NavbarDark() {

  const [users, setUsers] = useState([])
  const [usersfilted, setUsersFilted] = useState([])
  const [search, setSearch] = useState([])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(usuarios => {
    setUsersFilted(usuarios);
    setUsers(usuarios);
  })
  .catch((err) => {
    console.log(err)
  })
		// // recupero el Id de usuario de la sesión para buscar el resto de datos del usuario
		// let userId = sessionStorage.getItem('userId')
		// // Verifico si aún no se ha solicitado los datos de usuario y los solicito        
		// if (user.length === 0) {
		// 	fetch('https://jsonplaceholder.typicode.com/users')
		// 		.then(response => response.json())
		// 		.then(usuario => {
		// 			console.log(usuario)
    //       //setUser(usuario.data)
		// 		})
		// 		.catch((err) => {
		// 			console.log(err)
		// 		})
		
	}, [users.length])


const filter = (terminoBusqueda)=> {
  var resultadoBusqueda=users.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ||elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
      return elemento;
    }
  })
  setUsersFilted(resultadoBusqueda);
}      
 
  return (
   <>
   <Navbar  expand="lg" className="container">
      <Container fluid className="px-1">
        <Navbar.Brand href='/'><img className= "shadow card" width={200} src={image} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-light" />
        <Navbar.Collapse id="navbar-light">
          <Nav>
          
     
            {  (sessionStorage.userPrivilege==='2' || sessionStorage.userPrivilege==='3') && 
              <>
              
               <Link className="nav-link navbar-light collapsed " to="/companies/register">
               Crear Propiedad
              </Link>
           </>
            } 
          
            
           
         
            
            <Link className="nav-link navbar-light  collapsed " to="/">
              Inicio
            </Link>
            <Link className="nav-link navbar-light  collapsed "  to="/users/register">
              Servicio
            </Link>
            <Link className="nav-link navbar-light  collapsed "  to="/users/register">
              Requisitos para alquilar
            </Link>

            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default NavbarDark;