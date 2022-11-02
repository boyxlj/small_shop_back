import {categoryList} from "../api/request"
export const getCateGory = async(id)=>{
  const {data:res} = await categoryList()
  console.log(res)
  console.log("接收到,list",id)
}