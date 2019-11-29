import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Content } from 'carbon-components-react/lib/components/UIShell';
// import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import { DotcomShell } from '@carbon/ibmdotcom-react';
import './app.scss';

class App extends Component {
  render() {
    return (
      <DotcomShell navigation="default">
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            {/* <Route path="/repos" component={RepoPage} /> */}
          </Switch>
        </Content>
      </DotcomShell>
    );
  }
}

export default App;
