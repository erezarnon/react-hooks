import Events from 'events';
import React from 'react';
import * as Routing from 'react-router-dom';
import * as ReactJSS from 'react-jss';

import Flow from './Flow';
import Wrap from './Wrap';
import views from './views';
import utils from './utils';
import Style from './Style';

const context = React.createContext();
const useStyles = ReactJSS.createUseStyles(Style);

const wraps = {};
const handlerCfg = {};

const handler = utils.bind(utils.handle, handlerCfg);

Object.keys(views).forEach(utils.bind(utils.xForEach,
  {
    wraps,
    context,
    useStyles,
    handler,
    utils,
    input: views,
    output: wraps,
    React,
    Wrap,
  },
));

App.defaultProps = {

  eventKey: 'yourAppEventKey',
  
  Events,
  React,
  Routing,
  context,
  useStyles,
  handlerCfg,
  views: wraps,
  Flow,
  utils,
};

function App(props) {

  const {

    eventKey,

    Events,
    React,
    Routing,
    context,
    useStyles,
    handlerCfg,
    views,
    Flow,
    utils,

  } = props;

  document.title = 'Your document title';

  const [state, setState] = React.useState(Flow.initialState);
  const classes = useStyles(state);
  const store = {state, setState};
  const eventer = new Events();
  
  const onUpdate = utils.bind(Flow.update,
    {
      store,
    },
  );
  
  const onEffect = utils.bind(Flow.effect,
    {
      store,
    },
  );
  
  const {

    Home,

  } = views;

  const {

    Profiler,

  } = React;

  const {

    Provider,

  } = context;

  const {

    BrowserRouter,
    Switch,
    Route,

  } = Routing;

  handlerCfg.key = eventKey;
  handlerCfg.eventer = eventer;
 
  eventer.on(eventKey, onUpdate);
  
  React.useEffect(onEffect, []);

  return (

    <Profiler
      id={''}
      onRender={(...args) => {
        console.table(args);
      }}
    >

      <Provider
        value={state}
      >
        <BrowserRouter>
          <div
            className={classes.app}
          >
            <Switch>
              <Route
                exact
                path='/'
              >
                <Home />
              </Route>
              <Route
                path='*'
              >
                404
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>

    </Profiler>
  );
}

export default App;
