import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [RouterOutlet, Router],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})

export class CrudComponent {
  constructor(private router: Router){

  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
