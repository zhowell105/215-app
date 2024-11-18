import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  isHandsetPortrait$: Observable<boolean>;
  isHandsetLandscape$: Observable<boolean>;
  notAHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) { 
    
    this.isHandsetPortrait$ = this.breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe (map((result)=> result.matches));

    this.isHandsetLandscape$ = this.breakpointObserver.observe(Breakpoints.HandsetLandscape).pipe(map((result) => result.matches));

    this.notAHandset$ = this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape]).pipe(map((result) => !result.matches));}
 
}


