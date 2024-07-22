import { Component , OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { UserInterface } from '../../../interfaces/user.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit  {

  userList: UserInterface[] = [];

  // Inyecta el servicio UserService en el constructor del componente
  constructor(private userService: UserService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.getUsers(); // Llama al método para obtener los usuarios
  }

  // Método para obtener la lista de usuarios del servicio
  getUsers(): void {
    // Llama al método getUsers del servicio y se suscribe al observable
    this.userService.getUsers().subscribe({
      // Si la solicitud es exitosa, asigna el resultado a userList
      next: (result) => {
        this.userList = result; // Directamente asigna el resultado a userList
      },
      // Si ocurre un error, lo imprime en la consola
      error: (err) => {
        console.log(err);
      }
    });
  }

}
