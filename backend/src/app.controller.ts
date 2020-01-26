import { Controller, Get, Post, Body } from '@nestjs/common';
import { VolunteerRepository } from './volunteer.service';
import { Volunteer } from './volunteer.entity';
import { CommunityRepository } from './community.service';
import { AssignmentRepository } from './assignment.service ';

@Controller()
export class AppController {
  constructor(
    private volunteerRepo: VolunteerRepository,
    private communityRepo: CommunityRepository,
    private assignmentRepo: AssignmentRepository
  ) {}

  @Post('/community')
  async createCommunity(@Body() body: Object) {
    let community = this.communityRepo.create(body);
    community = await this.communityRepo.save(community);
    console.log(community);
  }

  @Post('/volunteer')
  async createVolunteer(@Body() body: Object) {
    let volunteer = this.volunteerRepo.create(body);
    return await this.volunteerRepo.save(volunteer);
  }

  @Post('/assignment')
  async createAssignment(@Body() body: Object) {
    const assignment = await this.assignmentRepo.create(body);
    return await this.volunteerRepo.save(assignment);
  }

  @Get('/community')
  async getCommunity(@Body() body: Object) {
    const community = await this.communityRepo.find({
      //need all events
      });

    return community;
  }

  @Get('/volunteer')
  async getVolunteer(@Body() body: Object) {
    const volunteer = await this.volunteerRepo.find({
      //not sure how but should get volunteers by userID
      userID: body.userID
    });

    return volunteer;
  }

  @Get('/assignment')
  async getAssignment(@Body() body: Object) {
    const assignment = await this.assignmentRepo.find({
      //not sure how but should get events by eventID
      eventID: body.eventID
    });

    return assignment;
  }
}
