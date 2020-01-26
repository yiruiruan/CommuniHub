import { ObjectIdColumn, Column, Entity } from "typeorm";

@Entity()
export class Assignment {

    @ObjectIdColumn()
    id: number;

    @Column()
    eventName: string;

    @Column()
    name: string;
    
}
    