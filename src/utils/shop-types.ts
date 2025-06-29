import {Paths} from "./paths.ts";

export enum Roles{
    ALL, USER, ADMIN, NO_AUTH, NO_ADMIN
}
export type RouteType = {
    path: Paths,
    title: string | (() => string),
    role?: Roles
}

export type LoginData = {
    email:string,
    password:string,
    name?: string,
    lastName?: string,
}

export type SignupData = {
    firstName: string,
    lastName:string,
    email:string,
    password:string
}

export type ProductType = {
    id?: string,
    title: string,
    category: string,
    unit: string,
    price: number,
    image: string,
}

export type Category = {
    category_name:string
}