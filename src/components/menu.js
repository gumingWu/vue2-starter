export default [
    {
        path: '/aaa',
        meta: {
            title: '模块A'
        }
    },
    {
        path: '/bbb',
        meta: {
            title: '模块B'
        },
        canRoute: true,
        children: [
            {
                path: '/bbbb',
                meta: {
                    title: '模块B子菜单'
                }
            }
        ]
    },
    {
        path: '/ccc',
        meta: {
            title: '模块C'
        },
        children: [
            {
                path: '/cccc1',
                meta: {
                    title: '模块C子菜单1'
                }
            },
            {
                path: '/cccc2',
                meta: {
                    title: '模块C子菜单2'
                }
            }
        ]
    }
]