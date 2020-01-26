import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { Volunteer } from './volunteer.entity';
import { Community } from './community.entity';

// Repositories
import { VolunteerRepository } from './volunteer.service';
import { CommunityRepository} from './community.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/userDB',
      entities: [Volunteer, Community],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([VolunteerRepository, CommunityRepository])
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
