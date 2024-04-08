import { Component } from '@angular/core';
import { TopnavComponent } from '../../topnav/topnav.component';
import { FooternavComponent } from '../../footernav/footernav.component';
import { LeftnavComponent } from '../../leftnav/leftnav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminlayout',
  standalone: true,

  imports: [TopnavComponent,FooternavComponent,LeftnavComponent, RouterOutlet],
  templateUrl: './adminlayout.component.html',
  styleUrl: './adminlayout.component.css'
})
export class AdminlayoutComponent {

}
