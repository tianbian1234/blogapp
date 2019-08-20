import React, {Component} from 'react';
import Author from '../../components/auther';
import Tab from '../../components/tab';
import BlogItem from '../../components/blogItem';
import Slider from '../../components/slider';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as blogActions from '../../actions';

import './index.scss';

@connect((state, props) => {
    return {
        signalBlog: state.get('signalBlog')
      }
}, (dispatch) =>(
    {
        blogActions: bindActionCreators(blogActions, dispatch)
    }
))
export default class BlogSignal extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentWillMount(){
        const { blogActions } = this.props;
        let _id = window.location.href.substring(35)
        blogActions.blogSignal({_id});
    }

    render(){
        let { signalBlog } = this.props;
        return(
            <div className='blog-container'>
                <Author />
                <div className="content-list">
                    <div className='content-text'  dangerouslySetInnerHTML={{__html:signalBlog && signalBlog.content}} ></div>
                </div>
                <Slider />
            </div>
        )
    }
}