
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Product', component: () => import('pages/Product.vue') },
      { path: '/Sold', component: () => import('pages/Sold.vue') },
      { path: '/Buy', component: () => import('pages/Buy.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
