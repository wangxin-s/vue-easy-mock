export default [
    {
        path: '/admin',
        name: 'admin',
        component: require('@/pages/admin').default,
        redirect: '/admin/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: require('@/pages/admin/dashboard').default,
            },
            {
                path: 'users',
                name: 'usersMain',
                component: require('@/pages/index/innerRouter').default,
                children: [
                    {
                        path: '/',
                        name: 'users',
                        component: require('@/pages/admin/users/index').default,
                    },
                    {
                        path: 'info',
                        name: 'usersInfo',
                        component: require('@/pages/admin/users/detail').default,
                    },
                ]
            },
            {
                path: 'custom',
                name: 'customMain',
                component: require('@/pages/index/innerRouter').default,
                children: [
                    {
                        path: '/',
                        name: 'custom',
                        component: require('@/pages/admin/custom/index').default,
                    },
                    {
                        path: 'create',
                        name: 'customCreate',
                        component: require('@/pages/admin/custom/create').default,
                    },
                    {
                        path: 'account',
                        name: 'customAccount',
                        component: require('@/pages/admin/custom/account').default,
                    },
                    {
                        path: 'apply',
                        name: 'customApply',
                        component: require('@/pages/admin/custom/apply').default,
                    },
                    {
                        path: 'authorizeType',
                        name: 'customAuthorizeType',
                        component: require('@/pages/admin/custom/authorizeType').default,
                    },
                    {
                        path: 'authorize',
                        name: 'customAuthorize',
                        component: require('@/pages/admin/custom/authorize').default,
                    },
                    {
                        path: 'authorizeList',
                        name: 'customAuthorizeList',
                        component: require('@/pages/admin/custom/authorizeList').default,
                    },
                    {
                        path: 'approve',
                        name: 'customApprove',
                        component: require('@/pages/admin/custom/approve').default,
                    },
                ]
            },
            {
                path: 'content',
                name: 'contentMain',
                component: require('@/pages/index/innerRouter').default,
                children: [
                    {
                        path: '/',
                        name: 'contentManagement',
                        component: require('@/pages/admin/content/index').default,
                    },
                    {
                        path: 'list',
                        name: 'contentList',
                        component: require('@/pages/admin/content/list').default,
                    },
                    {
                        path: 'detail',
                        name: 'contentDetail',
                        component: require('@/pages/admin/content/detail').default,
                    },
                ]
            },
            {
                path: 'operate',
                name: 'operate',
                component: require('@/pages/admin/operate').default,
            }
        ]
    }
]