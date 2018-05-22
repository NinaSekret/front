const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const { Route, Link } = require('react-router-dom');
const Form = require('form/form.jsx');
const EditForm = require('form/edit-form.jsx');
const allForms = require('allForms/allForms.jsx');

const Main = () => (
  <Router>
    <div className="main">
      <Route path="/" exact component={Form} />
      <Route path="/edit-forms" exact component={EditForm} />
      <Route path="/all-forms" exact component={allForms} />
    </div>
  </Router>
);

module.exports = Main;
