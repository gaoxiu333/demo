import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsCOntroller } from './cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsCOntroller],
  providers: [AppService],
})
export class AppModule {}
