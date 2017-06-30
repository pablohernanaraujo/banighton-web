import React from 'react';
import validateInput from '../validations/register';
import TextField from './TextField';
import { userSignupRequest } from '../firebase/signup';

class LeadCapture extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            nombre: '',
            apellido: '',
            password: '',
            passwordConfirmation: '',
            isLoading: false,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    isValid(){
        const { errors, isValid } = validateInput(this.state);
        if(!isValid){
            this.setState({ errors });
        }
        return isValid;
    }

    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.setState({ errors: {}, fberrors: '', isLoading: true});
            userSignupRequest(this.state,
                (data) => {
                    if(data === 'bienvenido'){
                        this.setState({
                            email: '',
                            nombre: '',
                            apellido: '',
                            password: '',
                            passwordConfirmation: '',
                            isLoading: false,
                            errors: {}
                        });
                        Materialize.toast('Bienvenido!', 4000);
                        setTimeout(function() { 
                            Materialize.toast('Ya puedes ingresa al Dashboard', 4000); 
                        }.bind(this), 3000);
                    }else{
                        this.setState({ fberrors: data, isLoading: false });
                    }
                }
            );
        }
    }


    render(){
        const { errors, fberrors, isLoading } = this.state;
        return(
            <div className="row">
                <form onSubmit={this.onSubmit}>
                    <TextField
                        value={this.state.nombre}
                        onChange={this.onChange}
                        field="nombre"
                        place="Nombre"
                        error={errors.nombre}
                        icon="account_circle"
                    />

                    <TextField
                        value={this.state.apellido}
                        onChange={this.onChange}
                        field="apellido"
                        place="Apellido"
                        error={errors.apellido}
                        icon="account_circle"
                    />

                    <TextField
                        value={this.state.email}
                        onChange={this.onChange}
                        field="email"
                        place="Email"
                        error={errors.email}
                        type="email"
                        icon="email"
                    />

                    <TextField
                        value={this.state.password}
                        onChange={this.onChange}
                        field="password"
                        place="Contraseña"
                        error={errors.password}
                        type="password"
                        icon="vpn_key"
                    />

                    <TextField
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        field="passwordConfirmation"
                        place="Confirmar contraseña"
                        error={errors.passwordConfirmation}
                        type="password"
                        icon="import_export"
                    />

                    <div id="notificacion">{this.state.notificacion}</div>
                    <button
                        disabled={isLoading}
                        style={{width:'100%', marginTop: '20px'}}
                        type="submit"
                        className="waves-effect waves-light btn blue"
                    >Registrarse</button>
                    {fberrors && <span className="fberrors">{fberrors}</span>}
                </form>

            </div>
        );
    }
}

LeadCapture.propsTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default LeadCapture;