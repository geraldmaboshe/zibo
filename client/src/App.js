import React from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import Header from './layout/Header';
import Content from './components/Content';
import Footer from './layout/Footer';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ApartmentDetail from './components/ApartmentDetail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => {
              return <Redirect to="/apartments" />;
            }}
          />
          <Route exact path="/apartments" component={Content} />
          <Route exact path="/apartments/:id" component={ApartmentDetail} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
