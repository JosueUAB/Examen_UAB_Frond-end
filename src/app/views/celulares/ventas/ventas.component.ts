import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import {ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { IconDirective } from '@coreui/icons-angular';
import { VentaService } from '../service/ventas.service';
import { InventarioService } from '../service/inventario.service';
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
import { Ventas} from '../models/ventas.model';
import { Celulares } from '../models/celulares.model';
import { Clientes } from '../models/clientes.model';
import { obtenerClientes } from '../interface/obtenerClientes.interfaces';
import { obtenerVentas } from '../interface/obtenerVentas.interfaces';
import { obtenerCelulares } from '../interface/obtenerCelulares.interfaces';
@Component({
  selector: 'app-ventas',
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
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.scss'
})


export class VentasComponent {
  listaVentas: Ventas[] = [];
  ventaModelo: Ventas = new Ventas();
  cargando: boolean = false;
  detalleVenta: any = {};
  actualizarId: string = '';

  validarFormulario: FormGroup = this.fb.group({
    clienteId: ['', ],
    celularId: ['', ],
    metododePago:['',],
  });
  validarFormularioVentaCIIMEI: FormGroup = this.fb.group({
    CI: ['', Validators.required], // Suponiendo que este campo es requerido
    IMEI: ['', Validators.required], // Suponiendo que este campo es requerido
    metododePago: ['', Validators.required] // Campo de método de pago requerido
});
  listadeVentas : any = [];
  listadeClientes : any = [];
  listadeCelulares : any = [];
  constructor(
    private fb: FormBuilder,
    private ventaService: VentaService,
    private inventarioService:InventarioService,
    private clienteService:ClienteService
  ) {
    this.getVentas();
    this.getCelulares();
    this.getClientes();
  }

  getCelulares() {
    this.cargando = true;
    this.inventarioService.getCelulares()
      .subscribe((resp: Celulares[]) => {
        // Filtrar la lista de celulares para mostrar solo los que no están vendidos
        this.listadeCelulares = resp.filter(celular => !celular.vendido);
        console.log(this.listadeCelulares);
        this.cargando = false;
      }, (error) => {
        console.error(error);
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



  crearVentaPorCIyIMEI() {
    console.log('Iniciando proceso de creación de venta por CI y IMEI...');
    console.log(this.validarFormularioVentaCIIMEI);
    const CI = this.validarFormularioVentaCIIMEI.get('CI')?.value;
    const IMEI = this.validarFormularioVentaCIIMEI.get('IMEI')?.value;
    const metododePago = this.validarFormularioVentaCIIMEI.get('metododePago')?.value;
    if (CI && IMEI && metododePago) { // Verificar si todos los campos necesarios están presentes
        this.ventaService.crearVentaPorCIyIMEI(CI, IMEI, metododePago) // Pasar el método de pago al servicio
            .subscribe(
                (resp) => {
                    console.log('Respuesta del servidor:', resp);
                    Swal.fire({
                        icon: "success",
                        title: "Venta Agregada",
                        timer: 2000
                    });
                    console.log('Formulario reseteado');
                    this.validarFormularioVentaCIIMEI.reset();
                    console.log('Obteniendo ventas actualizadas...');
                    this.getVentas();
                },
                (error) => {
                    console.error('Error al crear la venta por CI y IMEI:', error);
                    Swal.fire({
                        icon: "error",
                        title: "Error al agregar la venta",
                        text: error.error.msg || "Hubo un problema al agregar la venta. Por favor, inténtalo de nuevo.",
                        timer: 2000
                    });
                }
            );
    } else {
        console.error('Por favor, completa todos los campos.');
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor, completa todos los campos.",
            timer: 2000
        });
    }
}



  crearVenta() {
    console.log('Datos del formulario:', this.validarFormulario.value);
    this.ventaService.crearVenta(this.validarFormulario.value)
      .subscribe(resp => {
        console.log('Respuesta del servidor:', resp);
        Swal.fire({
          icon: "success",
          title: "Venta Agregada",
          timer: 2000
        });
        console.log('Formulario reseteado');
        this.validarFormulario.reset();
        console.log('Obteniendo ventas actualizadas...');
        this.getVentas();
      }, error => {
        console.error('Error al realizar la venta:', error);
        Swal.fire({
          icon: "error",
          title: "Llenar todos los campos",
          timer: 2000
        });
      });
  }


  getVentas() {
    this.cargando = true;
    this.ventaService.getVentas()
      .subscribe((resp: Ventas[]) => {
        this.listadeVentas = resp;
       //console.log(this.listadeVentas);
        this.cargando = false;
      }, (error) => {
        console.error(error);
      });
  }

  verVenta(venta: Ventas, id: string) {
    if (!venta) {
      console.error('El objeto venta es nulo o indefinido.');
      return;
    }

    console.log('Venta a visualizar:', venta);
    console.log('ID de la venta:', id);

    // Mostrar SweetAlert2 con el formulario para modificar método de pago
    Swal.fire({
      title: 'Editar Método de Pago',
      html: `
        <form id="editarVentaForm">
          <div class="mb-3">
            <label for="metododePago" class="form-label">Método de Pago</label>
            <select class="form-select" id="metododePago">
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="QR transferencia">QR Transferencia</option>
            </select>
          </div>
        </form>
      `,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const form = document.getElementById('editarVentaForm') as HTMLFormElement;
        if (!form.checkValidity()) {
          Swal.showValidationMessage('Por favor, completa todos los campos.');
          return false;
        }

        // Agregar console.log para verificar el valor de metodoDePago
        console.log('Valor de metododePago:', form['metododePago'].value);

        const editedVenta = {
          metododePago: form['metododePago'].value
        };
        console.log('Venta editada:', editedVenta);

        this.guardarVentaEditada(id, editedVenta);
        return true; // Devuelve true para cerrar el SweetAlert2 después de realizar la acción
      }
    });
  }

  guardarVentaEditada(id: string, editedVenta: Partial<Ventas>) {
    this.ventaService.actualizarVenta(id, editedVenta).subscribe({
      next: (respuesta) => {
        console.log('Venta editada exitosamente', respuesta);
        this.getVentas();
        Swal.fire({
          icon: 'success',
          title: 'Venta actualizada',
          timer: 2000
        });
      },
      error: (error) => {
        console.error('Error al editar venta:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al editar la venta. Por favor, inténtalo de nuevo.',
          timer: 2000
        });
      }
    });
  }


  eliminarVenta(id: string) {
    this.ventaService.eliminarVenta(id)
      .subscribe(
        (resp: any) => {
          Swal.fire({
            icon: "success",
            title: "Venta eliminada",
            timer: 2000
          });
          console.log(resp);
          this.getVentas();
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
  filterCelulares(event: any) {
    const searchTerm = event.target.value.toLowerCase();

  }

}
