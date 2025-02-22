export interface ITodosInfo {
    userId: number,
    id: number,
    title: string,
    complete: boolean
}

export interface ITodos {
    [key: number]: ITodosInfo
}