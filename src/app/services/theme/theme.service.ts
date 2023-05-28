import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly THEME_KEY = 'appTheme';
  private toggleStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggleState$: Observable<boolean> = this.toggleStateSubject.asObservable();
  private currentModeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('light');

  constructor() { }

  getCurrentMode(): Observable<string> {
    return this.currentModeSubject.asObservable();
  }

  toggleMode(currentMode) {
    // const currentMode2 = this.currentModeSubject.value;
    console.log(currentMode)
    const newMode = currentMode === 'light-theme' ? 'dark-theme' : 'light-theme';
    console.log(newMode)
    this.currentModeSubject.next(newMode);
  }
}
