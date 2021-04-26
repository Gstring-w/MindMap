import { mapOptionsInit } from '../const'
import { Data } from '../type'

const $d = document
const mOI = mapOptionsInit

function createTopic(data: Data): HTMLElement {
    const tpc = $d.createElement('tpc')
    tpc.innerText = data.topic
    tpc.dataset.nodeid = data.id
    // @ts-ignore
    tpc.nodeObj = data
    return tpc
}

function createChildren() { }

/**
 * 渲染dom
 * @param node
 * @param node.nodeObj 
 */
export function renderItem(node: HTMLElement) { }

export function layout() {
    console.time('layout')

    const data = this.config.data;
    if (!data) return

    const tpc = createTopic(data)
    tpc.draggable = mOI.draggable
    renderItem(tpc)

    const children = data.children

    if (children && children.length !== 0) {

    }

    console.timeEnd('layout')
}