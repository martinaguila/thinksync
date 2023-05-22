import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() labelName: string = '';

  currentMode: string = '';

  constructor(
    private themeService: ThemeService
  ) {
    this.themeService.getCurrentMode().subscribe(mode => {
      this.currentMode = mode;
    });
   }

  ngOnInit() {}

}
