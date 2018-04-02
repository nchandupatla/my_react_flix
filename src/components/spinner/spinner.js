import React from 'react';

import classes from './spinner.css';

const spinner = ({isLoading, children}) => {

    if (isLoading) {
        return (
            <div className={classes.Loader}>Loading...</div>
        );
      }
      // Render nothing if no children present
      return children ? children : null;
}
    
export default spinner;