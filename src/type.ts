export interface Data {
    id: string,
    topic: string,
    root?: boolean,
    children?: Array<Data>,
    expanded?: boolean
}

export interface Config {
    data: Data,
    direction?: 'LEFT' | 'RIGHT' | 'CENTER',
    renderItem?: (node: HTMLElement) => void
}

export interface CanvasSize {
    width: number;
    height: number
}