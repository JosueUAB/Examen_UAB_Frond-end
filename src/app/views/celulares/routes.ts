
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Celulares'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'stock',
        loadComponent: () => import('./stock/stock.component').then(m => m.StockComponent),
        data: {
          title: 'stock'
        }
      },
      {
        path: 'editstock',
        loadComponent: () => import('./detallestock/detallestock.component').then(m => m.DetallestockComponent),
        data: {
          title: 'stock'
        }
      },
      {
        path: 'clientes',
        loadComponent: () => import('./clientes/clientes.component').then(m => m.ClientesComponent),
        data: {
          title: 'Clientes'
        }
      },
      {
        path: 'ventas',
        loadComponent: () => import('./ventas/ventas.component').then(m => m.VentasComponent),
        data: {
          title: 'Ventas'
        }
      },
      {
        path: 'reportes',
        loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
        data: {
          title: 'reportes'
        }
      },

    ]

  }
]
