import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // Define la URL base de la API para los usuarios
API_URL: string = 'https://springboot-git-postgres-demo.apps-crc.testing/api/v1/users';

// Inyecta HttpClient en el constructor para poder usarlo en los métodos del servicio
constructor(private httpClient: HttpClient) {}

// Método para obtener la lista de usuarios
  // Retorna un Observable que emite un array de objetos UserInterface
  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(this.API_URL);
  }


}
