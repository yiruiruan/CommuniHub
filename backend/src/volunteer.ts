class Volunteer {
    static counter = 0;
    name: number;
    id: number;
    startTime: string;
    endTime: string;
    typeOfWork: string[];
    constructor(na: number, time: string, etime: string, type: string[]) {
        this.name = na;
        this.id = Volunteer.counter++;
        this.startTime = time;
        this.endTime = etime;
        for (var i = 0; i < 3; i++) {
            this.typeOfWork[i] = type[i];
        }
    }
    
 }