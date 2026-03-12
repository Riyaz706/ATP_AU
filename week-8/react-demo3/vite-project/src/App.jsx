import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "../components/RootLayout"
import Home from "../components/Home"
import ProductList from "../components/ProductList"
import ContactUs from "../components/ContactUs"
import Product from "../components/Product"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/products",
                    element: <ProductList />
                },
                {
                    path: "/contact",
                    element: <ContactUs />
                },
                {
                    path: "/product-details",
                    element: <Product />
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )


}

export default App
