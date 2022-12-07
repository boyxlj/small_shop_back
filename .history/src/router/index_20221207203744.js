import { lazy,Suspense } from "react"
import {Navigate} from "react-router-dom"
import Authorization from "../components/common/Authorization"
// const Welcome = lazy(()=>import("../views/welcome"))
// const User = lazy(()=>import("../views/user"))
// const Swiper = lazy(()=>import("../views/swiper"))
// const Details = lazy(()=>import("../views/details"))
// const Category = lazy(()=>import("../views/category"))
// const Shop = lazy(()=>import("../views/shop"))
// const Editor = lazy(()=>import("../views/editor"))
// const Order = lazy(()=>import("../views/order"))
// const Login = lazy(()=>import("../views/login"))
export default [
  // {path:"/",element:<Suspense fallback={<p></p>}><Authorization><Navigate to="welcome" /></Authorization></Suspense>},
  // {path:"/welcome",element:<Suspense fallback={<p></p>}><Authorization><Welcome/></Authorization></Suspense>},
  // {path:"/user",element:<Suspense fallback={<p></p>}><Authorization><User/></Authorization></Suspense>},
  // {path:"/swiper",element:<Suspense fallback={<p></p>}><Authorization><Swiper/></Authorization></Suspense>},
  // {path:"/details",element:<Suspense fallback={<p></p>}><Authorization><Details/></Authorization></Suspense>},
  // {path:"/category",element:<Suspense fallback={<p></p>}><Authorization><Category/></Authorization></Suspense>},
  // {path:"/shop",element:<Suspense fallback={<p></p>}><Authorization><Shop/></Authorization></Suspense>},
  // {path:"/editor",element:<Suspense fallback={<p></p>}><Authorization><Editor/></Authorization></Suspense>},
  // {path:"/order",element:<Suspense fallback={<p></p>}><Authorization><Order/></Authorization></Suspense>},
  // {path:"/login",element:<Suspense fallback={<p></p>}><Login/></Suspense>},
  {path:"/",element:<Suspense fallback={<p></p>}><Authorization><Navigate to="welcome" /></Authorization></Suspense>},
  {path:"/welcome",element:LazyLoad("welcome")},
  {path:"/user",element:LazyLoad("user")},
  {path:"/swiper",element:LazyLoad("swiper")},
  {path:"/details",element:LazyLoad("details")},
  {path:"/category",element:LazyLoad("category")},
  {path:"/shop",element:LazyLoad("shop")},
  {path:"/editor",element:LazyLoad("editor")},
  {path:"/order",element:LazyLoad("order")},
  {path:"/login",element:LazyLoad("login",false)},
]


const  LazyLoad = (path,isAuth=true)=>{
  const Com = lazy(()=>import(`../../views/${path}`))
  return (
    isAuth?
    <Suspense fallback={<p></p>}>
      <Authorization>
        <Com/>
      </Authorization>
      </Suspense>
    :
    <Suspense fallback={<p></p>}><Com/></Suspense>
  )

}
