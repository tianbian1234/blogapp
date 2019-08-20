import React, { Component } from 'react';
import Banner from '../banner';

export default class Slider extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='slider-right'> 
                <div className="hot">
                    <h3>热点专题</h3>
                    <div className="banner-box">
                        <Banner />
                    </div>
                </div>
                <div className="guidang">
                    <h3>文章归档</h3>
                    <div className="guidang-content-box">
                        
                    </div>
                </div>
                <div className="youlike">
                    <h3>猜你喜欢</h3>
                    <div className="youlike-list-box">

                    </div>
                </div>
                <div className="wordcloud">
                    <h3>标签字符云</h3>
                    <div className="wordcloud-echarts-box">

                    </div>
                </div>
                <div className="fridelink">
                    <h3>友情链接</h3>
                    <div className="fridelink-box">

                    </div>
                </div>
            </div>
        )
    }
}