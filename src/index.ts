import { layout } from './render/index'
import { mapInitializationSize } from './const'
import { Config, CanvasSize } from './type'

import './index.less'

const $d = document

class MindMap {
    private container: HTMLElement
    private root: HTMLElement
    private config: Config
    private mapInitializationSize: CanvasSize = mapInitializationSize

    public layout = layout
    constructor(el: string, config: Config) {
        this.container = $d.querySelector(el)
        this.config = config
    }

    init() {
        if (this.container.childElementCount !== 0) {
            throw Error('el must be a empty dom!')
        }

        this.root = $d.createElement('root')
        const children = $d.createElement('children')


        this.container.appendChild(this.root)
        this.container.appendChild(children)


        this.layout()
    }
}

export default MindMap