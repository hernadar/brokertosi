import React from 'react';
import SliderDetail from './SliderDetail';
import DetailAmenities from './DetailAmenities';
import propiedad from '../exports/Propiedad';

console.log(propiedad)
function Detail() {
    return (
        <React.Fragment>

        
<div className='div1'>
<h3>Consultar por esta propiedad</h3>
                <div>
                    
                    <input
                        name="name"
                        className='form-control m-1'
                        // value={id}
                        placeholder="Nombre y Apellido"
                        // onChange={handleChange}
                    />
                    
                    <input
                        name="email"
                        className='form-control m-1'
                        // value={id}
                        placeholder="Correo Electrónico"
                        // onChange={handleChange}
                    />
                    <input
                        name="phoneArea"
                        className='form-control m-1'
                        // value={id}
                        placeholder="0261*"
                        // onChange={handleChange}
                    />
                    <input
                        name="phoneNumber"
                        className='form-control m-1'
                        // value={id}
                        placeholder="9999999*"
                        // onChange={handleChange}
                    />
                     <textarea
                        name="message"
                        className='form-control m-1'
                        // value={id}
                        placeholder="Mensaje*"
                        // onChange={handleChange}
                    />
                    <button className='btn m-1 '>Enviar</button>
                </div>
               
        </div>
        </React.Fragment >
    )
}



export default Detail