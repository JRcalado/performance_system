import { Module } from '@nestjs/common';
import { PilaresService } from './services/pilares.service';
import { PilarController } from './controllers/pilares.controller';
import { Pilar } from './entities/pilar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pilar])],
  providers: [PilaresService],
  controllers: [PilarController],
})
export class PilaresModule {}
