import React from 'react';

import colors from '../styles/colors';
import Image from './Image';
import { logo } from '../assets/index';

const styles = {
  container: {
    backgroundColor: colors.primary,
  },
 
  info: {
    fontSize: 15,
    color: colors.white,
  },
  
};

const Footer = () => (
  <div
    id="footer"
    className="container-fluid p-5 d-flex justify-content-center align-items-center flex-column"
    style={styles.container}
  >
    <Image src={logo} className="align-self-center pb-2" width={50} />
    <p style={styles.info}>
      2018 - <span style={styles.zokla}>Digital Quest</span> All Rights Reserverd
    </p>
  </div>
);

export default Footer;
