import React, { Component, Fragment } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
class PrivateIdentity extends Component {
  render() {
    const classes = makeStyles(theme => ({
      button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
    }));
    const { handleChange, fileInput, handleFileUpload, handleModal } = this.props
    return (
      <Fragment>
        <div className='position-relative form-group'>
          <TextField name='idNumber' id='idNumber' placeholder='ID Number'
            minLength='9' required className='form-control'
            onChange={handleChange}
            label='ID Card Number'
          />
        </div>
        <div className='position-relative form-group'>
          <TextField name='phoneNumber' id='phoneNumber' placeholder='Phone Number'
            minLength='9' required className='form-control' label='Phone Number'
            type='number'
            onChange={handleChange}
          />
        </div>
        <div className='position-relative form-group'>
          <TextField name='rePassword' id='rePassword'
            required type='password' className='form-control'
            label='rePassword'
            onChange={handleChange}
          />
        </div>
        <div className='position-relative form-group' style={{ marginTop: '40px' }}>
          <input id='image-file' type='file' ref={fileInput}
            accept="image/*"
            style={{
              display: 'none'
            }}
            multiple onChange={handleFileUpload}
          />
          <label htmlFor="image-file">
            <Button variant="contained" component="span" className={classes.button}>
              Upload File
            </Button>
          </label>
          <label style={{ marginLeft: '25px' }}>
            <Button
              variant="contained"
              component="span"
              className={classes.button}
              onClick={handleModal}>
              Priview File
            </Button>
          </label>
        </div>
      </Fragment>
    );
  }
}

export default PrivateIdentity;