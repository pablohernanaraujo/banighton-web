import React from 'react'
import { Link } from 'react-router'

class NavItem extends React.Component{

    onClick(){
        $('.hamburger').toggleClass('is-active');
        $('.menu').toggleClass('menuCerrar');
    }

    render(){
        return(
            <li>
                <Link to={this.props.href} onClick={this.onClick.bind(this)}>
                    {this.props.title}
                </Link>
            </li>
        )
    }
}

export default NavItem;