import { Ajax } from './../ToolsJS/Ajax';
import { ApiInterface } from './api-interface';

export class ForniteAPI extends Ajax implements ApiInterface {
    public path: string;
    constructor() {
        super();
        this.path = 'https://api.fortnitetracker.com/v1/profile';
    }
    get(filter: object) {}
    show(userName: string) {
        const path = this.path + '/pc/' + userName;
        return this.fetchData(path, {}, 'get', {
            'TRN-Api-Key': 'censurado',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Rigor API Tester'
        });
    }
}
