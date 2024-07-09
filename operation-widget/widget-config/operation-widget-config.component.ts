import { Component, Input } from '@angular/core';
import { IOperationWidgetConfig } from '../models/IOperationWidgetConfig';
import { ICONS } from './icons-constant';

@Component({
  selector: 'app-operation-widget-config',
  templateUrl: './operation-widget-config.component.html',
})
export class OperationWidgetConfigComponent {
  public supportedOperations: string[] = [];

  @Input() config: IOperationWidgetConfig = {};
  buttonClasses = [
    'btn-default',
    'btn-primary',
    'btn-secondary',
    'btn-success',
    'btn-danger',
    'btn-emphasis',
    'btn-info',
    'btn-warning',
    'btn-link',
  ];
  availableIcons: string[] = [...ICONS];

  addNewButton(): void {
    if (!this.config.buttons) {
      this.config.buttons = [];
    }

    this.config.buttons.push({
      icon: undefined,
      label: 'Restart',
      description: 'Restart device',
      operationFragment: 'c8y_Restart',
      buttonClasses: 'btn-default',
      operationValue:
        '{\n  "operation_name": {},\n  "description": "This is my operation!"\n}',
      showModal: false,
      modalText: 'Confirm device restart',
      customOperation: false,
    });

    if (this.config.device && this.config.device['c8y_SupportedOperations']) {
      this.supportedOperations = this.config.device['c8y_SupportedOperations'];
    }
  }

  removeButton(index: number): void {
    this.config.buttons.splice(index, 1);
  }
}
