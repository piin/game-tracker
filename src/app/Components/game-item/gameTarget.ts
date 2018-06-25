
import { ApiInterface } from './../../APIHandlers/api-interface';
export class GameTarget {
    API: ApiInterface;
    background: string;
    open: boolean;

    constructor(
        background: string,
        API: ApiInterface,
        open: boolean = false,
    ) {
        this.background = background;
        this.API = API;
        this.open = open;
    }
}
