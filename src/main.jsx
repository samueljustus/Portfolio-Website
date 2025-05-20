import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './component/HomePage.jsx'
import AboutPage from './page/AboutPage.jsx'
import PortfolioPage from './page/PortfolioPage.jsx'
import BlogPage from './page/BlogPage.jsx'
import Layout from './component/Layout.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      },
      {
        path: 'blogs',
        element: <BlogPage />
      },
      
    ]
  }
])

// {path: "/",
//   element: <HomePage />,
//   errorElement: <NotFoundPage />
// },
// {path: "/about",
//   element: <AboutPage />
// },
// {path: "/portfolio",
//   element: <PortfolioPage />
// },
// {path: "/blogs",
//   element: <BlogPage />
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)