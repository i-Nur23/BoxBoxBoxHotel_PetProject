import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { UsingTechs } from './components/UsingTechs';
import { Enter } from './components/Enter';
import { Register } from './components/Register';

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
