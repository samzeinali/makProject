import { Route, Routes } from "react-router-dom"
import { Product } from "./pages/Product"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Products } from "./pages/Products"

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/products/:productName" element={<Product />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}