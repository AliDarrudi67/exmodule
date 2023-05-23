import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input() boxWidth = 'auto'
  @Input() boxHeight = 'auto'
  @Input() paddingFromTop = '10px'
  @Input() padding = '10px'
}
