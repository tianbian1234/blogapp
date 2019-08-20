import React, { Component } from 'react';
import './index.scss';

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            height: 0,
            user: '',
            password: ''
        }
    }
    componentDidMount(){
        console.log("3333444", window.screen.height);
        this.setState({
            height: window.innerHeight
        })
    }
    handleUserChange = (e) => {
        this.setState({
            user: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    login = () => {
        let { user, password } = this.state;
        
    }
    render(){
        let { height } = this.state;
        console.log("333333", height);
        return(
            <div className="login_box" style={{height: height}}>
                <div className="login_box_center">
                    <div className="list_box"><p className="title">用户名或电子邮件地址</p><input placeholder="请输入用户名" onChange={this.handleUserChange} /></div>
                    <div className="list_box"><p className="title">密码</p><input placeholder="请输入密码" type="password"  onChange={this.handlePasswordChange}/></div>
                    <div className="button_box"><button onClick={this.login}>登录</button></div>
                </div>
            </div>
        )
        
    }
}