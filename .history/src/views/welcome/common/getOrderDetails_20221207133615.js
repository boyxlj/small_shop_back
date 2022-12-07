import * as echarts from 'echarts';
import { selectAllOrder } from '../../../api/request'
import { message } from 'antd';
//获取商品分类
const getOrder = async () => {
  const { data: res } = await selectAllOrder()
  if (res.code != 200) return message.error("数据获取异常")
  console.log(res.data)
  // const categoryData = res.data?.map(item => {
  //   return { value: item.children?.length>0?item.children?.length:0||0, name: item.categoryName }
  // })

  const awaitCar = res.data?.filter(item =>item.type=='1' )?.length || 0//加入购物车
  const awaitPay = res.data?.filter(item =>item.type=='2' )?.length  || 0 //待付款
  const awaitSend = res.data?.filter(item =>item.type=='3' )?.length || 0 //待发货

  console.log(awaitCar,awaitPay,awaitSend)
 

  getInitEcharts(awaitPay,awaitSend)
}

//初始化echarts
const getInitEcharts = (awaitPay,awaitSend) => {
  const chartDom = document.getElementById('orderPie');
  const myChart = echarts.init(chartDom);
  const option =  {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 250],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 0, name: '已在购物车' },
          { value: awaitPay, name: '待付款' },
          { value: awaitSend, name: '待发货' },
        ]
      }
    ]
  };

  myChart.setOption(option);
}


export const getOrderData = ()=>{
  getOrder()
}
