import { Assignment } from "./assignment.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Assignment)
export class AssignmentRepository extends Repository<Assignment> {}