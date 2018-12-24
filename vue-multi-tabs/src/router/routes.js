/**
 * @param isTabView 是否放入TabView
 */
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/home.vue'),
  },
// {
//	path:'/nostrategy',
//	name: 'nostrategy',
//  component: () => import('@/pages/mystrategy/noDetail/noDetail.vue')
//},
{
	path:'/mystrategy',
	name: 'mystrategy',
    component: () => import('@/pages/mystrategy/mystrategy.vue'),
    children:[
//  	{
//  		path:'strategy/:strId',
//  		name:'strategyDetail',
//  		component: () => import('@/pages/mystrategy/goodDetail/goodDetail.vue')
//  	}
    ]
},
   {
  	path:'/society',
  	name: 'society',
    component: () => import('@/pages/society/society.vue'),
    children:[
    ]
  }
]
