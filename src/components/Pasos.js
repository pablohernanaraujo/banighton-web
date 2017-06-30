import React from 'react'

class Pasos extends React.Component{
    render(){
        return(
            <div className="col s12 m6 l4" id={this.props.paso}>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <img src={'./app/images/'+this.props.imagen+'.png'}/>
                </div>
                <div className="pasosTextos">
                    <div className="circulos">{this.props.numero}</div>
                    <span>{this.props.titulo}</span>
                    <p>{this.props.texto}</p>
                </div>
            </div>
        );
    }
}

export default Pasos;