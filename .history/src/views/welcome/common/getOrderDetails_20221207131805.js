import * as echarts from 'echarts';
import { categoryAndChildren } from '../../../api/request'
import { message } from 'antd';
//获取商品分类
const getOrder = async () => {
  const { data: res } = await categoryAndChildren()
  if (res.code != 200) return message.error("数据获取异常")
  const categoryData = res.data?.map(item => {
    return { value: item.children?.length>0?item.children?.length:0||0, name: item.categoryName }
  })
  const total = res.data?.reduce((pre,item)=>{
    return pre+=item.children?.length>0?item.children?.length:0||0
  },0)

 
  getInitEcharts(total,categoryData)
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


export const getOrderData = ()=>{
  getOrder()
}
