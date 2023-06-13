import React from 'react';


function DetailLocation({propiedad}) {
    let geoLink=propiedad[0].geoLink
    geoLink = geoLink.replace(`style="border:0;"`,``);
    geoLink = geoLink.replace(`<iframe src="`,``);
    geoLink = geoLink.replace(`></iframe>`,``);

    return (
        <React.Fragment>
             <h4>Ubicación</h4>
            <div className='location'>
               
                <iframe src={`${geoLink}`}></iframe>
            </div>
        </React.Fragment >
    )
}



export default DetailLocation;