import React from 'react';
import SliderMain from './SliderMain';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import pdf from '../assets/files/Broker_Tosi_solicitud_alquiler.pdf';
import FormContact from './FormContact';

function Services() {
    const [appl, setAppl] = useState(false);
    const [owner, setOwner] = useState(false);
    const [tasar, setTasar] = useState(false);
    const applicant = () => {
        setAppl(!appl);
    }
    const ownerShow = () => {
        setOwner(!owner);
    }
    const tasarShow = () => {
        setTasar(!tasar);
    }
    return (
        <React.Fragment>

            <SliderMain />
            <h2>Servicios</h2>
            <div className='services'>
                <div className='contenedorServicio'>
                    <div className='title'>
                        <h5>Venta</h5>
                    </div>
                    <div>
                        <p>Descubra su hogar ideal con Mónica Tosi, su confiable broker inmobiliario en Mendoza. </p>
                        <p>Ofrecemos un servicio excepcional, brindando una experiencia transparente, segura y personalizada en la compra o venta de propiedades.</p>
                        <p>Nuestro equipo de expertos trabajará de cerca con usted, comprendiendo sus necesidades y utilizando nuestra amplia red de contactos para encontrar las mejores opciones.</p>
                        <p>Valoramos la confianza de nuestros clientes y nos comprometemos a proteger sus intereses, cumpliendo con todas las regulaciones legales. Además, brindamos un servicio postventa excepcional y estamos disponibles para responder a sus preguntas y proporcionar asesoramiento. Confíe en nosotros para hacer realidad sus sueños inmobiliarios.</p>
                    </div>
                </div>
                <div className='contenedorServicio'>
                    <div className='title'>
                        <h5 >Administración de alquileres</h5>
                    </div>
                    <div>

                        <label>Requisitos para alquilar: Del Solicitante.</label>
                        <button className='btn' onClick={applicant}><FontAwesomeIcon icon={faArrowDown} /> </button>

                        {(appl) &&
                            <>
                                <div>

                                    <p>Para alquilar una propiedad en la provincia de Mendoza, generalmente se requieren los siguientes requisitos:</p>
                                    <p>Documentación personal: Es necesario presentar el DNI (Documento Nacional de Identidad) o pasaporte válido del solicitante y de los eventuales fiadores o garantes.</p>
                                    <p>Comprobante de ingresos: Se suele solicitar la presentación de recibos de sueldo o constancia de ingresos que demuestren la capacidad de pago del alquiler. En algunos casos, puede ser necesario contar con una antigüedad laboral mínima.</p>
                                    <p>Garantía: La mayoría de los contratos de alquiler en Mendoza requieren de una garantía, que puede ser un garante propietario dentro de la provincia, una garantía bancaria o un seguro de caución. Esto se solicita como respaldo en caso de incumplimiento de pago del alquiler.</p>
                                    <p>Referencias personales: Algunos propietarios o inmobiliarias pueden solicitar referencias personales o laborales para evaluar la idoneidad del inquilino.</p>
                                    <p>Depósito o fianza: Es común que se solicite el pago de un depósito o fianza equivalente a uno o dos meses de alquiler, que será devuelto al finalizar el contrato en caso de no existir daños en la propiedad.</p>
                                    <p>Estos requisitos pueden variar dependiendo del propietario, inmobiliaria o la ubicación específica de la propiedad en la provincia de Mendoza..</p>
                                </div>
                            </>}

                        <label>Requisitos para alquilar: Del propietario.</label>
                        <button className='btn' onClick={ownerShow}><FontAwesomeIcon icon={faArrowDown} /> </button>
                        {(owner) &&
                            <>
                                <div>
                                    <p>Cuando un propietario decide dejar su casa en alquiler a través de una inmobiliaria en la provincia de Mendoza, generalmente se le solicitarán los siguientes requisitos:</p>
                                    <p>Documentación de propiedad: El propietario deberá presentar la documentación que acredite la propiedad del inmueble, como escritura, título de propiedad, planos, entre otros.</p>
                                    <p>Información personal: Se requerirá la presentación de la documentación personal del propietario, como DNI (Documento Nacional de Identidad) o pasaporte válido, para verificar su identidad y establecer la relación contractual.</p>
                                    <p>Condiciones y requisitos del inmueble: El propietario deberá brindar información detallada sobre las características y condiciones de la propiedad, incluyendo la superficie, distribución, servicios disponibles, estado general, y cualquier otra especificación relevante. Se le solicitara visitar la propiedad para tomar fotos.</p>
                                    <p>Precio y condiciones de alquiler: El propietario y la inmobiliaria acordarán el precio de alquiler mensual y las condiciones específicas del contrato, como plazo de alquiler, formas de pago, actualización de precios, entre otros aspectos.</p>
                                    <p>Exclusividad y comisión: La inmobiliaria  solicita exclusividad en la gestión del alquiler, lo cual significa que el propietario se compromete a trabajar exclusivamente con nuestra agencia. Además, se acordará una comisión o honorarios a pagar a la inmobiliaria por su intermediación en el proceso de alquiler.</p>
                                </div>
                            </>}
                    </div>
                    <div>
                    <button className='btn-color'>        
                    <a href={pdf} target="_blank" rel="noopener noreferrer" download="Broker_Tosi_solicitud_alquiler.pdf"> 
                     Descargar Requisitos 
                    </a></button>
</div>
                    </div>
                    <div className='contenedorServicio'>
                        <div className='title'>
                            <h5>Tasación de Propiedades</h5>
                        </div>
                        <div>
                            <p>Obtenga una tasación precisa y confiable.</p>
                            <p>Ofrecemos un servicio excepcional para determinar el valor justo de su propiedad.</p>
                            <p>Nuestro equipo de expertos utilizará metodologías rigurosas y su profundo conocimiento del mercado local para brindarle una tasación precisa y objetiva.</p>
                            <p>Valoramos la confianza de nuestros clientes y nos comprometemos a ofrecer un servicio transparente y profesional. Confíe en nosotros para obtener una tasación confiable que respalde sus decisiones financieras y comerciales.</p>
                        </div>
                        <label>Tasar Propiedad</label>
                        <button className='btn' onClick={tasarShow}><FontAwesomeIcon icon={faArrowDown} /> </button>

                        {(tasar) &&
                            <>
                                <FormContact/>
                            </>}
                    </div>
                </div>
            
        </React.Fragment >
    )
}



export default Services;