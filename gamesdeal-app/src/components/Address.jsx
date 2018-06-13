import React from 'react';
import {colors} from '../styles/index';

const styles = {
 
    address: {
        fontSize: 15,
        color: colors.white,
    },

    container:{
        backgroundColor: colors.primary,
    },

}

const Address = () => {
    return(
     <div  id="address"
           className="container-fluid p-3 d-flex justify-content-center align-items-center flex-column"
           style={styles.container}>
        
            <h2 style={styles.address}>
                R. dos Escoteiros, s/n - Mangabeira, João Pessoa - PB, 58055-000      
            </h2>
            <h2 style={styles.address}>
                contato@digitalquest.com.br
            </h2>
            <h2 style={styles.address}>
                +55 (83) 99869-2909
            </h2>
     </div>      
    )
}

export default Address;