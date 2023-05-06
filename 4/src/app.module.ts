import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '1',
      database: 'postgres',
      entities: ['entities.ts'],
      migrations: ['migrations'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
