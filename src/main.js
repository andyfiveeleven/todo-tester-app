import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';//this says don't bringin the entier thing, only those two chunks
import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container'

class App extends React.Component {
  constructor(props){
    super(props); //if it needs state, this shit is nessesary
    this.state = {
      leftToDo: 0,
      todos: []
    }

    this.getApp = this.getApp.bind(this);//now this is part of the app component when we create it
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)//this is in relation to app component
    }
  }

  componentDidUpdate(){ // every tiem we update this component, console log\
    console.log('STATE__', this.state);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path="/about" component={AboutContainer} />
            <Route exact path="/" component={() => <DashboardContainer app={this.getApp()} />} /> 
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
