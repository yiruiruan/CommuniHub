import { Volunteer } from "./volunteer.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Volunteer)
export class VolunteerRepository extends Repository<Volunteer> {}
