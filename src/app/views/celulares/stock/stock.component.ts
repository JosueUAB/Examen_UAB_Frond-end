import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { IconDirective } from '@coreui/icons-angular';
import { InventarioService } from '../service/inventario.service';
import { RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  ButtonDirective ,
  TableDirective,
  TableColorDirective,
  TableActiveDirective
} from '@coreui/angular';
//* importacion de sweet alert2
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
import { Celulares } from '../models/celulares.model';
import { obtenerCelulares } from '../interface/obtenerCelulares.interfaces';
@Component({
  selector: 'app-stock',
  standalone: true,
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    DocsExampleComponent,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    ButtonDirective,
    NgStyle,
    IconDirective,
    TableDirective,
    TableColorDirective,
    TableActiveDirective
  ],
})


export class StockComponent {
  listaCelulares : Celulares[] = [];
  CelularModelo : Celulares = new Celulares();
  cargando:boolean=false;
  detalleCelular:any ={};
  actualiarid:string='';
  validarFormulario:FormGroup=this.fb.group({
    _id:[,],
    marca:[,],
    modelo:[,],
    color:[,],
    almacenamiento:[,],
    ram:[,],
    bateria:[,],
    imei:[,[Validators.required]],
    precio:[ ,],
    descuento:[,]
})

listadeCelulares : any = [];

  constructor(
    private fb : FormBuilder,
    private inventarioService:InventarioService) {
    this.getCelulares();



   }
   //crearCelular
   crearCelular(){
    console.log(this.validarFormulario.value);
    this.inventarioService.crearCelular(this.validarFormulario.value)
    .subscribe(resp=>{
      Swal.fire({
        icon: "success",
        title: "Celular Agregado al inventario",
        timer:2000
      });
      console.log(resp);
      this.validarFormulario.reset();
      this.getCelulares();
    },(error)=>{
      Swal.fire({
        icon: "error",
        title: "Llenar todos los campos",
        timer:2000
      });
      console.error(error.error);
    })

   }

  getCelulares() {
    this.cargando=true;


    this.inventarioService.getCelulares()
    .subscribe((resp:Celulares[])=>{
      this.listadeCelulares=resp;
      console.log(this.listadeCelulares);
      this.cargando=false;
    },(error)=>{
      console.error(error);
    })
  }


  editarCelular(celular: Celulares,id:string) {

    if (celular) {
      this.validarFormulario.patchValue(celular);
      console.log(this.validarFormulario.value);
      console.log((id));
      this.actualiarid=id;
      this.inventarioService.detalleCelular(id)
      .subscribe((resp:any)=>{
        this.detalleCelular=resp;
        console.log(this.detalleCelular);

        console.log(this.actualiarid);
      },error=>{

        console.log(error);
      })

    } else {
      console.error('El objeto celular es nulo o indefinido.');
    }
    if( !this.validarFormulario.valid ){
      console.log(this.validarFormulario.value);
       return;
     }
  }
  guardarOEditarCelular(): void {
    // Verifica si hay un ID actual para decidir si estás editando o agregando
    if (this.actualiarid) { // Si hay un ID, editar el celular
        const celular: Celulares = { // Define la variable celular aquí
            _id: this.actualiarid,
            marca: this.validarFormulario.value.marca,
            modelo: this.validarFormulario.value.modelo,
            color: this.validarFormulario.value.color,
            almacenamiento: this.validarFormulario.value.almacenamiento,
            ram: this.validarFormulario.value.ram,
            bateria: this.validarFormulario.value.bateria,
            imei: this.validarFormulario.value.imei,
            precio: this.validarFormulario.value.precio,
            descuento: this.validarFormulario.value.descuento,
        };

        console.log('Datos del celular a editar:', celular);
        this.inventarioService.actualizarCelular(this.actualiarid, celular).subscribe({
            next: (respuesta) => {
                console.log("Celular editado exitosamente", respuesta);
                this.getCelulares();
                this.validarFormulario.reset();
                this.actualiarid = '';
                Swal.fire({
                  icon: "success",
                  title: "Celular actualizado inventario",
                  timer:2000
                });// Restablece el valor de actualiarid después de editar
            },
            error: (error) => {
                console.error("Error al editar celular:", error);
                // Manejar el error según sea necesario
            }
        });
    } else { // Si no hay ID, agregar un nuevo celular
        const celular: Celulares = { // Define la variable celular aquí
            marca: this.validarFormulario.value.marca,
            modelo: this.validarFormulario.value.modelo,
            color: this.validarFormulario.value.color,
            almacenamiento: this.validarFormulario.value.almacenamiento,
            ram: this.validarFormulario.value.ram,
            bateria: this.validarFormulario.value.bateria,
            imei: this.validarFormulario.value.imei,
            precio: this.validarFormulario.value.precio,
            descuento: this.validarFormulario.value.descuento,
        };

        console.log('Datos del nuevo celular:', celular);
        this.inventarioService.crearCelular(celular).subscribe({
            next: (respuesta) => {
                console.log("Celular agregado exitosamente", respuesta);
                Swal.fire({
                  icon: "success",
                  title: "Celular Agregado al inventario",
                  timer:2000
                });
                this.getCelulares();
                this.validarFormulario.reset();
            },
            error: (error) => {
              Swal.fire({
                icon: "error",
                title: "Llenar todos los campos",
                timer:2000
              });
                console.error("Error al agregar celular:", error);
                // Manejar el error según sea necesario
            }
        });
    }
}



eliminarCelular(id: string) {
  this.inventarioService.eliminarcelular(id) // Cambiado a 'eliminarcelular'
  .subscribe(
    (resp: any) => { // Añadido el tipo explícito para 'resp'
      Swal.fire({
        icon: "success",
        title: "Celular eliminado del inventario",
        timer: 2000
      });
      console.log(resp);
      this.getCelulares();
    },
    (error: any) => { // Añadido el tipo explícito para 'error'
      console.error(error);
    }
  );
}






}
