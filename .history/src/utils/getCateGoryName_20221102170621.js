
export const getCateGoryName = (list,id)=>{
  console.log("接收到,id",list,id)
  // if(!list.length) 
  if(list.length && id){
    const res = list?.filter(item=>item.detailId==id)
    // return 
  }else{
    return "数据异常"
  }
 
}

