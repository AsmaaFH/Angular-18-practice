import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { CardComponent } from '../../Shared/card/card.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() items: string[] = [];

}
