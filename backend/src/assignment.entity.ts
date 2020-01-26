import { ObjectIdColumn, Column, Entity } from "typeorm";

@Entity()
export class Assignment {

    @ObjectIdColumn()
    id: number;

    @Column()
    eventID: string;

    @Column()
    userID: number;
    
}
    