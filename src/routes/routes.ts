import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';

export const routes = [
    {
        path: "Login",
        page: Login,
        authorized: false,
    },
    {
        path: "/",
        page: Home,
        authorized: false,
    },
    {
        path: "/about",
        page: About,
        authorized: false,
    },
];