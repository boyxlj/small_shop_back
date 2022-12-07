import React from 'react'
import style from "./style/index.module.scss"
import * as echarts from 'echarts';
import { useEffect } from 'react';
import {getShopList} from '../../api/request'
export default function Welcome() {


   useEffect(()=>{
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: '微商城商品分类',
        subtext: '所有分类',
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
          name: '分类名称',
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
   },[])
  
  return (
    <div className={style.box}>
      <div id="main" className={style.categoryPie}></div>
      {/* <div className={style.bg}>
      </div> */}
      {/* <div className={style.footer}>Copyright © 2021-2022 small-shop 微商城 All Rights Reserved</div> */}
    </div>
  )
}
