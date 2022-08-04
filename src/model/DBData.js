
export default class DBData {
    /**
     * 
     * @param {string} id 
     */
    constructor() {
        this.id = "";
    }
}

export class DBUserData extends DBData{

    constructor () {
        super();
        this.uid = "";
    }
}