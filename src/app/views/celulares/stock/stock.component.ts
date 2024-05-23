import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { IconDirective } from '@coreui/icons-angular';
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


  constructor() { }
}
