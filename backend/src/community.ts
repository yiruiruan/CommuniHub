class Community {
    static counter = 0;

    name: number;
    id: number;
    startTime: string;
    endTime: string;
    typeOfWork: string;
    numNeeded: number;
    constructor(na: number, time: string, etime: string, type: string, num: number) {
        this.name = na;
        this.id = Community.counter++;
        this.startTime = time;
        this.endTime = etime;
        this.typeOfWork = type;
        this.numNeeded = num;
    }
    
 }  