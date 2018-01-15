const config = {
    container: {
        type: 'container',
        name: '容器',
        children: [
            []
        ]
    },
    text: {
        type: 'vText',
        name: '文本',
        data: {
            value: '这是一段文本',
            styles: {
                'font-size': '14px',
                'color': '#ddd',
            },
        },
    },
    image: {
        type: 'vImage',
        data: {
            value: '',
            styles: {
                'max-width: 100%',
            },
        },
    },
    link: {
        type: 'vLink',
        data: {
            value: '',
            target: 'self',
        },
    },
    button: {
        type: 'vButton',
        name: '按钮',
        block: 'inline-block',
        data: {
            value: 'Button',
            styles: {
                'font-size': '12px',
                'text-align': 'center',
            },
        }
    },
}


function deepClone(data) {
    return JSON.parse(JSON.stringify(data))
}

// 获取组件默认数据
export default function getComponentData(type) {
    let data = config[type]
    if(!data)return null
    return deepClone(config[type])
}