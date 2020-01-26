// db = connect('127.0.0.1:27017/userDB');


export class Community {
    static counter = 0;

    name: string;
    id: number;
    date: string;
    startTime: string;
    endTime: string;
    typeOfWork: string;
    numNeeded: number;
    numOfWorker: number;
    constructor(jsonFile: string) {
        let obj = JSON.parse(jsonFile);
        this.date = obj.string;
        this.name = obj.name;
        this.startTime = obj.startTime;
        this.endTime = obj.endTime;
        this.typeOfWork = obj.typeOfWork;
        this.numNeeded = obj.numNeeded;
        this.createEvent(this.numNeeded);
    }

    createEvent(workNum: number) {
        for (var count = 0;count < workNum;count++) {
            this.setID();
            var json = JSON.stringify(this);
            //db.userDB.insert(json)

        }

    }
   setID() {
    this.id = Community.counter++;
   }
        
    }
    
