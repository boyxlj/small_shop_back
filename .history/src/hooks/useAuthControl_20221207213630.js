import { message } from "antd"
import {useState} from "react"
export const useAuthControl = ()=>{
  // const auth = sessionStorage.getItem("secretKey")
  const [auth] = useState(sessionStorage.getItem("secretKey"))

  if(auth=='small-shop-xlj'){
    return true
  } else{
    message("您没有权限操作")
    return false
  }
}

// export const useAuthControl = ()=>{
//   return true
// }