import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AuthController],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
