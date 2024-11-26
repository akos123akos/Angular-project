import {Injectable, Inject, InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WindowToken', {
  providedIn: 'root',
  factory: () => window
});

const TOKEN = 'SESSION_TOKEN'; // Use this constant for the session storage entry key


@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject(WINDOW) private window: Window){}

  setToken(token: string ): void{
    this.window.sessionStorage.setItem(TOKEN, token)
    
  }

  getToken(): string | null{
    return this.window.sessionStorage.getItem(TOKEN)
    
  }

  deleteToken(): void{
    this.window.sessionStorage.removeItem(TOKEN)
    
  }
}
