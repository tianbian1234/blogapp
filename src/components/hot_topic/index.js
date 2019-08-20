import react, { Component } from 'react';
import './index.scss';

export default class HotTopic extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="hot_topic_box">
                <div className="small_banner_1"></div>
                <div className="small_banner_2"></div>
                <div className="small_banner_3"></div>
            </div>
        )
    }
}