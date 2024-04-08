import { Component } from '@angular/core';
import { DatospersonalesComponent } from '../pages/datospersonales/datospersonales.component';
import { DatosFamiliaresComponent } from '../pages/datos-familiares/datos-familiares.component';

@Component({
  selector: 'app-main-perfil',
  standalone: true,
  imports: [DatospersonalesComponent,DatosFamiliaresComponent],
  templateUrl: './main-perfil.component.html',
  styleUrl: './main-perfil.component.css'
})
export class MainPerfilComponent {

}
