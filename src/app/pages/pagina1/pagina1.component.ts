import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy{
  
  nombre: string = 'Gabriela';
  segundos: number = 0;
  timerSubscription : Subscription;

  constructor() { 
    console.log('Constructor Pagina1');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Pagina1');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Pagina1');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Pagina1');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Pagina1');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Pagina1');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Pagina1');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Pagina1');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }

  ngOnInit(): void {
    console.log('ngOnInit Pagina1');
    this.timerSubscription = interval(1000).subscribe(i => {
      this.segundos = i
    })
  }

  guardar() {
    
  }
}
