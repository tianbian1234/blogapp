import React, { Component } from 'react';
import echarts from 'echarts';

export default class TestZSQ extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.myChart = echarts.init(this.wordEcharts);
        this.drawWordcloud();
    }
    drawWordcloud = () => {
        let option ={
            title: {
                text: '词云',//标题
                x: 'center',
                textStyle: {
                    fontSize: 23
                }
         
            },
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                show: true
            },
            series: [{
                name: '热点分析',//数据提示窗标题
                type: 'wordCloud',
                sizeRange: [6, 66],//画布范围，如果设置太大会出现少词（溢出屏幕）
                rotationRange: [-45, 90],//数据翻转范围
                //shape: 'circle',
                textPadding: 0,
                autoSize: {
                    enable: true,
                    minSize: 6
                },
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [{
                    name: "python",
                    value: 40
                }, {
                    name: "爬虫",
                    value: 50
                },{
                    name: "node.js",
                    value: 30
                }, {
                    name: "数据",
                    value: 50
                },{
                    name: "javascript",
                    value: 60
                }, {
                    name: "koa",
                    value: 70
                },{
                    name: "react",
                    value: 20
                }, {
                    name: "flutter",
                    value: 45
                }]
            }]
        };
        this.myChart.setOption(option);
    }

    render(){
        return(
            <div style={{width: '100%', height: '100%'}} ref = {el => this.wordEcharts = el} ></div>
        )
    }
}