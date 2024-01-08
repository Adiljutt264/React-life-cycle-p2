import React from 'react';
import Proptypes from "prop-types"

const Gender = ({gender}) => {
    return (
      <div>{gender}</div>
    )
  }
  
/* Gender.defaultProps = {       Default Props
    gender:"Rather Not Say",
};
Gender.propTypes = {             Defind datatype similar to typescript
    gender: Proptypes.string,
}
*/
// Is Required
Gender.propTypes = {
    gender: Proptypes.string.isRequired,
}

export default Gender