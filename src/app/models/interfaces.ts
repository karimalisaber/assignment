import { ActionTypes } from "../app.component";

export interface UserDTO{
    controler?: string,
    placeholder?: string,
    value?: any,
    type?: ActionTypes,
    options?: UserOptions[]
}

interface UserOptions{  
    id?: number,
    name?: string,
    controler?: string,
    placeholder?: string,
    value?: any
}