import { Component, Input } from '@angular/core';
import { IOperation, IResult, OperationService } from '@c8y/client';
import { AlertService } from '@c8y/ngx-components';
import {
  IOperationButtonConfig,
  IOperationWidgetConfig,
} from '../models/IOperationWidgetConfig';

@Component({
  selector: 'app-operation-widget',
  templateUrl: './operation-widget.component.html',
  styleUrls: ['./operation-widget.component.scss'],
})
export class OperationWidgetComponent {
  @Input() config: IOperationWidgetConfig = {};
  buttons: IOperationButtonConfig[] = [];

  constructor(
    private operationsService: OperationService,
    private alertService: AlertService
  ) {}

  async onButtonClick(button: IOperationButtonConfig): Promise<void> {
    if (!this.config.device || !this.config.device.id) {
      this.alertService.danger(
        `No target device configured for this widget. Unable to create operation.`
      );
    }

    const operation = JSON.parse(button.operationValue);

    operation.deviceId = this.config.device.id;

    let request: IResult<IOperation>;
    try {
      request = await this.operationsService.create(operation);
    } catch (error) {
      this.alertService.danger(`Failed to create '${button.label}' operation.`);
    }

    if (request.res.status === 200) {
      this.alertService.success(
        `Operation '${button.label}' successfully created.`
      );
    }
  }
}
