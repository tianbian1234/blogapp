import React, {Component} from 'react';

export default class WidgetBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }
    handleMouseDown = (e) => {
        let scrollX =  e.clientX - this.refs.board_box.offsetLeft;
        let scrollY = e.clientY - this.refs.board_box.offsetTop;

        this.setState({
            x: scrollX,
            y: scrollY
        })
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.refs.board_box.addEventListener('mousemove', this.mousemove)

    }
    handleMouseUp = (e) => {
        console.log("33333---------mouseUp");
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.refs.board_box.removeEventListener('mousemove', this.mousemove);
    }
    mousemove = () => {
        let { x, y } = this.state;
        var e = event || window.event;
        console.log("333333", e.clientX, e.clientY);
        if(e.clientX - x >= 0 || e.clientY - y >= 0 || e.clientX - x <= this.refs.board_container.offsetWidth || e.clientY - y <= this.refs.board_container.offsetHeight){
            this.refs.board_box.style.left = (e.clientX - x)+'px';
            this.refs.board_box.style.top = (e.clientY - y)+'px';
        }
    }
    selectCurrentBox = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        e.target.classList.add('active');

    }
    render(){
        return(
            <div 
                ref='board_box' 
                style={{
                    position: 'absolute', 
                    width: 400, 
                    height:400, 
                    background: '#0000ff'
                }} 
                onMouseDown={this.handleMouseDown} 
                onMouseUp={this.handleMouseUp}
                onClick = { this.selectCurrentBox }
            >
            </div>
        )
    }
}