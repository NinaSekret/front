const React = require('react');
var createReactClass = require('create-react-class');
const createRequest = require('core/create-request');
import { Redirect } from 'react-router';


var Input = createReactClass({
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
	render: function() {
    var errorSpan = '';

    var value = (this.state !== null && this.state.value !== null) ? this.state.value : this.props.value;
    var isDirty = '';
    if (value) {
      isDirty = 'is-dirty';
    }

    var input = (<input name={`${this.props.options.name}`} className="mdl-textfield__input" onChange={this.handleChange} value={value} type="text" id="sample3" />);
    if ('validation' in this.props.options) {
      errorSpan = (<span className="mdl-textfield__error">{this.props.options.validation.errorMsg}</span>);
      input = (<input name={`${this.props.options.name}`} className="mdl-textfield__input" onChange={this.handleChange} value={value} type="text" pattern={`${this.props.options.validation.pattern}`} id="sample3" />);
    };
    return (
      <div  className={`mdl-textfield mdl-js-textfield ${this.props.options.className} mdl-textfield--floating-label ${isDirty}`}>
        {input}
        <label className="mdl-textfield__label" for="sample3">{this.props.options.label}</label>
        {errorSpan}
      </div>
    );
	}
});


var BaseInfo = createReactClass({
  getFieldsOptions: function() {
    return [
      {
        className : null,
        name: 'fio',
        label : 'Фамилия Имя Отчество',
      },
      {
        className : 'mdl-textfield--full',
        name: 'old-surname',
        label : 'Если изменяли фамилию, то укажите прежнюю фамилию, а так же причину смены',
      },
      {
        className : null,
        name : 'position',
        label : 'Предполагаемая должность',
      },
      {
        className : 'mdl-textfield--full',
        name : 'work-start-time',
        label : 'Когда Вы можете приступить к работе'
      }
    ];
  },
	render: function(){
    var form = this.props.form;
    var newInput = this.getFieldsOptions().map(function(item, index){
      return (<Input key={index} options={item} value={form[item['name']]}/>);
    })

    return (
    <div className="news">
      {newInput}
    </div>
    );
	}
});

var ContactInfo = createReactClass({
  getFieldsOptions: function(field) {
    var itemsOptions =  {
    "phone_number" : {
      label : 'Номер телефона',
      name : 'phone-number',
      validation :  {
        errorMsg : 'Введенные данные не корректны!',
        pattern : '-?[0-9]*(\.[0-9]+)?'
      }
    },
      "email" : {
        label : 'Email (можно и резервный)',
        name : 'email',
        className : 'mdl-textfield--midle'
    },
      "skype" : {
        label : 'Skype',
        name : 'skype'
      }
   };
  return itemsOptions[field];
},

render : function(){
  console.log(this.props.form);
  return (<div>
            <div>
            <Input options={this.getFieldsOptions('phone_number')} value={this.props.form['phone-number']}/>
            </div>
            <div>
            <Input options={this.getFieldsOptions('email')} value={this.props.form['email']}/>
            </div>
            <Input options={this.getFieldsOptions('skype')} value={this.props.form['skype']}/>
          </div>
        );
      }
  });


var PassportData = createReactClass({
getFieldsOptions: function(field) {
  var itemsOptions =  {
    "serial": {
      label : 'Серия',
      name: 'serial',
      validation :  {
        errorMsg : 'Введенные данные не корректны!',
        pattern : '-?[0-9]*(\.[0-9]+)?'
      }
    },
    "number" : {
      label : 'Номер',
      name : 'number',
      validation :  {
        errorMsg : 'Введенные данные не корректны!',
        pattern : '-?[0-9]*(\.[0-9]+)?'
      }
    },
    "issued": {
      label : 'Когда и кем выдан',
      name : 'issued',
      className : 'mdl-textfield--full'
    },
    "birthday": {
      id: 'sovmestit',
      name : 'birthday',
      label : 'Дата рождения',
      className : 'mdl-textfield--small',
      validation :  {
        errorMsg : 'Введенные данные не корректны!',
        pattern : '-?[0-9]*(\.[0-9]+)?'
      }
    },
    "place_of_birth": {
      id: 'sovmestit',
      name : 'place-of-birth',
      label : 'Место рождения',
      className : 'mdl-textfield--small'
    },
    "registration_address": {
      label : 'Адрес регистрации по месту жительства',
      name : 'registration-address',
      className : 'mdl-textfield--midle'
    },
    "home_address": {
      label : 'Адрес фактического проживания',
      name : 'home-address',
      className : 'mdl-textfield--midle'
    }
  };

  return itemsOptions[field];
},
  render : function(){

    return (
      <div>
      <div className="mdl-grid mdl-cell--no-margin">
        <div action="#" className="mdl-cell mdl-cell--3-col mdl-cell--no-margin">
          <Input options={this.getFieldsOptions('serial')} value={this.props.form['serial']}/>
        </div>
        <div action="#" className="mdl-cell mdl-cell--3-col mdl-cell--no-margin mdl-cell--margin-left">
          <Input options={this.getFieldsOptions('number')} value={this.props.form['number']}/>
        </div>
      </div>
      <Input options={this.getFieldsOptions('issued')} value={this.props.form['issued']}/>
      <div className="mdl-grid mdl-cell--no-margin">
        <div action="#" className="mdl-cell mdl-cell--3-col mdl-cell--no-margin">
          <Input options={this.getFieldsOptions('birthday')} value={this.props.form['birthday']}/>
        </div>
        <div action="#" className="mdl-cell mdl-cell--3-col mdl-cell--no-margin mdl-cell--margin-left">
          <Input options={this.getFieldsOptions('place_of_birth')} value={this.props.form['place-of-birth']}/>
        </div>
      </div>
        <Input options={this.getFieldsOptions('registration_address')} value={this.props.form['registration-address']}/>
        <Input options={this.getFieldsOptions('home_address')} value={this.props.form['home-address']}/>
      </div>
    );

  }
});



/*
var Header = createReactClass({
  render: function(){
   return(
     <form onSubmit={onSubmit} id="add-form" method="post" action='/api/v1/forms/'>
        <div>
          <h5 className="text-align">АНКЕТА КАНДИДАТА </h5>
          <p className="text-align" style={{marginBottom: 0}}>
            Уважаемый кандидат!
            Заполните, пожалуйста, анкету, отвечая на вопросы по возможности более полно.
          </p>
          <BaseInfo />
          <p style={{marginBottom: 0}}>Контактная информация:</p>
  		    <ContactInfo />
          <p style={{marginBottom: 0}}>Паспортные данные:</p>
          <PassportData />
        </div>
    </form>

   );
 }
});*/

class Header extends React.Component
{
  componentDidMount() {
    this.setState({ form: {}, redirectToList: false});
  }

  onSubmit(event) {
    var form = event.target;
    var formData = new FormData(form);
    event.preventDefault();


    this.setState({redirectToList: true});
    createRequest('addForm', {}, formData).then(function(response){
      console.log(formData);
    });


  }

  render() {

    if (this.state && this.state.redirectToList) {
        return <Redirect push to="/all-forms" />;
    }

    var form = (this.state && this.state.form) ? this.state.form : {};
    return(
     <form onSubmit={((e) => this.onSubmit(e))} id="add-form" method="post" action='/api/v1/forms/'>
        <div>
          <h5 className="text-align">АНКЕТА КАНДИДАТА </h5>
          <p className="text-align" style={{marginBottom: 0}}>
            Уважаемый кандидат!
            Заполните, пожалуйста, анкету, отвечая на вопросы по возможности более полно.
          </p>
          <BaseInfo form={form}/>
          <p style={{marginBottom: 0}}>Контактная информация:</p>
  		    <ContactInfo form={form}/>
          <p style={{marginBottom: 0}}>Паспортные данные:</p>
          <PassportData form={form}/>
        </div>
    </form>

   );
 }
}

module.exports = Header;
