const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const { Route, Link } = require('react-router-dom');
const Form = require('form/form.jsx');
const About = require('about/about.jsx');

const Main = () => (
  <Router>
    <div className="main">
      <Link to="/">main</Link>
      <br />
      <Link to="/about">about</Link>
      <br />
      <Route path="/" exact component={Form} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

module.exports = Main;
