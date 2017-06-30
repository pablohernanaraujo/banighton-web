import React from 'react'
import ImagenFondo from '../components/ImagenFondo'
import Promos from '../components/Promos'
import Pasos from '../components/Pasos'
import Parallax from '../components/Parallax'
import Servicio from '../components/Servicio'

class HomePage extends React.Component{
    constructor(){
        super();
        this.state = {
            seccion: 'street',
            front: 'inicio-front',
            alto: '500px',
            ancho: '600px',
            izquierda: '40%',
            text1: 'La GUIA de la',
            text2: 'NOCHE en tu',
            text3: 'Smartphone',
            promos : [
                {
                    icono: 'face',
                    titulo: 'Bienvenido',
                    texto: 'A Banighton, la nueva herramienta para tu Smartphone que te presenta las mejores opciones para tus noches.'
                },
                {
                    icono: 'map',
                    titulo: 'Banighton',
                    texto: 'Es la App fácil de usar, intuitiva y gratuita que con su sistema de rastreo y geolocalizacion te abrirá las puertas de la noche con las mejores propuestas en el lugar donde te encuentres.'
                },
                {
                    icono: 'sms',
                    titulo: 'Informacion Detallada',
                    texto: 'De cada Boliche con sus características, estilo musical, edad, días de apertura, descuentos y beneficios por  formar parte de la comunidad Banighton.'
                }
            ],
            pasos : [
                {
                    pasosNumero: '1',
                    pasosImagen: 'phone01',
                    pasosTitulo: 'Dónde vamos?',
                    pasosTexto: 'En cartelera principal, los boliches, bares y próximos eventos para qué siempre estés actualizado.'
                },
                {
                    pasosNumero: '2',
                    pasosImagen: 'phone03',
                    pasosTitulo: 'Qué lugar nos gusta mas?',
                    pasosTexto: 'Desde Banighton accede al indice de boliches, bares y eventos.'
                },
                {
                    pasosNumero: '3',
                    pasosImagen: 'phone03',
                    pasosTitulo: 'Cómo llegamos?',
                    pasosTexto: 'Utilizá Banighton también como guía en GPS para llegar a tu destino elegido.'
                }
            ],
            para1Imagen: 'mapa-3',
            para1Titulo: 'Mantente en contacto',
            para1Texto: 'Enterate de todas las novedades primero',
            para1Icono1: 'location-arrow',
            para1Icono2: 'mobile',
            para1Icono3: 'envelope',
            para2Imagen: 'visitanos',
            para2Titulo: 'Visitanos',
            para2Texto: 'Date un break y mira todo lo que tenemos para vos',
            para2Icono1: 'instagram',
            para2Icono2: 'twitter',
            para2Icono3: 'facebook',

            serv1Imagen: './app/images/pushIOS.jpg',
            serv1Titulo: 'Push',
            serv1Texto: 'Enviar mensajes zonales con eventos promos y informacion.',
            serv1Href: '/Servicios',

            serv2Imagen: 'app/images/mailingIOS.jpg',
            serv2Titulo: 'Mailing',
            serv2Texto: 'Creamos campañas de mailing semanales con toda la informacion destacada.',
            serv2Href: '/Servicios'
        };

    }

    componentDidMount() {
        $(document).ready(function(){
            $('.parallax').parallax();
            $('.modal-trigger').leanModal();
            var fadeStart= $(window).height()/4, // 100px scroll or less will equiv to 1 opacity
                fadeUntil= $(window).height()/1, // 200px scroll or more will equiv to 0 opacity
                texto = $('.fullScreenTexto'),
                imagen = $('.primerPlano'),
                promo1 = $('#promo1'),
                promo2 = $('#promo2'),
                promo3 = $('#promo3');

            $(window).scroll(function(){
                var wScroll = $(this).scrollTop();
                var altoPantalla = $(window).height();

                if(wScroll <= altoPantalla){
                    $(texto).css({
                        'transform': 'translate(0px, '+ wScroll /3+'%)'
                    });

                    $(imagen).css({
                        'transform': 'translate('+ wScroll /40+'%, 0px)'
                    });

                    var offset = $(document).scrollTop(),
                        opacity=0;

                    if( offset<=fadeStart ){
                        opacity=1;
                    }else if( offset<=fadeUntil ){
                        opacity=1-offset/fadeUntil;
                    }
                    imagen.css('opacity',opacity);
                }

                var segundaStart = $('.inicioSegunda').offset().top - ($(window).height()/1.4);

                if(wScroll >= segundaStart && wScroll <= segundaStart + $('.inicioSegunda').offset().top){
                    var opacity2 = (wScroll - $('.inicioSegunda').offset().top + 400) / (wScroll / 4);
                    promo1.css({'opacity': opacity2});
                    var opacity3 = (wScroll - $('.inicioSegunda').offset().top + 300) / (wScroll / 4);
                    promo2.css({'opacity': opacity3});
                    var opacity4 = (wScroll - $('.inicioSegunda').offset().top + 200) / (wScroll / 4);
                    promo3.css({'opacity': opacity4});
                }

                var pasosTop = $('.inicioCuarta').offset().top;
                var winHeight = $(window).height();

                function posts(x){

                    var goal = pasosTop - winHeight / 10,
                        offset;

                    if(x < goal){
                        offset = Math.min(0.005*Math.pow(x-goal,2), winHeight);
                    }else{
                        offset = 0;
                    }

                    $('#paso1').css({'transform': 'translate('+ -offset +'px,'+Math.abs(offset*0.3)+'px)'});
                    $('#paso3').css({'transform': 'translate('+ offset +'px,'+Math.abs(offset*0.3)+'px)'});
                }

                posts(wScroll);
            });

        });
    }

    render(){
        var createPromo = function(promo, index){
            return <Promos
                key={promo.titulo + index}
                index={'promo'+(index+1)}
                icono={promo.icono}
                titulo={promo.titulo}
                texto={promo.texto}
            />;
        };

        var createPasos = function(paso, index){
            return <Pasos
                key={paso.pasosNumero + index}
                paso={'paso'+(index+1)}
                imagen={paso.pasosImagen}
                numero={paso.pasosNumero}
                titulo={paso.pasosTitulo}
                texto={paso.pasosTexto}
            />;
        };

        return(
            <div>
                <ImagenFondo
                    seccion={this.state.seccion}
                    front={this.state.front}
                    ancho={this.state.ancho}
                    alto={this.state.alto}
                    izquierda={this.state.izquierda}
                    text1={this.state.text1}
                    text2={this.state.text2}
                    text3={this.state.text3}
                />
                <div className="container inicioSegunda">
                    <div className="row">
                        {this.state.promos.map(createPromo)}
                    </div>
                </div>
                <Parallax
                    imagen={this.state.para1Imagen}
                    titulo={this.state.para1Titulo}
                    texto={this.state.para1Texto}
                    icono1={this.state.para1Icono1}
                    icono2={this.state.para1Icono2}
                    icono3={this.state.para1Icono3}
                />
                <div className="inicioCuarta">
                    <div className="container ">
                        <div className="row" style={{position:'relative'}}>
                            {this.state.pasos.map(createPasos)}
                        </div>
                    </div>
                </div>
                <Parallax
                    imagen={this.state.para2Imagen}
                    titulo={this.state.para2Titulo}
                    texto={this.state.para2Texto}
                    icono1={this.state.para2Icono1}
                    icono2={this.state.para2Icono2}
                    icono3={this.state.para2Icono3}
                />
                <div className="row inicioSexta"  style={{backgroundColor:'white',padding:'60px 0px'}}>
                    <div className="container">
                        <div className="col m12 l4">
                            <Servicio
                                href={this.state.serv1Href}
                                titulo={this.state.serv1Titulo}
                                imagen={this.state.serv1Imagen}
                                texto={this.state.serv1Texto}
                            />
                        </div>
                        <div className="col m12 l4">
                            <div className="center-align">
                                <h5>Todo lo que necesitas</h5>
                                <p className="texto-gris">Para que tus usuarios esten más informados</p>
                            </div>
                        </div>
                        <div className="col m12 l4">
                            <Servicio
                                href={this.state.serv2Href}
                                titulo={this.state.serv2Titulo}
                                imagen={this.state.serv2Imagen}
                                texto={this.state.serv2Texto}
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default HomePage;