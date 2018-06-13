import React from 'react';
import {colors} from '../styles/index';
import { faUser, faPhone, faEnvelope, faComment } from '@fortawesome/fontawesome-free-solid';
import {withRouter} from 'react-router'

const styles = {
    submit: {
      borderRadius: 30,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: colors.primary,
      fontSize: 18,
      width:200
    },
    submitText: {
      fontSize: 20,
    },
    formAlert: {
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.danger,
      margin: 0,
    },
    emailSendModal: {
      color: colors.primary,
    },

    bar:{
        width: 600,
        color: colors.white,
    },

    background:{
        backgroundColor: colors.secondary, 
        padding:126
    }
    
  };

const Form = () => {
    return (
    
    <form id="contact-form" className="d-flex flex-column align-items-center" style={styles.background}>
        <div className="form-group" style={styles.bar}>
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group" style={styles.bar}>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="form-group" style={styles.bar}>
            <label for="message">Message</label>
            <textarea className="form-control" rows="5" id="message"></textarea>
        </div>
        <div className="form-group text-center">
            <button type="submit" className="btn btn-primary" style={styles.submit}>Submit</button>
        </div>
    </form>
    
      
    )
}

export default Form;