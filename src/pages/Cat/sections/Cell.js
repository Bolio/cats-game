import React from 'react';

const styles = {
  // width: '120px',
  width: '100%',
  height: '100%',
  position: 'relative',
  // top: '35px',
  // left: '35px',
};

const Cell = (props) => (
  <div className='column' id={props.id} onClick={props.handlePlayer}>
    <img
      id={props.coordinate}
      src={props.img}
      style={styles}
    />
  </div>
);

export default Cell;
