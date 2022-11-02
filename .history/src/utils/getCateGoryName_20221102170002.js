import {categoryList} from "../api/request"
export const getCateGoryName = (id)=>{
  console.log("接收到,id",id)
  getData()
  return 123
}

const getData = async()=>{
  const {data:res} = await categoryList()
  console.log(res)
}