import { Injectable } from '@angular/core';

@Injectable()
export class AuthtestService {

  constructor() { }
  loginWithCredentials(username: string, password: string): boolean {
  	if(username == 'wangpeng')
  		return true;

  	return false;
  }
}
