import React from 'react';
import { TextInput } from 'carbon-components-react';

const styles = {
  container: { margin: 10 },
  error: {
    marginTop: 5,
    fontSize: '0.8em',
    color: 'red',
  },
};

const TextField = props => {
  const { error, touched } = props;
  return (
    <div style={styles.container}>
      <TextInput {...props} invalid={error && touched} invalidText={error} />
    </div>
  );
};

export default TextField;
