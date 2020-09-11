import Menu from './components/Menu';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Test from './pages/Test';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import "yoobic-basic-grid"
class App extends React.Component {

  componentDidMount() {
    // const script = document.createElement("script");
    // script.src = "./node_modules/yoobic-basic-grid/dist/esm/yoobic-basic-grid.js";
    // script.async = true;
    // document.body.appendChild(script);
  }
  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/home" component={Home} exact />
              <Route path="/list" component={List} exact />
              <Route path="/test" component={Test} exact />
              <Redirect from="/" to="/home" exact />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  }
};

export default App;
