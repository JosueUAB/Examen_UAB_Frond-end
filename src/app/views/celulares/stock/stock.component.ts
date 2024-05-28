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
validarFormulario:FormGroup=this.fb.group({
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
    .subscribe((resp:Celulares)=>{
      this.listadeCelulares=resp;
      console.log(this.listadeCelulares);
      this.cargando=false;
    },(error)=>{
      console.error(error);
    })
  }



  editarCelular(celular: Celulares) {
    this.CelularModelo=celular;
    console.log("editar :", celular);
  }


  eliminarCelular(celular:Celulares){

    console.log("Item a eliminar:", celular);
  }






}
