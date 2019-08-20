import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="nav">
                <ul className="nav-container">
                    <li><Link to="/echarts" >echarts学习</Link></li>
                    <li><Link to="/css" >css页面</Link></li>
                    <li><Link to="/javascript" >javaScript学习</Link></li>
                    <li><Link to="/python" >python学习</Link></li>
                    <li><Link to="/go" >go语言</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;