import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-18-practice';

  ngOnInit() {
    // const numbers = interval(1000);
    // numbers.subscribe((value) => {
    //   console.log('Subscriber: ' + value);
    // });
    interval(1000)
  .pipe(
    take(3),
    map(v => Date.now())
  )
  .subscribe(value =>     console.log("Subscriber: " + value));
  }
}
