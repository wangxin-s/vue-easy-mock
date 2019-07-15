export default [
    {
        path:'/creator',
        name:'creator',
        component: require('@/pages/creator').default,
        redirect:'/creator/home',
        children:[
            {
                path: 'home',
                name: 'creatorHome',
                component: require('@/pages/creator/home').default
            },
            {
                path: 'create',
                name: 'creatorCreate',
                component: require('@/pages/creator/create').default,
                redirect:'/creator/create/microClass',
                children:[
                    {
                        path:'microClass',
                        name:'micro',
                        meta:{type:'micro'}
                    },
                    {
                        path:'xapi',
                        name:'xapi',
                        meta:{type:'xapi'}
                    },
                    {
                        path:'html',
                        name:'html',
                        meta:{type:'html'}
                    }
                ]
            },
            {
                path: 'plan',
                name: 'creatorPlan',
                component: require('@/pages/creator/plan').default
            }
        ]
    }
]