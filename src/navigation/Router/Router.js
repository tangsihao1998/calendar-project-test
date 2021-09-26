import React, { PureComponent } from 'react'

// import router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';
// import components
import App from 'navigation/App';

class Routers extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <App>
          <React.Fragment>
            <Switch>
              {RouterConfig.map((route, i) => {           
                const RenderComponent = (
                  <Route
                    exact={route.exact}
                    path={route.path}
                    render={(props) => 
                      {                          
                        return <route.component {...props} pageTitle={route.pageTitle} />
                      }
                    }
                    key={i}
                  />
                );
                return RenderComponent;
              })}
            </Switch>
          </React.Fragment>
        </App>
      </Router>
    )
  }
}

export default Routers;