import React from 'react';
import SliderDetail from './SliderDetail';
import DetailAmenities from './DetailAmenities';
import propiedad from '../exports/Propiedad';
import DetailForm from './DetailForm';
import DetailServices from './DetailServices';

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

        </React.Fragment >
    )
}



export default Detail