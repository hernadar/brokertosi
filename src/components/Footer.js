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
                        <a href="https://www.facebook.com/groups/239558763384940/permalink/1175024126505061/?mibextid=Nif5oz"><i
                                class="bi bi-facebook"></i>
						</a>
					
                        <a href="https://www.instagram.com/tirofederaltrelewarqueria/"><i
                                class="bi bi-instagram"></i>
						</a>		
                        <a href="https://maps.app.goo.gl/gvRZdoBAervSJh2f9"><i
                                class="bi bi-geo-alt-fill"></i>
						</a> 
                </div>		
				<div>
					<ul>
						<li>Contacto: </li>
						<li>Dirección </li>
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