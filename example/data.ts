import { Data } from '../src/type'

const exampleData: Data = {
    id: 'root',
    topic: 'Mind Map',
    root: true,
    children: [
        {
            topic: '什么是 Minde Map',
            id: 'bd4313fbac40284b',
            expanded: true,
            children: [
                {
                    topic: '一个思维导图内核',
                    id: 'beeb823afd6d2114',
                },
                {
                    topic: '免费',
                    id: 'c1f068377de9f3a0',
                },
                {
                    topic: '即将开源',
                    id: 'c1f06d38a09f23ca',
                },
                {
                    topic: '无框架依赖',
                    id: 'c1f06e4cbcf16463',
                    expanded: true,
                    children: [],
                },
                {
                    topic: '两步轻松接入已有项目',
                    id: 'c1f1f11a7fbf7550',
                    children: [
                        {
                            topic: "import MindMap from 'mind-Map'",
                            id: 'c1f1e245b0a89f9b',
                        },
                        {
                            topic: 'new MindMap({...}).init()',
                            id: 'c1f1ebc7072c8928',
                        },
                    ],
                },
                {
                    topic: '使用简单',
                    id: 'c1f0723c07b408d7',
                    expanded: true,
                    children: [
                        {
                            topic: '操作手感类似其他主流思维导图应用',
                            id: 'c1f09612fd89920d',
                        },
                    ],
                },
            ],
        },
        {
            topic: '基本操作',
            id: 'bd1b66c4b56754d9',
            expanded: true,
            children: [
                {
                    topic: 'tab 新建子节点',
                    id: 'bd1b6892bcab126a',
                },
                {
                    topic: 'enter 新建同级节点',
                    id: 'bd1b6b632a434b27',
                },
                {
                    topic: 'del 删除节点',
                    id: 'bd1b983085187c0a',
                },
            ],
        },
        {
            topic: '专注',
            id: 'bd1b9b94a9a7a913',
            expanded: true,
            children: [
                {
                    topic: '点击右键，专注模式',
                    id: 'bd1bb2ac4bbab458',
                },
                {
                    topic: '需要取消专注时同样通过右键菜单，点击取消专注',
                    id: 'bd1bb4b14d6697c3',
                },
            ],
        },
        {
            topic: '左侧菜单',
            id: 'bd1b9d1816ede134',
            expanded: true,
            children: [
                {
                    topic: '选择节点分布方式',
                    id: 'bd1ba11e620c3c1a',
                    expanded: true,
                    children: [
                        {
                            topic: '左侧分布',
                            id: 'bd1c1cb51e6745d3',
                        },
                        {
                            topic: '右侧分布',
                            id: 'bd1c1e12fd603ff6',
                        },
                        {
                            topic: '左右分布',
                            id: 'bd1c1f03def5c97b',
                        },
                    ],
                },
            ],
        },
        {
            topic: '下方菜单',
            id: 'bd1ba66996df4ba4',
            expanded: true,
            children: [
                {
                    topic: '全屏',
                    id: 'bd1ba81d9bc95a7e',
                },
                {
                    topic: '定位到中点',
                    id: 'bd1babdd5c18a7a2',
                },
                {
                    topic: '画布缩小',
                    id: 'bd1bae68e0ab186e',
                },
                {
                    topic: '画布放大',
                    id: 'bd1bb06377439977',
                },
            ],
        },
        {
            topic: '节点连接',
            id: 'bd1beff607711025',
            expanded: true,
            children: [
                {
                    topic: '点击右键菜单——连接',
                    id: 'bd1bf320da90046a',
                },
                {
                    topic: '然后直接点击连接目标',
                    id: 'bd1bf6f94ff2e642',
                },
                {
                    topic: '可以通过贝塞尔曲线控制点修改连线弧度',
                    id: 'bd1c0c4a487bd036',
                },
            ],
        },
        {
            topic: '节点样式修改',
            id: 'bd1c217f9d0b20bd',
            expanded: true,
            children: [
                {
                    topic: '字体大小',
                    id: 'bd1c24420cd2c2f5',
                },
                {
                    topic: '字体颜色',
                    id: 'bd1c2a59b9a2739c',
                },
                {
                    topic: '背景颜色',
                    id: 'bd1c2de33f057eb4',
                },
                {
                    topic: '添加标签',
                    id: 'bd1cff58364436d0',

                },
                {
                    topic: '添加图标',
                    id: 'bd1d0317f7e8a61a',
                },
                {
                    topic: '文字加粗',
                    id: 'bd41fd4ca32322a4',
                },
            ],
        },
        {
            topic: '节点拖拽',
            id: 'bd1f03fee1f63bc6',
            expanded: true,
            children: [
                {
                    topic: '将一个节点拖拽到另一个节点，会成为另一个节点的子节点',
                    id: 'bd1f07c598e729dc',
                },
            ],
        },
        {
            topic: '未来功能',
            id: 'bd1facea32a1967c',
            expanded: true,
            children: [
                {
                    topic: '节点插入图片',
                    id: 'bd1fb1ec53010749',
                },
                {
                    topic: '自由节点',
                    id: 'bd42d3e3bee992b9',
                },
                {
                    topic: '样式优化',
                    id: 'beeb7f3db6ad6496',
                },
            ],
        },
        {
            topic: '导出数据',
            id: 'beeb7586973430db',
            expanded: true,
            children: [
                {
                    topic: 'JSON',
                    id: 'beeb784cc189375f',
                },
                {
                    topic: 'HTML',
                    id: 'beeb7a6bec2d68f5',
                },
            ],
        },
        {
            topic: '注意',
            id: 'bd42dad21aaf6bae',
            expanded: true,
            children: [
                {
                    topic: '暂时只能手动保存',
                    id: 'bd42e1d0163ebf04',
                    expanded: true,
                    children: [
                        {
                            topic: '点击右上角保存',
                            id: 'bd42e619051878b3',
                            expanded: true,
                            children: [],
                        },
                        {
                            topic: 'ctrl + S 保存',
                            id: 'bd42e97d7ac35e99',
                        },
                    ],
                },
            ],
        },
    ],
    expanded: true,
}


export default exampleData