

export interface IPosts {
    posts: posts[]
}

export interface posts {
    id:number,
    title:string,
    description: string
}
export const initialState:IPosts = {
    posts: [
        
    ]
}