export interface ApiInterface {
    path: string;
    get(filter?: any);
    show(userName: string);
}
