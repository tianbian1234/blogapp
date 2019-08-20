import React, {Component} from 'react';
import './index.scss';
import Img from '../../public/images/0.jpg';

export default class Auther extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="author-container">
                <img className="touxiang" src={Img} />
                <div className="author-name" >天边彩<span>高彦涛的个人博客</span></div>
            </div>
        )
    }
}