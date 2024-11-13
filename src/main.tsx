import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ProductDeskription from './component/ProductDeskription'

const router = createBrowserRouter ([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/product/:id",
    element: <ProductDeskription />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
