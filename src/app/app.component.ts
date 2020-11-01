import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'usersList';
  typesOfNames: string[] = ['name 1', 'name 2', 'name 3', 'name 4'];
}
