import { ChangeDetectionStrategy, Component, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  items = ['Mango', 'Orange'];

  constructor() {
    console.log(`constructor  - data is ${this.items}`);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.items}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.items}`);

    for (let key in changes) {
      let change = changes[key];
      console.log(`${key} changed.
      Current : ${change.currentValue}.
      Previous: ${change.previousValue}`);
    }
  }

  ngDoCheck() {
    console.log(`ngDoCheck  - data is ${this.items}`);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
