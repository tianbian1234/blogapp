import React, { Component } from 'react';
import echarts from 'echarts';
// import 'echarts-gl';
// import chinaGeo from '../../../node_modules/echarts/map/json/china.json';

export default class MapTest extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        echarts.registerMap('china', chinaGeo)
        this.myChart = echarts.init(this.refs.map);
        // this.initCharts();
    }

    initCharts = () => {

        let option = {
          title: {
            text: '全国行政区划3D地图',
            x: 'center',
            top: "20",
            textStyle: {
              color: '#000',
              fontSize: 24
            }
          },
          tooltip: {
            show: true,
          },
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            text: ['bar3D'],
            calculable: true,
            max: 300,
            inRange: {
              color: ['#87aa66', '#eba438', '#d94d4c']
            }
          }, {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            text: ['scatter3D'],
            left: 'right',
            max: 100,
            calculable: true,
            inRange: {
              color: ['#000', 'blue', 'purple']
            }
          }],
          geo3D: {
            map: 'china',
            roam: true,
            itemStyle: {
              areaColor: 'rgb(5,101,123)',
              opacity: 1,
              borderWidth: 0.8,
              borderColor: 'rgb(62,215,213)'
            },
            label: {
              show: true,
              textStyle: {
                color: '#fff', //地图初始化区域字体颜色
                fontSize: 16,
                opacity: 1,
                backgroundColor: 'rgba(0,0,0,0)'
                //backgroundColor: 'rgba(53,171,199,0)'
              },
            },
            emphasis: { //当鼠标放上去  地区区域是否显示名称
              label: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 16,
                  backgroundColor: 'rgba(0,23,11,0)'
                }
              }
            },
            //shading: 'lambert',
            light: { //光照阴影
              main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 55,
                beta: 10
    
              },
              ambient: {
                intensity: 0.3
              }
            },
            realisticMaterial: {
              detailTexture: 'asset/leather/leather_albedo.jpg'
            }
          },
          series: [
    
            //画线
    
            {
              name: 'zhuce',  
              type: 'lines3D',
    
              coordinateSystem: 'geo3D',
    
              effect: {
                show: true,
                trailWidth: 4,
                trailOpacity: 0.5,
                trailLength: 0.3,
                constantSpeed: 5
              },
    
              blendMode: 'lighter',
    
              lineStyle: {
                width: 0.2,
                opacity: 0.05
              },
    
              data: [
                [
                    [121.15, 31.89],
                    [109.781327, 39.608266]
                ],
                [
                    [120.38, 37.35],
                    [122.207216, 29.985295]
                ],
                [
                    [123.97, 47.33],
                    [120.13, 33.38]
                ],
                [
                    [118.87, 42.28],
                    [120.33, 36.07]
                ],
                [
                    [121.52, 36.89],
                    [117.93, 40.97]
                ],
                [
                    [102.188043, 38.520089],
                    [122.1, 37.5]
                ],
                [
                    [118.58, 24.93],
                    [101.718637, 26.582347]
                ],
                [
                    [120.53, 36.86],
                    [121.48, 31.22]
                ],
                [
                    [119.46, 35.42],
                    [122.05, 37.2]
                ],
                [
                    [119.97, 35.88],
                    [116.1, 24.55]
                ],
                [
                    [121.05, 32.08],
                    [112.02, 22.93]
                ],
                [
                    [91.11, 29.97],
                    [118.1, 24.46]
                ]
            ]
            }
          ]
        };
       this.myChart.setOption(option, true)

       let myChartE = echarts.getInstanceByDom(this.refs.map);

       myChartE.on('click', function (params) {
        console.log('2223333');
      })
    }

    render(){
        return(
            <div ref='map' style={{width: 800, height: 800}}></div>
        )
    }
}