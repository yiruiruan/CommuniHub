class Volunteer {
    static counter = 0;
    name: string;
    id: number;
    date: string;
    startTime: string;
    endTime: string;
    typeOfWork: string[];
    constructor(na: string, da:string, time: string, etime: string, type: string) {
        this.name = na;
        this.id = Volunteer.counter++;
        this.date = da;
        this.startTime = time;
        this.endTime = etime;
        var str = type.split(" ");
        for (var i = 0; i < 3; i++) {
            this.typeOfWork[i] = str[i];
        }
    }
    addUser(str:string) {
        
    }
    
 }