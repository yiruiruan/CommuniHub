// db = connect('127.0.0.1:27017/userDB');


export class Volunteer {
    static counter = 0;
    name: number;
    email: string;
    id: number;
    startTime: string;
    endTime: string;
    typeOfWork: string[];
    date: string;
    constructor(event: string) {
        let obj = JSON.parse(event);
        this.email = obj.email;
        this.name = obj.name;
        this.id = Volunteer.counter++;
        this.startTime = obj.startTime;
        this.endTime = obj.endTime;
        this.typeOfWork = obj.typeOfWork;
        this.date = obj.date;
        this.createVEvent();
    }
    
    createVEvent() {
        let json = JSON.stringify(this)
        //db.userDB.insert(json)
    }
    static getDataByName(name: String) {
        //  var data = db.names.find( {"name": "+name+"});
    }
 }