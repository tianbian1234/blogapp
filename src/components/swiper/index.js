import React, { Component } from 'react';
import Swiper from "../../public/swiper";
import "./index.scss"

export default class ImageLB extends Component{

    componentDidMount(){
        var swiper = new Swiper({
            container: this.refs.swiper_container
        })
    }

    render(){
        return(
            <div ref="swiper_container" className="swiper-container">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        )
    }
}