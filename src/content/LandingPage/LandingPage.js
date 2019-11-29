import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  Form as CarbonForm,
  FormGroup,
  Search,
  Select,
  SelectItem,
  TextInput,
  TextArea,
  Checkbox,
  NumberInput,
  Toggle,
  FileUploader,
  RadioButtonGroup,
  RadioButton,
} from 'carbon-components-react';
import { Form, Field } from 'react-final-form';
import { InfoSection, InfoCard } from '../../components/Info';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-react/lib/person--favorite/32';
import Application32 from '@carbon/icons-react/lib/application/32';
import { TextField } from '../../components/UI-kit';
import FormWithFetch from '../../components/FormWithFetch';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const initialValues = { email: 'rwrw@qq.com', password: '' };

const LoginForm = () => (
  <Form initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ handleSubmit, submitting }) => (
      <CarbonForm
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Field
          name="email"
          render={({ input, meta }) => (
            <TextField {...input} id="email" meta={meta} labelText={'Email'} />
          )}
        />
        <Field
          name="password"
          render={({ input, meta }) => (
            <TextField
              {...input}
              id="password"
              type="password"
              meta={meta}
              labelText={'Pasword'}
            />
          )}
        />
        <Button
          className="some-class"
          disabled={submitting}
          kind="primary"
          tabIndex={0}
          type="submit">
          Submit
        </Button>
      </CarbonForm>
    )}
  </Form>
);

const validate = values => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(400);
  window.alert(JSON.stringify(values, 0, 2));
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Design &amp; build with Carbon
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="Develop">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <LoginForm />
                    <FormWithFetch />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Design">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <CarbonForm
                      className="some-class"
                      onSubmit={function noRefCheck() {}}>
                      <FormGroup
                        className="some-class"
                        invalid={false}
                        legendText="Checkbox heading"
                        message={false}
                        messageText="">
                        <Checkbox
                          className="some-class"
                          defaultChecked
                          id="checkbox-0"
                          indeterminate={false}
                          labelText="Checkbox label"
                          onChange={function noRefCheck() {}}
                        />
                        <Checkbox
                          className="some-class"
                          id="checkbox-1"
                          indeterminate={false}
                          labelText="Checkbox label"
                          onChange={function noRefCheck() {}}
                        />
                        <Checkbox
                          className="some-class"
                          disabled
                          id="checkbox-2"
                          indeterminate={false}
                          labelText="Checkbox label"
                          onChange={function noRefCheck() {}}
                        />
                      </FormGroup>
                      <NumberInput
                        className="some-class"
                        id="number-input-1"
                        label="Number Input"
                        max={100}
                        min={0}
                        step={10}
                        value={50}
                      />
                      <FormGroup
                        className="some-class"
                        invalid={false}
                        legendText="Toggle heading"
                        message={false}
                        messageText="">
                        <Toggle
                          aria-label="Toggle"
                          className="some-class"
                          defaultToggled={false}
                          id="toggle-1"
                          labelA="Off"
                          labelB="On"
                          onToggle={function noRefCheck() {}}
                        />
                        <Toggle
                          aria-label="Toggle"
                          className="some-class"
                          defaultToggled={false}
                          disabled
                          id="toggle-2"
                          labelA="Off"
                          labelB="On"
                          onToggle={function noRefCheck() {}}
                        />
                      </FormGroup>
                      <FormGroup
                        className="some-class"
                        invalid={false}
                        legendText="File Uploader"
                        message={false}
                        messageText="">
                        <FileUploader
                          accept={[]}
                          buttonKind="primary"
                          buttonLabel="Add files"
                          className="some-class"
                          filenameStatus="uploading"
                          iconDescription="Provide icon description"
                          id="file-1"
                          labelDescription="Choose Files..."
                          multiple={false}
                          onClick={function noRefCheck() {}}
                        />
                      </FormGroup>
                      <FormGroup
                        className="some-class"
                        invalid={false}
                        legendText="Radio Button heading"
                        message={false}
                        messageText="">
                        <RadioButtonGroup
                          defaultSelected="default-selected"
                          labelPosition="right"
                          name="radio-button-group"
                          onChange={function noRefCheck() {}}
                          orientation="horizontal">
                          <RadioButton
                            className="some-class"
                            id="radio-1"
                            labelText="Standard Radio Button"
                            value="standard"
                          />
                          <RadioButton
                            className="some-class"
                            id="radio-2"
                            labelText="Default Selected Radio Button"
                            value="default-selected"
                          />
                          <RadioButton
                            className="some-class"
                            id="radio-3"
                            labelText="Standard Radio Button"
                            value="blue"
                          />
                          <RadioButton
                            className="some-class"
                            disabled
                            id="radio-4"
                            labelText="Disabled Radio Button"
                            value="disabled"
                          />
                        </RadioButtonGroup>
                      </FormGroup>
                      <FormGroup
                        className="some-class"
                        invalid={false}
                        legendText="Search"
                        message={false}
                        messageText="">
                        <Search
                          className="some-class"
                          closeButtonLabelText="Clear search input"
                          id="search-1"
                          labelText="Search"
                          onChange={function noRefCheck() {}}
                          placeHolderText="Search"
                          type="text"
                        />
                      </FormGroup>
                      <Select
                        className="some-class"
                        defaultValue="placeholder-item"
                        disabled={false}
                        helperText=""
                        iconDescription="open list of options"
                        id="select-1"
                        inline={false}
                        invalid={false}
                        invalidText=""
                        labelText="Select"
                        light={false}>
                        <SelectItem
                          disabled
                          hidden
                          text="Choose an option"
                          value="placeholder-item"
                        />
                        <SelectItem
                          disabled={false}
                          hidden={false}
                          text="Option 1"
                          value="option-1"
                        />
                        <SelectItem
                          disabled={false}
                          hidden={false}
                          text="Option 2"
                          value="option-2"
                        />
                        <SelectItem
                          disabled={false}
                          hidden={false}
                          text="Option 3"
                          value="option-3"
                        />
                      </Select>
                      <TextInput
                        className="some-class"
                        disabled={false}
                        helperText=""
                        id="test2"
                        invalid={false}
                        invalidText=""
                        labelText="Text Input label"
                        light={false}
                        onChange={function noRefCheck() {}}
                        onClick={function noRefCheck() {}}
                        placeholder="Placeholder text"
                        type="text"
                      />
                      <TextInput
                        className="some-class"
                        disabled={false}
                        helperText=""
                        id="test3"
                        invalid={false}
                        invalidText=""
                        labelText="Password"
                        light={false}
                        onChange={function noRefCheck() {}}
                        onClick={function noRefCheck() {}}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        required
                        type="password"
                      />
                      <TextInput
                        className="some-class"
                        disabled={false}
                        helperText=""
                        id="test4"
                        invalid
                        invalidText="Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."
                        labelText="Password"
                        light={false}
                        onChange={function noRefCheck() {}}
                        onClick={function noRefCheck() {}}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        required
                        type="password"
                      />
                      <TextArea
                        className="some-class"
                        cols={50}
                        disabled={false}
                        helperText=""
                        id="test5"
                        invalid={false}
                        invalidText=""
                        labelText="Text Area label"
                        light={false}
                        onChange={function noRefCheck() {}}
                        onClick={function noRefCheck() {}}
                        placeholder="Placeholder text"
                        rows={4}
                      />
                      <Button
                        className="some-class"
                        disabled={false}
                        kind="primary"
                        tabIndex={0}
                        type="submit">
                        Submit
                      </Button>
                    </CarbonForm>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      What is Carbon?
                    </h2>
                    <p className="landing-page__p">
                      Carbon is IBM’s open-source design system for digital
                      products and experiences. With the IBM Design Language as
                      its foundation, the system consists of working code,
                      design tools and resources, human interface guidelines,
                      and a vibrant community of contributors.
                    </p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <InfoSection heading="The Principles" className="landing-page__r3">
        <InfoCard
          heading="Carbon is Open"
          body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
          icon={<PersonFavorite32 />}
        />
        <InfoCard
          heading="Carbon is Modular"
          body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
          icon={<Application32 />}
        />
        <InfoCard
          heading="Carbon is Consistent"
          body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
          icon={<Globe32 />}
        />
      </InfoSection>
    </div>
  );
};

export default LandingPage;
