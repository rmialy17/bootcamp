import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post()
  create(): string {
    return 'This action adds a new auth';
  }

  @Get()
  findAll(): string {
    return 'This action returns all auth';
  }
}
