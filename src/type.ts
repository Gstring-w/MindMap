export interface Data{
    id:string,
    topic: string,
    root?: boolean,
    children?: Array<Data>
}

export interface Config{
    data: Data,
    direction?: 'LEFT' | 'RIGHT' | 'CENTER'
}

export interface CanvasSize{
    width:number;
    height:number
}