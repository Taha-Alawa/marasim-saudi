import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom" 
import "./style.scss"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Serves from "./pages/Serves"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="serves" element={<Serves />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App