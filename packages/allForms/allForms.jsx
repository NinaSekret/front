const React = require('react');
var createReactClass = require('create-react-class');
const createRequest = require('core/create-request');
const Router = require('react-router-dom').BrowserRouter;
import { Redirect } from 'react-router';

class allForms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forms: []
    };
  }

  componentDidMount() {
    createRequest('fetchForms').then((response) => {
      this.setState({ forms: response.data || [] });
    });
  }

  redirectToEdit(event, formData) {
    this.setState({redirect: true, formId: formData.id});
  }

  deleteOnClick(event) {
    var formId = event.currentTarget.getAttribute('data-id');

    createRequest('deleteForm', {id: formId}, {}).then(function(response){
      if (response.status != 'OK') {
        throw 'Remove error';
      }
    });
    createRequest('fetchForms').then((response) => {
      this.setState({ forms: response.data || [] });
    });
  }
  
  render() {
    if (this.state.redirect) {
        var editUrl = "/edit-forms?id=" + this.state.formId;
        return <Redirect push to={editUrl} />;
    }
    const forms = this.state.forms;

    return (
      <div className="allForms">
        <table className="mdl-data-table mdl-shadow--2dp table-width">
          <thead>
            <tr >
              <th className="mdl-cell mdl-cell--4-col text-align">Имя</th>
              <th className="mdl-cell mdl-cell--4-col text-align">Вакансия</th>
              <th className="mdl-cell mdl-cell--4-col text-align">Телефон</th>
              <th className="mdl-cell mdl-cell--4-col text-align">Электронная почта</th>
              <th className="mdl-cell mdl-cell--4-col text-align">Действия</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((item) => (
              <tr >
                <td className="mdl-cell mdl-cell--3-col text-align">
                {item.fio}
                </td>
                <td className="mdl-cell mdl-cell--3-col text-align">
                {item.position}
                </td>
                <td className="mdl-cell mdl-cell--3-col text-align">
                {item['phone-number']}
                </td>
                <td className="mdl-cell mdl-cell--3-col text-align">
                {item.email}
                </td>
                <td className="mdl-cell mdl-cell--3-col text-align">
                  <button className="button-castom" onClick={((e) => this.redirectToEdit(e, item))}><i className="material-icons">create</i></button>
                  <button className="button-castom" onClick={((e) => this.deleteOnClick(e))}
                  data-id={item.id}><i className="material-icons">clear</i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = allForms;
