import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AsyncPipeComponent } from './AsyncPipe/async-pipe/async-pipe.component';
import { ModelDrivenFormComponent } from './Forms/model-driven-form/model-driven-form.component';
import { ModelDrivenFormValidatorsComponent } from './Forms/model-driven-form-validators/model-driven-form-validators.component';
import { ReactiveModelFormComponent } from './Forms/reactive-model-form/reactive-model-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //  AsyncPipeComponent,
    // ModelDrivenFormComponent,
    ModelDrivenFormValidatorsComponent,
    ReactiveModelFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-18-practice';

  ngOnInit() {
    // const numbers = interval(1000);
    // numbers.subscribe((value) => {
    //   console.log('Subscriber: ' + value);
    // });
    // interval(1000)
    //   .pipe(
    //     take(3),
    //     map((v) => Date.now())
    //   )
    //   .subscribe((value) => console.log('Subscriber: ' + value));
  }
}
