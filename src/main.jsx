import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layouts/Root.jsx'
import UserDetails from './Components/UserDetails.jsx'
import UpdateUser from './Components/UpdateUser.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: App
      },
      {
        path: '/users/:id',
        Component: UserDetails,
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        hydrateFallbackElement: <p>Loading ....</p>
      },
      {
        path: '/update/:id',
        Component: UpdateUser,
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        hydrateFallbackElement: <p>Loading....</p>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
