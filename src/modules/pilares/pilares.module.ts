import { Module } from '@nestjs/common';
import { PilaresService } from './pilares.service';
import { PilarController } from './pilares.controller';
import { Pilar } from './pilar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pilar])],
  providers: [PilaresService],
  controllers: [PilarController],
})
export class PilaresModule {}
