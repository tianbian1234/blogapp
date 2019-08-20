import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from './nav';
import { _axios } from '../util/axios';
import '../scss/index.scss';

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }
    getwindowWH = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    componentDidMount(){
        this.getwindowWH()
        // _axios( window['_MAX_API_']+'/get_all_banner', {}).then(res => {
        //     console.log("1111111111", res);
        //     if(res.data.code == 200){
        //         this.setState({
        //             list: res.data.msg
        //         })
        //     }
        // })
    }
    render(){
        let { width, height } = this.state;
        return(
            <div className='container' style={{width: width, height: height}}>
                {/* <Nav /> */}
                <div className='index-back'>
                    <p className='title'>高彦涛的个人网站</p>
                    <div className='blog-back'>
                        <Link to={'/blog'}>我的学习blog</Link>
                    </div>
                </div>
            </div>
        )
    }
}