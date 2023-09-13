import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/views/MainPage/index.vue";
import Category from "@/views/Categories/Details/index.vue"
import Products from "@/views/Products/Details/index.vue";
import AboutPage from "@/views/About/index.vue";
import ContactsPage from "@/views/Contacts/index.vue";
import NewsPage from "@/views/News/index.vue";
import SubCategory from "@/views/Categories/SubCategory/index.vue";
import Cart from "@/views/Cart/index.vue";
import Admin from "@/views/Admin/index.vue";
import AdminProducts from "@/views/Admin/Products/index.vue"
import AdminCategories from "@/views/Admin/Categories/index.vue"
import AdminOrders from "@/views/Admin/Orders/index.vue"

const router = createRouter({
    history: createWebHistory(), routes: [{
        path: "/", name: "MainPage", component: MainPage
    }, {
        path: "/about", name: "AboutPage", component: AboutPage
    }, {
        path: "/contacts", name: "ContactsPage", component: ContactsPage
    }, {
        path: "/news", name: "NewsPage", component: NewsPage
    }, {
        path: "/categories/:cat_id", name: "Category", component: Category, children: [{
            path: "subcategory/:sub_id", name: "SubCategory", component: SubCategory
        }]
    }, {
        path: "/products/:prod_id", name: "Product", component: Products,
    }, {
        path: "/cart", name: "Cart", component: Cart,
    }, {
        path: "/admin", name: "AdminPage", meta: {requiresAuth: true}, component: Admin, children: [{
            path: "products", name: "AdminProducts", meta: {requiresAuth: true}, component: AdminProducts
        }, {
            path: "categories", name: "AdminCategories", meta: {requiresAuth: true}, component: AdminCategories
        }, {
            path: "orders", name: "AdminOrders", meta: {requiresAuth: true}, component: AdminOrders
        }]
    }],
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    const isAuthenticated = localStorage.getItem("token");
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next("/");
        } else {
            next();
        }
    } else {
        next();
    }
});


export default router;