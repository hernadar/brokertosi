import React from "react";
import images from '../exports/imagesDetail';
import '../assets/css/slider.css';
import { motion } from 'framer-motion';



const SliderDetail = ({propiedad}) => {
//drag='x' dragConstraints={{right:0, left:-2650}}
return(
   
    <motion.div className='slider-container'>
        <motion.div className='slider'  drag='x' dragConstraints={{right:0, left:-images.length*600}} >
        {images.map(image =>(
            <motion.div className='item'>
                <img src={image} alt="" />
            </motion.div>
        ))}
        </motion.div>
    </motion.div>

)

}

export default SliderDetail;
