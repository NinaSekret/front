const React = require('react');
var createReactClass = require('create-react-class');

var Input = createReactClass({
	render: function() {
    var errorSpan = '';
    var input = (<input className="mdl-textfield__input" type="text" id="sample3" />);
    if ('validation' in this.props.options) {
      errorSpan = (<span className="mdl-textfield__error">{this.props.options.validation.errorMsg}</span>);
      input = (<input className="mdl-textfield__input" type="text" pattern={`${this.props.options.validation.pattern}`} id="sample3" />);
    };
    return (
      <div key={this.props.key} className={`mdl-textfield mdl-js-textfield ${this.props.options.className} mdl-textfield--floating-label`}>
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
        label : 'Фамилия Имя Отчество',
      },
      {
        className : 'mdl-textfield--full',
        label : 'Если изменяли фамилию, то укажите прежнюю фамилию, а так же причину смены',
      },
      {
        className : null,
        label : 'Предполагаемая должность',
      },
      {
        className : 'mdl-textfield--full',
        label : 'Когда Вы можете приступить к работе',
      }
    ];
  },
	render: function(){
    var newInput = this.getFieldsOptions().map(function(item, index){
      return (<Input key={index} options={item}/>);
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
    	        validation :  {
    			  errorMsg : 'Введенные данные не корректны!',
    			  pattern : '-?[0-9]*(\.[0-9]+)?'
    			  }
    			},
    		"email" : {
    			label : 'Email (можно и резервный)',
    			className : 'mdl-textfield--midle'
    		},
    		"skype" : {
    			label : "Skype"
    		}
    		  };
    		  return itemsOptions[field];
    		},
    		render : function(){

    	return (<div>
    			<div>
    				<Input options={this.getFieldsOptions('phone_number')}/>
    			</div>
    			<div>
    				<Input options={this.getFieldsOptions('email')}/>
    			</div>
    				<Input options={this.getFieldsOptions('skype')}/>
    		    </div>
    			);
    		  }
    		});


              var PassportData = createReactClass({
              getFieldsOptions: function(field) {
                var itemsOptions =  {
                  "serial": {
                    label : 'Серия',
                    validation :  {
                      errorMsg : 'Введенные данные не корректны!',
                      pattern : '-?[0-9]*(\.[0-9]+)?'
                    }
                  },
                  "number" : {
                    label : 'Номер',
                    validation :  {
                      errorMsg : 'Введенные данные не корректны!',
                      pattern : '-?[0-9]*(\.[0-9]+)?'
                    }
                  },
                  "issued": {
                    label : 'Когда и кем выдан',
                    className : 'mdl-textfield--full'
                  },
                  "birthday": {
                    id: 'sovmestit',
                    label : 'Дата рождения',
                    className : 'mdl-textfield--small',
                    validation :  {
                      errorMsg : 'Введенные данные не корректны!',
                      pattern : '-?[0-9]*(\.[0-9]+)?'
                    }
                  },
                  "place_of_birth": {
                    id: 'sovmestit',
                    label : 'Место рождения',
                    className : 'mdl-textfield--small',
                  },
                  "registration_address": {
                    label : 'Адрес регистрации по месту жительства',
                    className : 'mdl-textfield--midle'
                  },
                  "home_address": {
                    label : 'Адрес фактического проживания',
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
                        <Input options={this.getFieldsOptions('serial')}/>
                      </div>
                      <div action="#" className="mdl-cell mdl-cell--3-col mdl-cell--no-margin mdl-cell--margin-left">
                        <Input options={this.getFieldsOptions('number')}/>
                      </div>
                    </div>
                    <Input options={this.getFieldsOptions('issued')}/>
                    <div className="mdl-grid mdl-cell--no-margin">
                      <div action="#" className="mdl-cell mdl-cell--3-col mdl-cell--no-margin">
                        <Input options={this.getFieldsOptions('birthday')}/>
                      </div>
                      <div action="#" className="mdl-cell mdl-cell--3-col mdl-cell--no-margin mdl-cell--margin-left">
                        <Input options={this.getFieldsOptions('place_of_birth')}/>
                      </div>
                    </div>
                      <Input options={this.getFieldsOptions('registration_address')}/>
                      <Input options={this.getFieldsOptions('home_address')}/>
                    </div>
                  );

                }
              });

             var Header = createReactClass({
               render: function(){
                 return(
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
                 );
               }
             });

module.exports = Header;
