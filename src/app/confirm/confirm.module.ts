import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';

import {ConfirmDirective} from './confirm.directive';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  declarations: [ConfirmDirective, ConfirmDialogComponent],
  exports: [ConfirmDirective, ConfirmDialogComponent],
})
export class ConfirmModule {}
