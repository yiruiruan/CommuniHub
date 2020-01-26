import { Controller, Get, Post, Body } from '@nestjs/common';
import { VolunteerRepository } from './volunteer.service';
import { Volunteer } from './volunteer.entity';

@Controller()
export class AppController {
  constructor(
    private volunteerRepo: VolunteerRepository
  ) {}

  @Post('/users')
  createUsers(@Body() body: Object) {
    const user = this.volunteerRepo.create(body);

    console.log(body);
  }

  @Get('/')
  async getHello(): Promise<Volunteer> {
    let volunteer = this.volunteerRepo.create({
      email: 'l.lam@sap.com'
    });
    
    return await this.volunteerRepo.save(volunteer);;
  }

  @Get('/volunteer')
  async getVolunteer(): Promise<Volunteer> {
    const volunteer = await this.volunteerRepo.findOne({
      email: 'l.lam@sap.com'
    });

    return volunteer;
  }
}
