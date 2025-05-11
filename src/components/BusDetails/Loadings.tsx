import React, {Component} from 'react';
import { Lottie} from '../src/components';
import images from './index';
import Logo from '../../assets/iiitdmj-logo.png';
const   Loadings = () => {
        return (
            <div style={styles.container}>
              <img src={Logo} alt="College-logo" width={38} /> 
                   {/* <Lottie source={images.Animation} /> */}
                   {/* <LoadingDots /> */}
            </div>
        )
    }

const styles = ({
    container:{
        // display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        // ,alignSelf:'center'
        ,backgroundColor:'rgba(190,240,250,0.5)'
    }
});
export default Loadings;