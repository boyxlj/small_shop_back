import React from 'react'
import style from "./style/index.module.scss"
import * as echarts from 'echarts';
export default function Welcome() {
  const chartDom = document.getElementById('main');
  const myChart = echarts.init(chartDom);
  return (
    <div className={style.box}>
      {/* <div className={style.bg}>
        
      </div> */}
      {/* <div className={style.footer}>Copyright © 2021-2022 small-shop 微商城 All Rights Reserved</div> */}
    </div>
  )
}
