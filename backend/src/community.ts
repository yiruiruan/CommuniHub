class Community {
    static counter = 0;

    name: string;
    id: number;
    date: string;
    startTime: string;
    endTime: string;
    typeOfWork: string;
    numNeeded: number;
    constructor(na: string, da: string, time: string, etime: string, type: string, num: number) {
        this.name = na;
        this.id = Community.counter++;
        this.date = da;
        this.startTime = time;
        this.endTime = etime;
        this.typeOfWork = type;
        this.numNeeded = num;
    }
    
 }  