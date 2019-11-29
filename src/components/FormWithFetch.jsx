import React, { useState } from 'react';
import _ from 'lodash';
import Spinner from 'react-spinkit';
import { Form, Field } from 'react-final-form';
import { createSelector } from 'reselect';

// RMWC Components
import { TextField } from './UI-kit';

// Hooks
import useCountries from '../hooks/useCountries';
import useRegions from '../hooks/useRegions';

import {
  Button,
  Form as CarbonForm,
  Select,
  SelectItem,
} from 'carbon-components-react';

const styles = {
  select: { minWidth: 233, maxWidth: 233 },
  selectWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    position: 'absolute',
  },
};

// Local Selectors
const countiesOptions$ = createSelector(_.identity, countries => {
  return _.map(countries, ({ name, code }) => (
    <SelectItem disabled={false} hidden={false} text={name} value={code} />
  ));
});

const regionsOptions$ = createSelector(_.identity, regions => {
  return _.map(regions, ({ region }) => (
    <SelectItem disabled={false} hidden={false} text={region} value={region} />
  ));
});

const initialValues = {
  firstName: 'Tony',
  lastName: 'Li',
  email: '',
  password: '',
  country: '',
  region: '',
};

const SignUpForm = () => {
  const [country, setCountry] = useState(null);
  const [countries, loadingCountries] = useCountries();
  const [regions, loadingRegions] = useRegions(country);

  return (
    <div>
      <Form
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}>
        {({ handleSubmit, submitting, form }) => (
          <CarbonForm onSubmit={handleSubmit}>
            <Field name="firstName">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  type="text"
                  meta={meta}
                  label={'First Name'}
                />
              )}
            </Field>
            <Field name="lastName">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  type="text"
                  meta={meta}
                  labelText={'Last Name'}
                />
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  type="email"
                  meta={meta}
                  labelText={'Email'}
                />
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  type="password"
                  meta={meta}
                  labelText={'Password'}
                />
              )}
            </Field>
            <Field name="country">
              {({ input, meta }) => (
                <>
                  <Select
                    className="some-class"
                    defaultValue="placeholder-item"
                    helperText=""
                    iconDescription="open list of options"
                    id="select-1"
                    inline={false}
                    labelText="Country"
                    invalid={meta.error && meta.touched}
                    invalidText={meta.error}
                    disabled={loadingCountries}
                    onChange={e => {
                      form.change('country', e.target.value);
                      setCountry(e.target.value);
                      form.change('region', '');
                    }}
                    light={false}>
                    <SelectItem
                      disabled
                      hidden
                      text="Choose an option"
                      value="placeholder-item"
                    />
                    {countiesOptions$(countries)}
                  </Select>
                  {loadingCountries && (
                    <Spinner style={styles.spinner} name="double-bounce" />
                  )}
                </>
              )}
            </Field>
            <Field name="region">
              {({ input, meta }) => (
                <>
                  <Select
                    className="some-class"
                    defaultValue="placeholder-item"
                    helperText=""
                    iconDescription="open list of options"
                    id="select-2"
                    inline={false}
                    invalid={meta.error && meta.touched}
                    invalidText={meta.error}
                    labelText="State/Province"
                    disabled={loadingRegions || loadingCountries}
                    onChange={e => {
                      form.change('region', e.target.value);
                    }}
                    light={false}>
                    <SelectItem
                      disabled
                      hidden
                      text="Choose an option"
                      value="placeholder-item"
                    />
                    {regionsOptions$(regions)}
                  </Select>
                  {loadingRegions && (
                    <Spinner style={styles.spinner} name="double-bounce" />
                  )}
                </>
              )}
            </Field>
            <Button type="submit" kind="primary" disabled={submitting}>
              Submit
            </Button>
          </CarbonForm>
        )}
      </Form>
    </div>
  );
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(400);
  window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Too Short!';
  } else if (values.firstName.length > 50) {
    errors.firstName = 'Too Long!';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Too Short!';
  } else if (values.lastName.length > 50) {
    errors.lastName = 'Too Long!';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Too Short!';
  } else if (values.password.length > 50) {
    errors.password = 'Too Long!';
  }

  if (!values.country) {
    errors.country = 'Required';
  }

  if (!values.region) {
    errors.region = 'Required';
  }
  return errors;
};

export default SignUpForm;
