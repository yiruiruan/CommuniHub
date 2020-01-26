import { Community } from "./community.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Community)
export class CommunityRepository extends Repository<Community> {}