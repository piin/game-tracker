
import { ApiInterface } from './../../APIHandlers/api-interface';
import { ForniteAPI } from '../../APIHandlers/forniteAPI';
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
