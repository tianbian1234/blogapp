import React, {Component} from 'react';
import Author from '../../components/auther';
import Tab from '../../components/tab';
import BlogItem from '../../components/blogItem';
import Slider from '../../components/slider';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as blogActions from '../../actions';
import { withRouter } from 'react-router-dom'

import './index.scss';
@withRouter
@connect((state, props) => {
    return {
        blogs: state.get('blog')
      }
}, (dispatch) =>(
    {
        blogActions: bindActionCreators(blogActions, dispatch)
    }
))
export default class Blog extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        const { blogActions } = this.props;
        blogActions.list();
    }

    handleShowCurrentBlog = (_id) => {
        let { history } = this.props;
        history.push('/blogSignal/'+_id);
    }

    render(){
        let { blogs } = this.props;
        console.log("333333333", blogs);
        return(
            <div className='blog-container'>
                <Author />
                <Tab />
                <div className='content-list'>
                    <div className="blog_list_box">
                        <ul>
                            {blogs && blogs.map((item, i) => (<BlogItem key={item._id} data={item} handleShowCurrentBlog={() => {this.handleShowCurrentBlog(item._id)}} />))}
                        </ul>
                    </div>
                </div>
                <Slider />
            </div>
        )
    }
}