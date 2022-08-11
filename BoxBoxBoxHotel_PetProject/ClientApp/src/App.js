import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/elements/Layout';
import { Home } from './components/pages/Home';
import { FetchData } from './components/pages/FetchData';
import { Counter } from './components/pages/Counter';
import { UsingTechs } from './components/pages/UsingTechs';
import { Enter } from './components/pages/Enter';
import { Register } from './components/pages/Register';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/rooms' component={Counter} />
        <Route path='/chain' component={FetchData} />
        <Route path='/usingTechnologies' component={ UsingTechs} />
        <Route path='/register' component={Register}/>
        <Route path='/enter' component={Enter}/>
      </Layout>
    );
  }
}
