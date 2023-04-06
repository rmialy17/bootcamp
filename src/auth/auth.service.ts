
import { Injectable } from '@nestjs/common';
import { Auth } from './auth.interface';

@Injectable()
export class AuthService {
  private readonly auth: Auth[] = [];

  create(auth: Auth) {
    this.auth.push(auth);
  }

  findAll(): Auth[] {
    return this.auth;
  }
}
