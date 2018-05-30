import React from 'react';
import '../styles/App.css';
import {logo} from '../assets/index';
import {colors} from '../styles/index';
import Search from './Search';


const styles = {
    logo : {
      marginRight: 30,
      marginLeft: 200,
      width: 70,
      height: 70
    },
    navbar : {
      backgroundColor : colors.primary,
      fontSize : 24,
    },
  
    navbarTextContainer : {
      flex : 1,
      
    },
    /*
    search : {
        color: colors.secondary
    },*/

    dropdown:{
        color: colors.white,
        backgroundColor: colors.secondary
    },
    formStyle:{
        marginRight:200
    }

  };
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
            <img style={styles.logo} src={logo} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div style={styles.navbarTextContainer}>
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Games <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lojas</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={styles.dropdown}>
                    <a className="dropdown-item" target="_blank" href="https://www.nuuvem.com/" style={styles.dropdown}>Nuuvem</a>
                    <a className="dropdown-item" target="_blank" href="https://store.steampowered.com/" style={styles.dropdown}>Steam</a>
                    <a className="dropdown-item" target="_blank" href="https://www.g2a.com/" style={styles.dropdown}>G2A</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contato</a>
                </li>
                </ul>
            </div>
            <form className="form-inline my-2 my-lg-0" style={styles.formStyle}>
                <Search/>
                {/*
                <button className="btn btn-outline-secondary btn-sm my-2 my-sm-0 button-image buttonSearch" type="submit" style={styles.search}>Search</button>
                */}    
            </form>
            </div>
        </nav>
    );
}

export default Navbar;