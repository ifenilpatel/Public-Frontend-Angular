import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MaterialNotifyService {
  private defaultConfig: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'left',
    verticalPosition: 'bottom',
    panelClass: ['default-snackbar'],
  };

  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string, action?: string, config?: MatSnackBarConfig) {
    this.show(message, action, {
      ...this.defaultConfig,
      ...config,
      panelClass: ['success-snackbar'],
    });
  }

  showError(message: string, action?: string, config?: MatSnackBarConfig) {
    this.show(message, action, {
      ...this.defaultConfig,
      ...config,
      panelClass: ['error-snackbar'],
    });
  }

  showInfo(message: string, action?: string, config?: MatSnackBarConfig) {
    this.show(message, action, {
      ...this.defaultConfig,
      ...config,
      panelClass: ['info-snackbar'],
    });
  }

  showWarning(message: string, action?: string, config?: MatSnackBarConfig) {
    this.show(message, action, {
      ...this.defaultConfig,
      ...config,
      panelClass: ['warning-snackbar'],
    });
  }

  private show(message: string, action?: string, config?: MatSnackBarConfig) {
    this.snackBar.open(message, action, config);
  }
}

/* 
 this.notificationService.showSuccess('Success message!', 'Close');
 */
