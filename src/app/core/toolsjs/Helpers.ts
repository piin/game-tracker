export class Helpers {
    objectToSerialize(param) {
        const keys = Object.keys(param),
            values = [];
        // tslint:disable-next-line:forin
        for (const k in keys) {
            const value = (typeof (param[keys[k]]) === 'object' && Array.isArray(param[keys[k]]) === false)
            ? JSON.stringify(param[keys[k]]) : param[keys[k]];
            values.push(keys[k] + '=' + value);
        }
        return values.join('&');

    }
    inputsToObject(dom) {
        const inputs = dom.querySelectorAll('input,select,textarea');
        let pos = 0;
        const content = {};
        for (pos; pos < inputs.length; ++pos) {
            if (!inputs[pos].checkValidity()) {
                return false;
            }
            const input = inputs[pos];
            let value;
            if (input.name === '') {
                continue;
            }
            if (input.type === 'file') {
                value = input.files;
            } else if (input.type === 'checkbox') {
                value = input.checked;
            } else if (input.type === 'radio' ) {
                if (input.checked === false) {
                    continue;
                }
                value = input.value;
            } else {
                if (input.value === '') {
                    continue;
                }
                value = input.value.replace(/,/, '.');
                value = encodeURIComponent(value);
            }
            if (input === undefined || typeof (input) !== 'object') {
                continue;
            }
            if (!inputs[pos].checkValidity()) {
                return false;
            }
            if (content[input.name] === undefined) {
                content[input.name] = value;
            } else if (typeof (content[input.name]) === 'object') {
                content[input.name].push(value);
            } else {
                const val = content[input.name];
                content[input.name] = [];
                content[input.name].push(val);
                content[input.name].push(value);
            }
        }
        return content;
    }
    error (msg) {
        document.body.innerHTML = msg.responseText;
        throw msg;
    }
    removeBySelector (selector) {
        const killList = document.querySelectorAll(selector);
        let pos = 0;
        for (pos; pos < killList.length; ++pos) {
            const killItem = killList[pos];
            killItem.parentElement.removeChild(killItem);
        }
    }
    findInArrayOfObjects(arrg, key, value) {
        // tslint:disable-next-line:forin
        for (const index in arrg) {
            const item = arrg[index];
            if (item[key] === value) {
                return item;
            }
        }
    }
    fileTo64(file) {
        const reader = new FileReader ();
        reader.readAsDataURL(file);
        return new Promise((load, reject) => {
            reader.onload = load;
            reader.onerror = reject;
        });
    }
    async fileToImage(file, dom) {
        const loadedFile: any = await this.fileTo64(file);
        const img = document.createElement('img');
        if (loadedFile.hasOwnProperty('target')) {
            img.src = loadedFile.target.result;
        }
        return new Promise((load, reject) => {
            const data = {
                img,
                file
            };
            load(data);
        });
    }
    getBodyToken() {
        return document.querySelector ('meta[name="csrf-token"]').getAttribute('content');
    }
    merge(...objs) {
        const finalObject = {};
        // tslint:disable-next-line:forin
        for (const index in objs) {
            const obj = objs[index];
            for (const keys in obj) {
                if (obj[keys] !== '') {
                    finalObject[keys] = obj[keys];
                }
            }
        }
        return finalObject;
    }
    searchAndDestroy(args, key, value) {
        const filter = args.filter ((item, index) => {
            return item[key] !== value;

        });
        return filter;
    }
    searchAndInsert(args, where, val, key, insert) {
        return args.map((item, index) => {
            if (item[where] === val) {
                item[key] = insert;
            }
            return item;
        });
    }
    searchByKey(args, key, value) {
        const filter = args.filter ((item, index) => {
            return item[key] === value;

        });
        return filter;
    }
    searchInObject(args, query) {
        return args.filter ((item, index) => {
            for (const key in item) {
                if (item[key] == null) {
                    continue;
                }
                const data = item[key].toString();
                const regQuery = RegExp(query, 'i');
                const match = data.match(regQuery);
                if (match != null) {
                    return true;
                }
            }
            return false;
        });
    }
    getObjectTitles(obj) {
        const result: any[] = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result.push({key});
            }
        }
        return result;
    }
    flatMultilevel(multiLevelObject) {
        let flatObject = {};
        for (const key in multiLevelObject) {
            if (multiLevelObject.hasOwnProperty(key)) {
            const item = multiLevelObject[key];
            flatObject[key] = item;
            flatObject = this.merge(flatObject, item);
            }
        }
        return flatObject;
    }
    searchAndGetIndex(arr, key, query) {
        // tslint:disable-next-line:forin
        for (const index in arr) {
            const item = arr[index];
            if (item[key] === query) {
                return index;
            }
        }
    }
    searchCommonAndUpdate(contentID, newData, currentData) {
        const data = this.flatMultilevel(newData);
        const index = this.searchAndGetIndex(currentData, 'id', contentID);
        for (const key in data) {
            if (currentData[index][key] !== undefined) {
                currentData[index][key] = data[key];
            }
        }
        return currentData;
    }
    splitOnUpperCase(text) {
        text = text.split(/(?=[A-Z])/);
        return text.join(' ');
    }
    orderBy(data, by, direction: String= 'asc') {
        return data.sort((a, b) => {
            if (a[by] == null) {
                return 1;
            }
            if (b[by] == null) {
                return 1;
            }
            if (typeof a[by] !== 'number') {
                return (direction === 'asc') ?
                a[by].localeCompare(b[by]) : b[by].localeCompare(a[by]);
            }
            return (direction === 'asc' ) ? a[by] - b[by] : b[by] - a[by];
        });
    }
    dateToYears(fecha) {
        const now: any = new Date();
        const born: any = new Date(fecha);
        const diff = now - born;
        const age_dt = new Date(diff);
        return Math.abs(age_dt.getUTCFullYear () - 1970);
    }
}
