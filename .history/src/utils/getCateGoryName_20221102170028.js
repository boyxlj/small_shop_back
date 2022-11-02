import {categoryList} from "../api/request"
export const getCateGoryName = (id)=>{
  console.log("接收到,id",id)
  const res = getData()
  console.log(res)
  return 123
}

const getData = async()=>{
  const {data:res} = await categoryList()
  return res
}