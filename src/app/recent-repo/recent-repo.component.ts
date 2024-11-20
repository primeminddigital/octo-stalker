import {Component, Input} from '@angular/core';

@Component({
  selector: 'recent-repo',
  templateUrl: './recent-repo.component.html',
  styleUrls: ['./recent-repo.component.css'],
  standalone: false,
})
export class RecentRepoComponent {
  @Input() repoCommits: {key: string; value: any[]};
}
