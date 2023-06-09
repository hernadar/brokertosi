import React from "react";
import images from '../exports/images';
import '../assets/css/slider.css';
import { motion } from 'framer-motion';



const SliderMain = () => {
//drag='x' dragConstraints={{right:0, left:-2650}}
return(
   
    <motion.div className='slider-container'>
        <motion.div className='slider'  animate={{
            x:[0,-images.length*400,0],
            transition:{
                repeat:Infinity,
                ease:"linear",
                duration:30,
                delay:1
            }
            }}
            >
        {images.map(image =>(
            <motion.div className='item'>
                <img src={image} alt="" />
            </motion.div>
        ))}
        </motion.div>
    </motion.div>

)

}

export default SliderMain;
