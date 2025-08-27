import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header-component/header-component";

@Component({
  selector: 'app-home',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
