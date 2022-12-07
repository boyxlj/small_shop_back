import React from 'react'
import style from "./style/index.module.scss"
import * as echarts from 'echarts';
export default function Welcome() {
  const chartDom = document.getElementById('main');
  const myChart = echarts.init(chartDom);
  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  
   myChart.setOption(option);
  
  return (
    <div className={style.box}>
      {/* <div className={style.bg}>
        <div id="main" style="width: 600px;height:400px;"></div>
      </div> */}
      {/* <div className={style.footer}>Copyright © 2021-2022 small-shop 微商城 All Rights Reserved</div> */}
    </div>
  )
}
