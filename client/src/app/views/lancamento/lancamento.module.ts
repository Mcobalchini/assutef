import { MaskModule } from './../../directives/mask/mask.module';
import { AssociadoService } from './../../services/associado/associado.service';
import { LancamentoService } from './../../services/lancamento/lancamento.service';
import { AuthService } from './../../services/auth/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LancamentoComponent } from './lancamento.component'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {BrowserModule} from "@angular/platform-browser";
import { ModalLancamentoComponent } from './modal/modal-lancamento.component'
import {Elemento} from './lancamento.component'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    MatAutocomplete,
    MatPaginatorModule,
    MatSortModule
} from "@angular/material";

@NgModule({
    declarations: [LancamentoComponent, ModalLancamentoComponent,],
    exports: [LancamentoComponent, ModalLancamentoComponent],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatRadioModule,
        FlexLayoutModule,
        MatSnackBarModule,
        MatTableModule,
        MatAutocompleteModule,
        MatPaginatorModule,
        MatSortModule,
        MaskModule,
        MatCheckboxModule
    ],
    entryComponents: [ModalLancamentoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService, LancamentoService, AssociadoService, Elemento]
})

export class LancamentoModule { }
