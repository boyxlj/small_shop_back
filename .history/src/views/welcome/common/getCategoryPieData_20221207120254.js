import * as echarts from 'echarts';
import { categoryAndChildren } from '../../../api/request'
import { message } from 'antd';
//获取商品分类
const getCategory = async () => {
  const { data: res } = await categoryAndChildren()
  if (res.code != 200) return message.error("数据获取异常")
  const categoryData = res.data?.map(item => {
    return { value: item.children?.length>0?item.children?.length:0||0, name: item.categoryName }
  })
  const total = res.data?.reduce((pre,item)=>{
    return pre+=item.children?.length>0?item.children?.length:0||0
  },0)

  const xAxis = res.data?.map(item => item.categoryName)
  const yAxis = res.data?.map(item => item.children?.length>0?item.children?.length:0||0)
  getInitEcharts(total,categoryData)
  getInitEchartsLine(xAxis,yAxis)
}

//初始化echarts
const getInitEcharts = (total=0,data=[]) => {
  const chartDom = document.getElementById('categoryPie');
  const myChart = echarts.init(chartDom);
  const option = {
    title: {
      text: `微商城全部商品 (${total})件商品`,
      subtext: `所有分类及商品数量`,
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
const getInitEchartsLine = (xData,yData) => {
  const chartDom = document.getElementById('categoryPieLine');
  const myChart = echarts.init(chartDom);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xAxis,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };
  myChart.setOption(option);
}

export const getCategoryPieData = ()=>{
  getCategory()
}
