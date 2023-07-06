import { Route, Routes } from "react-router-dom"
import { Product } from "./pages/Product"
import { About } from "./pages/About"
import { Blog } from "./pages/Blog"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Post } from "./pages/Post"
import { Products } from "./pages/Products"
import { News } from "./pages/News"

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path ="/blog/:name" element={<Post />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/products/:id" element={<Product />}/>
            <Route path="/news" element={<News />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}