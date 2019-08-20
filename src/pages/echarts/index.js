import React, { Component } from 'react';
import WidgetBox from './moveDiv';
import './index.scss';

export default class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }
    moveDiv = () => {
        return [1, 2, 3, 4].map(item => (<WidgetBox key={item} />))
    }
    componentDidMount(){
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    render(){
        let { width, height } = this.state;
        return (
            <div ref='board_container' className='board-container' style={{width: width, height: height}}>
                {this.moveDiv()}
            </div>
        )
    }
} 