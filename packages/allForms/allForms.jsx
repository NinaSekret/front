const React = require('react');
var createReactClass = require('create-react-class');
const createRequest = require('core/create-request');
const Router = require('react-router-dom').BrowserRouter

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
    const forms = this.state.forms;

    return (
      <div className="allForms">
              О сайте

        <table class="mdl-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Контакты</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((item) => (
              <tr>
                <td>
                {item.fio}
                </td>
                <td>
                {item.phone_number}
                </td>
                <td>
                  <button><i class="material-icons">create</i></button>
                  <button onClick={((e) => this.deleteOnClick(e))} data-id={item.id}><i class="material-icons">clear</i></button>
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
