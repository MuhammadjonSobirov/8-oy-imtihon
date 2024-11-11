import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Favorite from "./pages/favorite";
import Content from "./pages/content";
import Login from "./pages/login";
import Register from "./pages/register/insex";
import Profile from "./pages/profile";
import Post from "./pages/post";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="favorite" element={<Favorite/>} />
                    <Route path="content/:id" element={<Content />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile /> } />
                    <Route path="/post" element={<Post />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router