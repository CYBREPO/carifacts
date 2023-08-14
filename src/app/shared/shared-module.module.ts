import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardComponent } from './card/card.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CkEditorComponent } from './ck-editor/ck-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AlertComponent } from './alert/alert.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

@NgModule({
  declarations: [SearchBarComponent, CardComponent, ConfirmComponent, CkEditorComponent, AlertComponent, SanitizeHtmlPipe,
    FilterPipe],
  imports: [
    CommonModule, MaterialModuleModule, ReactiveFormsModule, CKEditorModule
  ],
  entryComponents: [AlertComponent],
  exports: [ReactiveFormsModule, SearchBarComponent, CardComponent, ConfirmComponent, CkEditorComponent, SanitizeHtmlPipe,
    CKEditorModule, AlertComponent, FilterPipe]
})
export class SharedModuleModule { }
