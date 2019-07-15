export default [
    {
        path: '/group',
        name: 'group',
        component: require('@/pages/group').default,
        redirect: '/group/list',
        children: [
            {
                path: 'list',
                name: 'groupList',
                component: require('@/pages/group/list').default,
            },
            {
                path: 'add',
                name: 'groupAdd',
                component: require('@/pages/group/create').default,
            },
            {
                path: 'edit',
                name: 'groupEdit',
                component: require('@/pages/group/edit').default,
                redirect:'edit/info',
                children: [
                    {
                        path: 'info',
                        name: 'groupInfo',
                        component: require('@/pages/group/create').default,
                    },
                    {
                        path: 'member',
                        name: 'groupMember',
                        component: require('@/pages/group/member').default,
                    },
                    {
                        path: 'dismiss',
                        name: 'groupDismiss',
                        component: require('@/pages/group/dismiss').default,
                    },
                    {
                        path: '*',
                        name: '',
                        redirect:'dismiss'
                    },
                ]
            },

            {
                path: 'report',
                name: 'groupReport',
                component: require('@/pages/group/report').default,
            },
            {
                path: '*',
                name: 'none',
                redirect: 'list'
            }
        ]
    }
]