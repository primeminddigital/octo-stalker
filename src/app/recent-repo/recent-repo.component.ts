import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'recent-repo',
  templateUrl: './recent-repo.component.html',
  styleUrls: ['./recent-repo.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RecentRepoComponent {
  @Input() repoCommits!: {key: string; value: any[]};
}
