import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog',
  imports: [HeaderComponent, BlogCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  listaia = new Array(5);
}
