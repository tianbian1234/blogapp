import React, { Component } from 'react';
import "./index.scss"

export default class Tab extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ["首页", "生活笔记", "技术杂谈", "福利专区", "关于自己", "给我留言", "赞助作者", "技术交流", "提问交流", "项目合作"],
            show: [true, false, false, false, false, false, false, false, false, false],
            tabFlag: false
        }
    }
    handleClick = (e, i) => {
        let { data, show } = this.state;
        let len = data.length;
        show = show.map((item, j) => {
            console.log( j == i ? item = true :  item = false)
            return j == i ? item = true :  item = false
        })
        this.setState({
            show
        })
    }
    handleUlShow = () => {
        let { tabFlag } = this.state;
        this.setState({
            tabFlag: !tabFlag
        })
    }
    render(){
        let { data, show, tabFlag } = this.state;
        return(
            <div className="tab-list">
                <div className="tab-small" onClick={this.handleUlShow}></div>
                <ul ref="tabList" className={tabFlag ? "active" : ""}>
                    {data&&data.map((item,i) => (
                        <li className={show[i] ? 'active' : ''} key={i} onClick={(e) => {this.handleClick(e, i)}}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}