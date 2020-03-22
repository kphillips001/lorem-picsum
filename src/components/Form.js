import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { Button } from "@material-ui/core";

import { getData } from "../actions";

const RequestForm = props => {
  const handleGetData = event => {
    event.preventDefault();
    props.getData();
  };
  return (
    <>
      {props.isFetchingData ? (
         <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
      ) : (
        <Button 
          onClick={handleGetData}
          variant="contained"
          color="primary"
          >Click me
        </Button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData })(RequestForm);