import {categoryList} from "../api/request"
export const getCateGoryName = async(id)=>{
  const {data:res} = await categoryList()
  console.log(res)
  console.log("接收到,id",id)
}