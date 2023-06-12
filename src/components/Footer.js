import React from 'react';
import image from '../assets/images/app/LogoBrokerTosi.png';
import {Link} from 'react-router-dom';
function Footer(){
    return (
        <React.Fragment>
			<footer className=" footer">
				
				<div>
				<img className= "imagen" src={image} alt="logo"/>
				</div>
				<div>
					<ul>
					<Link className=""> <li>Servicios</li></Link>
					<Link className="">	<li>Propiedades</li></Link>
					<Link className=""> <li>Requisitos para alquilar</li></Link>
					</ul>
				</div>
				<div className="social mx-2">
                        <a href="https://www.facebook.com/profile.php?id=100093325501330"><i
                                class="bi bi-facebook"></i>
						</a>
					
                        <a href="https://www.instagram.com/inmobiliariotosi/"><i
                                class="bi bi-instagram"></i>
						</a>		
                        <a href="https://goo.gl/maps/xEudgTGetKX6MheS8"><i
                                class="bi bi-geo-alt-fill"></i>
						</a> 
                </div>		
				<div>
					<ul>
						<li>Contacto: </li>
						<li>Perú 328, Cdad Mza</li>
						<li>Tel: 0261-4201719</li>
						<li>Wsp:+54-9-261-2170537</li>
						<li>info@brokertosi.com.ar</li>
					</ul>
					</div>	
				
					
				
			</footer>
			<div className="copyright text-center my-auto">
						<span>Copyright &copy; BrokerTosi 2023</span>
			</div>

        </React.Fragment>
    )
}
export default Footer;