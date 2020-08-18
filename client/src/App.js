import React from 'react';
import NavBar from './layout/NavBar';
import ApartmentList from './components/ApartmentList';
import Footer from './layout/Footer';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ApartmentDetail from './components/ApartmentDetail';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => {
              return <Redirect to="/apartments" />;
            }}
          />
          <Route exact path="/apartments" component={ApartmentList} />
          <Route exact path="/apartments/:id" component={ApartmentDetail} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
