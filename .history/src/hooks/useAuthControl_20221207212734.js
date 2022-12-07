export const useAuthControl = ()=>{
  const auth = sessionStorage.getItem("secretKey")
  if(auth){
    return true

  } else{
    return false
  }

}