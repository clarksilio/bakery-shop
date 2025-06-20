export enum Paths {
    HOME = '/',
    ORDERS = 'orders',
    PRODUCTS = 'products',
    CART = 'cart',
    CUSTOMERS = 'customers',
    BREAD = 'bread',
    DAIRY = 'dairy',
    ERRORPAGE = 'error',
    BACK = 'home'
}

export type RouteType = {
    path: Paths;
    title: string;
}