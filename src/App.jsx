import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom" 
import "./style.scss"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Buses from "./pages/Buses"
import Serves from "./pages/Serves"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="buses" element={<Buses />} />
      <Route path="serves" element={<Serves />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App