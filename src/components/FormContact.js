import React from 'react';



function FormContact() {
    return (
        <React.Fragment>


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
                    <button className='btn-color m-1 '>Enviar</button>
                </div>
               
    
        </React.Fragment >
    )
}



export default FormContact;