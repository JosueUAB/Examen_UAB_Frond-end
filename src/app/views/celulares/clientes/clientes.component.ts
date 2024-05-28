import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { IconDirective } from '@coreui/icons-angular';
import { ClienteService } from '../service/clientes.service';
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
import { Clientes } from '../models/celulares.model';
import { obtenerClientes } from '../interface/obtenerClientes.interfaces';
@Component({
  selector: 'app-clientes',
  standalone: true,
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
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  listaClientes: Clientes[] = [];
  clienteModelo: Clientes = new Clientes();
  cargando: boolean = false;
  detalleCliente: any = {};
  actualizarId: string = '';
  validarFormulario: FormGroup=this.fb.group({
    CI: ['', Validators.required],
    Nombre: ['', ],
    Apellido: ['', ],
    Correo: [''],
    telefono: ['', ]
  });
  listadeClientes : any = [];

  constructor(
    private fb: FormBuilder,
    private clienteService:ClienteService) {


    this.getClientes();
  }

  crearCliente() {
    console.log(this.validarFormulario.value);
    this.clienteService.crearCliente(this.validarFormulario.value)
      .subscribe(resp => {
        Swal.fire({
          icon: "success",
          title: "Cliente Agregado",
          timer: 2000
        });
        console.log(resp);
        this.validarFormulario.reset();
        this.getClientes();
      }, error => {
        Swal.fire({
          icon: "error",
          title: "Llenar todos los campos",
          timer: 2000
        });
        console.error(error.error);
      });
  }

  getClientes() {
    this.cargando = true;
    this.clienteService.getClientes()
      .subscribe((resp: Clientes[]) => {
        this.listadeClientes = resp;
        console.log(this.listadeClientes);
        this.cargando = false;
      }, (error) => {
        console.error(error);
      });
  }

  editarCliente(cliente: Clientes, id: string) {
    if (cliente) {
      this.validarFormulario.patchValue(cliente);
      console.log(this.validarFormulario.value);
      console.log(id);
      this.actualizarId = id;
      this.clienteService.getClienteDetalle(id)
        .subscribe((resp: any) => {
          this.detalleCliente = resp;
          console.log(this.detalleCliente);
          console.log(this.actualizarId);
        }, error => {
          console.log(error);
        });
    } else {
      console.error('El objeto cliente es nulo o indefinido.');
    }
    if (!this.validarFormulario.valid) {
      console.log(this.validarFormulario.value);
      return;
    }
  }

  guardarOEditarCliente(): void {
    const cliente: Clientes = {
      CI: this.validarFormulario.value.CI,
      Nombre: this.validarFormulario.value.Nombre,
      Apellido: this.validarFormulario.value.Apellido,
      Correo: this.validarFormulario.value.Correo,
      telefono: this.validarFormulario.value.telefono
    };

    if (this.actualizarId) {
      console.log('Datos del cliente a editar:', cliente);
      this.clienteService.actualizarCliente(this.actualizarId, cliente).subscribe({
        next: (respuesta) => {
          console.log("Cliente editado exitosamente", respuesta);
          this.getClientes();
          this.validarFormulario.reset();
          this.actualizarId = '';
          Swal.fire({
            icon: "success",
            title: "Cliente actualizado",
            timer: 2000
          });
        },
        error: (error) => {
          console.error("Error al editar cliente:", error);
        }
      });
    } else {
      console.log('Datos del nuevo cliente:', cliente);
      this.clienteService.crearCliente(cliente).subscribe({
        next: (respuesta) => {
          console.log("Cliente agregado exitosamente", respuesta);
          this.getClientes();
          this.validarFormulario.reset();
          Swal.fire({
            icon: "success",
            title: "Cliente agregado",
            timer: 2000
          });
        },
        error: (error) => {
          Swal.fire({
            icon: "error",
            title: "Llenar todos los campos",
            timer: 2000
          });
          console.error("Error al agregar cliente:", error);
        }
      });
    }
  }

  eliminarCliente(id: string) {
    this.clienteService.eliminarCliente(id)
      .subscribe(
        (resp: any) => {
          Swal.fire({
            icon: "success",
            title: "Cliente eliminado",
            timer: 2000
          });
          console.log(resp);
          this.getClientes();
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
}
