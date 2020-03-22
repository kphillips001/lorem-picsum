import React from "react";
import { connect } from "react-redux";

import ImageCard from "./ImageCard";

const ImageList = props => {
  
  return (
    <div className="card-container">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.imageData.map(item => (
          <ImageCard key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    imageData: state.imageData
  };
};

export default connect(mapStateToProps, {})(ImageList);