const Form = require('form/form.jsx');
const createRequest = require('core/create-request');

class EditForm extends Form {
  componentDidMount() {
    var id = this.getQueryVariable(this.props.location, 'id');
    createRequest('fetchForm', {id: id}).then((response) => {
      this.setState({ form: response.data || [] });
    });
  }

  getQueryVariable(location, variable) {
      var query = location.search.substring(1);
      var vars = query.split('&');
      for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split('=');
          if (decodeURIComponent(pair[0]) == variable) {
              return decodeURIComponent(pair[1]);
          }
      }
  }

  onSubmit(event){
    var form = event.target;
    var formData = new FormData(form);

    event.preventDefault();

    var id = this.getQueryVariable(this.props.location, 'id');

    createRequest('updateForm', {id: id}, formData).then(function(response){
      console.log(response);
    });
    return false;
  }
}


module.exports = EditForm;
