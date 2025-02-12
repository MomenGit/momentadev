import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lang-controller',
  imports: [],
  templateUrl: './lang-controller.component.html',
  styleUrl: './lang-controller.component.css',
})
export class LangControllerComponent implements OnInit {
  private _router = inject(Router);
  currentLang!: string;
  langs = ['en', 'ar'];

  ngOnInit(): void {
    this.currentLang = this._router.url.slice(1, 3);
    console.log(this.currentLang);
  }

  switchLang(lang: string) {
    if (!this.langs.includes(lang)) return;
    const url = `/${lang}${this._router.url}`;
    console.log(url);
    this._router.navigateByUrl(url);
  }
}
