import { registration } from "../../server/controllers/userController"
import { Clothes } from "../../server/models/models"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import ClothesPage from "./pages/ClothesPage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, CLOTHES_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: CLOTHES_ROUTE + '/:id',
        Component: ClothesPage
    }
]

