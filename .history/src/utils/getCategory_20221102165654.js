import {categoryList} from "../api/request"
export const getCateGory = async(list,id)=>{
  const {data:res} = await categoryList()
  console.log(res)
  // console.log("接收到,list",list,id)
}