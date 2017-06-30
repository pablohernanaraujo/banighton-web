import React from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';

class ImagenFondo extends React.Component{
    constructor(){
        super();
        this.state = {
            width: $(window).width(),
            imgUrl: '',
            imgFront: ''
        }
    }

    render(){
        var fullScreenStyle = {
            position: 'relative',
            backgroundImage: 'url(' + this.state.imgUrl + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            overflow: 'hidden'
        };

        var fullPrimerPlano = {
            backgroundImage: 'url(' + this.state.imgFront + ')',
            width: this.props.ancho,
            height: this.props.alto,
            left: this.props.izquierda
        };

        return(
            <div>
                <WindowResizeListener onResize={windowSize => {
                    if(windowSize.windowWidth > 800){
                        this.setState({imgUrl: './app/images/'+this.props.seccion+'-1600.jpg'});
                        this.setState({imgFront: './app/images/'+this.props.front+'-1600.png'});
                    }else if(windowSize.windowWidth <= 800 && windowSize.windowWidth > 600){
                        this.setState({imgUrl: './app/images/'+this.props.seccion+'-800.jpg'});
                        this.setState({imgFront: './app/images/'+this.props.front+'-800.png'});
                    }else if(windowSize.windowWidth <= 600){
                        this.setState({imgUrl: './app/images/'+this.props.seccion+'-600.jpg'});
                        this.setState({imgFront: './app/images/'+this.props.front+'-600.png'});
                    }
                }}/>
                <div style={fullScreenStyle}>
                    <div className="fullScreenTexto">
                        <div>{this.props.text1}</div>
                        <div>{this.props.text2}</div>
                        <div>{this.props.text3}</div>
                    </div>
                    {
                        this.props.front
                            ? <div className="primerPlano" style={fullPrimerPlano}></div>
                            : null
                    }
                </div>
            </div>
        );
    }
}

export default ImagenFondo;