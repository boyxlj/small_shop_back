import React from 'react'
import CategoryTable from './components/categoryTable'
import CateGoryDialog from './components/dialog'
import {categoryList} from "../../api/request"
import { useState } from 'react'
import { useEffect } from 'react'
import {Button} from "antd"
import style from "./style/index.module.scss"
import { useDispatch } from 'react-redux/es/exports'
import {changeIsShow} from "./store"
export default function Category() {
  const dispatch = useDispatch()
  const [categoryData,setCategoryData] = useState([])

  useEffect(()=>{
    getCategoryData()
  },[])
  //获取商品分类
  const getCategoryData = async ()=>{
    const {data:res} = await categoryList()
    if(res.code!=200) return setCategoryData([])
    setCategoryData(res.data)
  }

  //添加或者修改后更新数据
  const reLoad = ()=>{
    getCategoryData()
  }
  return (
    <div>
      <div className={style.add}>
        <Button onClick={()=>dispatch(changeIsShow({isShow:true}))} type='primary'>添加分类</Button>
      </div>
      <CategoryTable reLoad={reLoad} categoryData={categoryData}/>
      <CateGoryDialog reLoad={reLoad}/>
    </div>
  )
}
