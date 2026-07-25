import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'gs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent {}
