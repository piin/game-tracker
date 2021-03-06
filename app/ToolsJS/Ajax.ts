
import { Helpers } from './Helpers';
export class Ajax extends Helpers {
    async fetchData(path, parameters = {}, method = 'get', headers: any = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }) {
        parameters = this.objectToSerialize(parameters);
        const args = {
            headers,
            body: null,
            method
        };
        if (method.toLowerCase() === 'get') {
            path += '?' + parameters;
            parameters = '';
        } else {
            args.body = parameters;
        }
        args.method = method;
        const data = await fetch(path, args);
        const result = await data.text();
        try {
            return JSON.parse(result);
        } catch (e) {
            document.write(result);
        }

    }
}
