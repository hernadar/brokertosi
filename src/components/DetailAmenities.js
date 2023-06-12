import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare,faBed, faToilet, faVectorSquare,faCar } from '@fortawesome/free-solid-svg-icons';


function DetailAmenities({propiedad}) {
    return (
        <React.Fragment>
            <div className="">
                <h2>Propiedad en {propiedad[0].mode} ID #{propiedad[0].id}</h2>
            </div>
           
            <div className="info">
                <div>
                    <h2>{propiedad[0].money} {propiedad[0].price}</h2>
                    <p>{propiedad[0].address}</p>
                    <p>{propiedad[0].location}-{propiedad[0].departament}-{propiedad[0].province}</p>
                </div>
                <div className='amenities'>
                    <FontAwesomeIcon icon={faBed} />
                    <p>Dormitorios: {propiedad[0].bedroom}</p>
                    <FontAwesomeIcon icon={faToilet} />
                    <p>Baños: {propiedad[0].bathroom}</p>
                </div>
                <div className='amenities'>
                    <FontAwesomeIcon icon={faVectorSquare} />
                    <p>Sup Total: {propiedad[0].m2Total} m2</p>
                    <FontAwesomeIcon icon={faSquare} />
                    <p>Sup Cub.: {propiedad[0].m2} m2</p>
                    {(propiedad[0].garage) &&
                        <>
                            <FontAwesomeIcon icon={faCar} />
                            <p>Cochera</p>
                        </>}
                </div>

            </div>
        </React.Fragment>
    )
}



export default DetailAmenities;