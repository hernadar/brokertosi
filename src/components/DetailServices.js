import React from 'react';

import propiedad from '../exports/Propiedad';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faFileContract, faDoorOpen, faWaterLadder,faFileInvoiceDollar, 
    faDollarSign, faHouseLock,faHourglassStart, faHouseCircleCheck,faBuilding,
    faTemperatureArrowUp, faCouch } from '@fortawesome/free-solid-svg-icons';



console.log(propiedad)
function Detail() {
    return (
        <React.Fragment>
            <h4 >Servicios que ofrece</h4>
            <div className='containerServices'>

               

                    <div className='services'>
                        <FontAwesomeIcon icon={faDog} />
                        <p>Mascotas: {propiedad[0].pets ? 'Si' : 'No'}</p>

                        <FontAwesomeIcon icon={faFileContract} />
                        <p>Apto Crédito Hipetacario: {propiedad[0].credit ? 'Si' : 'No'}</p>


                        <FontAwesomeIcon icon={faDoorOpen} />
                        <p>Cant. ambientes: {propiedad[0].qtyScope}</p>

                        <FontAwesomeIcon icon={faWaterLadder} />
                        <p>Piscina: {propiedad[0].pool ? 'Si' : 'No'} </p>

                    </div>
                    <div className='services'>
                        <FontAwesomeIcon icon={faFileInvoiceDollar} />
                        <p>Expensas: {propiedad[0].expenses ? 'Si' : 'No'} </p>
                        
                        <FontAwesomeIcon icon={faDollarSign} />
                        <p>Valor Expensas: $ {propiedad[0].expensesCost} </p>
                        
                        <FontAwesomeIcon icon={faHouseLock} />      
                        <p>Barrio Privado: {propiedad[0].private ? 'Si' : 'No'}</p>

                        <FontAwesomeIcon icon={faHourglassStart} />
                        <p>Antigüedad: {propiedad[0].antiquity}</p>
                    </div>
                    
                    <div className='services'>
                        <FontAwesomeIcon icon={faHouseCircleCheck} />
                        <p>Estado de Consevación: {propiedad[0].careful}</p>

                        <FontAwesomeIcon icon={faBuilding} />
                        <p>Plantas: {propiedad[0].floors} </p>

                        <FontAwesomeIcon icon={faTemperatureArrowUp} />
                        <p>Calefacción Central: {propiedad[0].heat? 'Si' : 'No'} </p>
                        
                        <FontAwesomeIcon icon={faCouch} />
                        <p>Amoblado: {propiedad[0].furniture? 'Si' : 'No'} </p>
                    </div>

                
            </div>
        </React.Fragment >
    )
}



export default Detail