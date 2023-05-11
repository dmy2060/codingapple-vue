import { createWebHistory, createRouter } from "vue-router";
// 뷰 컴포넌트 임폴트 해와서 적어주면 됨
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Author from './components/Author.vue'

const routes = [
    {
        path:"/",
        component: Home,
        
    },
    {
        path:"/list",
        component: List,
    },
    {
        path:"/Detail/:id",
        component: Detail,
        children: [
            {
              path:"author",
              component: Author
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;