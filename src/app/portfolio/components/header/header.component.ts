import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangControllerComponent } from '../../../shared/components/lang-controller/lang-controller.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LangControllerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
