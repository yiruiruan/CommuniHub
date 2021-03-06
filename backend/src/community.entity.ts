import { ObjectIdColumn, Column, Entity } from "typeorm";

@Entity()
export class Community {

    @ObjectIdColumn()
    id: number;

    @Column()
    eventName: string;

    @Column()
    date: string;

    @Column()
    startTime: string;
    
    @Column()
    endTime: string;

    @Column()
    typeOfWork: string;

    @Column()
    quorum: number;
    
}
    
