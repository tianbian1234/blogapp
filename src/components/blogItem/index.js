import React, {Component} from 'react';
import '../../public/iconfont/iconfont.css';
import './index.scss';
export default class BlogItem extends Component{
    constructor(props){
        super(props);
    }
    setTime = (time) => {
        let data = new Date(time);
        return data.getFullYear() + '年' + data.getMonth() + '月' + data.getDay() + '日'
    }
    handleShowCurrentBlog = () => {
        let { handleShowCurrentBlog } = this.props;
        handleShowCurrentBlog()
    }

    render(){
        let { data } = this.props;
        let time = this.setTime(data.createdAt);
        return(
            <li className="blog-box">
                <div className='title'><a className="type">{data.type}<i className="label-arrow"></i></a><h3 onClick={this.handleShowCurrentBlog}>{data.title}</h3></div>
                <div className="item_content">
                    <img src={data.img} onClick={this.handleShowCurrentBlog} />
                    <article className='content' dangerouslySetInnerHTML={{__html:data.content}}></article>
                </div>
                <div className="bottom_config">
                    <span className="author"><i className="iconfont icon-gaojian-zuozhe"></i>{data.author}</span>
                    <span className="createtime"><i className="iconfont icon-tubiao-"></i>{time}</span>
                    <span className="count"><i className="iconfont icon-liulan"></i>{data.readcount}浏览</span>
                    <span className="like"><i className="iconfont icon-xihuan"></i>{data.readlike}喜欢</span>
                </div>
            </li>
        )
    }
}