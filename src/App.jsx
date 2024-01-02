import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomeSection} />
        <Route path="/about" component={AboutSection} />
        <Route path="/experience" component={ExperienceSection} />
        <Route path="/projects" component={ProjectsSection} />
      </Switch>
    </Router>
  );
}

export default App;
