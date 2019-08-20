import React, { Component } from 'react';
import './index.scss';

export default class Select extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.data[0],
            listShow: true,
            style: {
                width: 200,
                left: 90
            }
        }
    }
    handleItemClick = (value, key) => {
        this.setState({
            title: value
        }, function(){
            this.props.changeRole(this.state.title)
        })
    }
    handleSeletClick = () => {
        let { listShow } = this.state;
        this.setState({
            listShow: !listShow
        })
    }
    render(){
        let data = this.props.data;
        let { title, listShow } = this.state;
        let role = localStorage.getItem('role');
        let style = this.props.style ? this.props.style : this.state.style;
        return (
            <div className='dh-select-btn' onClick={this.handleSeletClick} style={style}>
                <div className='dh-select-btn-rendered'>
                    <div className='dh-select-btn-selected-value' title={title}>{title}</div>
                </div>
                <span className='dh-select-arrow'></span>
                <ul className={listShow ? 'dh-select-btn-list' : 'dh-select-btn-list dh-select-btn-list-block'}>
                    {data.map((item, i) => (<li key={item+i} onClick={() => this.handleItemClick(item, i)}>{item}</li>))}
                </ul>
            </div>
        )
    }
}
