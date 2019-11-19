import React from 'react';
import { Select as CarbonSelect } from 'carbon-components-react';

const styles = {
  container: { margin: 10 },
  error: {
    marginTop: 5,
    fontSize: '0.8em',
    color: 'red',
  },
};

const Select = props => {
  const { error, touched } = props;
  return (
    <div style={styles.container}>
      <CarbonSelect {...props} />
      {error && touched && <div style={styles.error}>{error}</div>}
    </div>
  );
};

export default Select;
