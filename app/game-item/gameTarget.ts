export class GameTarget {
    apiPath: string;
    background: string;
    open: boolean;

    constructor(
        background: string,
        apiPath: string,
        open: boolean = false,
    ) {
        this.background = background;
        this.apiPath = apiPath;
        this.open = open;
    }
}
