import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom"
import Authorization from "../components/common/Authorization"
export default [
  { path: "/", element: <Suspense fallback={<p></p>}><Authorization><Navigate to="welcome" /></Authorization></Suspense> },
  { path: "/small/shop/statistics", element: LazyLoad("welcome") },
  { path: "/user", element: LazyLoad("user") },
  { path: "/swiper", element: LazyLoad("swiper") },
  { path: "/details", element: LazyLoad("details") },
  { path: "/category", element: LazyLoad("category") },
  { path: "/shop", element: LazyLoad("shop") },
  { path: "/editor", element: LazyLoad("editor") },
  { path: "/order", element: LazyLoad("order") },
  { path: "/login", element: LazyLoad("login", false) },
]


function LazyLoad(path, isAuth = true) {
  const Component = lazy(() => import(`../views/${path}`))
  return (

    <Suspense fallback={<p></p>}>
      {isAuth ?
        <Authorization><Component /></Authorization>
        : <Component />}
    </Suspense>

  )
}
