import React, { Component } from 'react';
import { Header } from './Components/Shared/Header/';
import { Footer } from './Components/Shared/Footer/';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AnimalsContainer from '../src/Components/Animals/contener';
import FruitVegContainer from '../src/Components/FruitVeg/contener';
import DragDrop from '../src/Components/DragDrop/contener';
import SelectActionContainer from '../src/Components/SelectAction/contener';



class App extends Component {
  render() {
    return (
      <div className="App">   
        <Router>
          <div className='combine'>
            <Header />           
              <div className="main-wrap" id="main-wrap">
                <div className="wrapper" id="wrap">
                  <Switch>
                    <Route exact path={'/'} component={AnimalsContainer} />
                    <Route exact path={'/fruitveg'} component={FruitVegContainer} />
                    <Route exact path={'/dragdrop'} component={DragDrop} />
                    <Route exact path={'/selectchoice'} component={SelectActionContainer} />
                  </Switch> 
                </div>
              </div>
              <Footer />            
          </div>
        </Router> 
      </div>
    );
  }
}

export default App;
