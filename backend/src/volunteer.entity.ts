import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class Volunteer {
    @ObjectIdColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    date: string;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

    @Column()
    typeOfWork: string[];
    
    // createVEvent() {
    //     let json = JSON.stringify(this)
    //     //db.userDB.insert(json)
    // }
    // static getDataByName(name: String) {
    //     //  var data = db.names.find( {"name": "+name+"});
    // }
 }