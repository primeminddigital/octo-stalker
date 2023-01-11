import {Component, Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';

export type Field = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  default?: any;
  options?: any[];
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

export type TemplateData = {
  title: string;
  fields: Field[];
  submitText?: string;
  cancelText?: string;
}

@Component({
  selector: 'form-dialog',
  templateUrl: './form-dialog.component.html',
})
export class FormDialogComponent {
  constructor(
    public dialog: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: TemplateData,
  ) {}
}
