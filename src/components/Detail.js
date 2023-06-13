import React from 'react';
import SliderDetail from './SliderDetail';
import DetailAmenities from './DetailAmenities';
import propiedad from '../exports/Propiedad';
import DetailForm from './DetailForm';
import DetailServices from './DetailServices';
import DetailLocation from './DetailLocation';

console.log(propiedad)
function Detail() {
   
    return (
        <React.Fragment>

        <SliderDetail/>
        <DetailAmenities propiedad={propiedad}/>
        <div className='infoDetail'>
            <div className='div1'>
                {propiedad[0].detail}
            </div>
            
                
            
               <DetailForm/>
            
        </div>
        <DetailServices/>
        <DetailLocation propiedad={propiedad}/>
        </React.Fragment >
    )
}



export default Detail