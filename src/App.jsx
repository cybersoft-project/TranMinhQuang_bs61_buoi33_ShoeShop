import './index.css'
import Ex_ShoeShop from "./Ex_ShoeShop/Ex_ShoeShop";
import { Routes, Route, useRoutes} from "react-router-dom";

// import DemoBootstrap from "./demoBootstrap/DemoBootstrap";

function App() {
  const route = useRoutes([  //chỉ có ở v6
    // //Route chưa HomeTemplate
    // {
    //   path: "/",
    //   element: <HomeTemplate />,
    //   children: [
    //     {
    //       element: <Ex_LifeCycle/>,
    //       index: true,
    //     },
    //     {
    //       element: <Ex_ShoeShop />,
    //       path: '/shoe-shop'
    //     }
    //   ]
    // },
    // {
    //   path: '*',
    //   element: <NotFound />
    // }
    {
      path: "/",
      element: <Ex_ShoeShop />,
    }
  ]); 

  return route
    // <Ex_ShoeShop/>
  // <Ex_Redux />
  // <Routes>
    {/* <Route path="/redux" element={<Ex_Redux/>}/>
    <Route path="/" element={<Ex_ReactRouter />}></Route> 
    <Route path="/shoe-detail/:id" element={<Ex_ShoeShop />}></Route> */}
    {/* <Route path="/" element={<HomeTemplate />}>
      <Route element={<Ex_Redux/>} index/>
      <Route element={<Ex_ShoeShop/>} path="/shoe-shop"/>
  
    </Route>
    <Route path="*" element={<NotFound />}></Route>
  </Routes> */}

}

export default App;
