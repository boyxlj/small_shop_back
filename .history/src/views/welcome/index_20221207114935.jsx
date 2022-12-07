import React from 'react'
import style from "./style/index.module.scss"
import { useEffect } from 'react';
import {getCategoryPieData} from "./common/getCategoryPieData"
import {getCategoryPieData1} from "./common/getCategoryPieData1"
export default function Welcome() {

  useEffect(() => {
    getCategoryPieData()
    getCategoryPieData1()

  }, [])

  

  return (
    <div className={style.box}>
      <div id="categoryPie" className={style.categoryPie}></div>
      <div id="categoryPie" className={style.categoryPie}></div>
      {/* <div className={style.bg}>
      </div> */}
      {/* <div className={style.footer}>Copyright © 2021-2022 small-shop 微商城 All Rights Reserved</div> */}
    </div>
  )
}
