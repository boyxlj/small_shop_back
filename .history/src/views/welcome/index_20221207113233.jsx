import React from 'react'
import style from "./style/index.module.scss"
import * as echarts from 'echarts';
import { useEffect } from 'react';
import { categoryList } from '../../api/request'
import { message } from 'antd';
import {getCategoryPieData} from "./common/getCategoryPieData"
export default function Welcome() {

  // const [categoryData,setCategoryData] =useState([])
  //获取商品分类
  const getCategory = async () => {
    const { data: res } = await categoryList()
    if (res.code != 200) return message.error("数据获取异常")
    message.success("数据获取成功")
    const categoryData = res.data?.map(item => {
      return { value: 0, name: item.categoryName }
    })
    getInitEcharts(categoryData)
  }

  useEffect(() => {
    getCategoryPieData()

  }, [])

  const getInitEcharts = (data=[]) => {
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
          data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            formatter: '{b}'
          }
        }
      ]
    };
    myChart.setOption(option);
  }

  return (
    <div className={style.box}>
      <div id="main" className={style.categoryPie}></div>
      {/* <div className={style.bg}>
      </div> */}
      {/* <div className={style.footer}>Copyright © 2021-2022 small-shop 微商城 All Rights Reserved</div> */}
    </div>
  )
}
