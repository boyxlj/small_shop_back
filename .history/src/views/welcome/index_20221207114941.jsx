import React from 'react'
import style from "./style/index.module.scss"
import { useEffect } from 'react';
import {getCategoryPieData} from "./common/getCategoryPieData"
export default function Welcome() {

  useEffect(() => {
    getCategoryPieData()
  }, [])

  

  return (
    <div className={style.box}>
      <div id="categoryPie" className={style.categoryPie}></div>
      {/* <div className={style.bg}>
      </div> */}
      {/* <div className={style.footer}>Copyright © 2021-2022 small-shop 微商城 All Rights Reserved</div> */}
    </div>
  )
}
