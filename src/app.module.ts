import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PilaresModule } from './modules/pilares/pilares.module';
import { CompetenciasModule } from './modules/competencias/competencias.module';
import { HabilidadesModule } from './modules/habilidades/habilidades.module';
import { AvaliacaoModule } from './modules/avaliacao/avaliacao.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PilaresModule,
    CompetenciasModule,
    HabilidadesModule,
    AvaliacaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
