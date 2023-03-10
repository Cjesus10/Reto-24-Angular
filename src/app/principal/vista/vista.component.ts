import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})


export class VistaComponent {

  //Angular material
  listado:Users[] = [];
  displayedColumns: string[] = ['id', 'name', 'username'];
  dataSource: any;

  // CONSUMIR SERVICIO UserServices

  // Crear instancia de UserServices
  constructor(private userService: UserserviceService){}

  // Ejecutar el metodo getUsersAll del servicio al cargar el componente
  
  ngOnInit(){

    // EJECUTAR METOD getUsersAll y recuperar json devuelto por la api

    this.userService.getUsersAll().subscribe({
      next: (UserAll: Users[]) => 
        {
        this.listado = UserAll,
        this.dataSource = this.listado
        },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });
    

    // Ejecutar el metogo getUsersAllInterceptor

    // this.userService.getUsersAllInterceptor().subscribe({
    //   next: (response: any) => {this.listado = response.body; console.log(response)},
    //   error: (e) => console.error(e),
    //   complete: () => console.info("La API devolvio todos los registros")
    // });

    
  }

}
