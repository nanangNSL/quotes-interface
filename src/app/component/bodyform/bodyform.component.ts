import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bodyform',
  templateUrl: './bodyform.component.html',
  styleUrls: ['./bodyform.component.css']
})
export class BodyformComponent {
  @Input() data: any;
}
