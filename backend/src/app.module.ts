import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { Volunteer } from './volunteer.entity';
import { Community } from './community.entity';
import { Assignment } from './assignment.entity';

// Repositories
import { VolunteerRepository } from './volunteer.service';
import { CommunityRepository} from './community.service';
import { AssignmentRepository } from './assignment.service ';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: "mongodb+srv://hanna:ConUhax5@conuhaxv-gixpp.gcp.mongodb.net/test?retryWrites=true&w=majority",
      entities: [Volunteer, Community, Assignment],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([VolunteerRepository, CommunityRepository, AssignmentRepository])
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
