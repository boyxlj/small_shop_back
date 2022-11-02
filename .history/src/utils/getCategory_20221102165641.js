import {categoryList} from "../api/request"
export const getCateGory = async(list,id)=>{
  await categoryList()
  console.log("接收到,list",list,id)
}