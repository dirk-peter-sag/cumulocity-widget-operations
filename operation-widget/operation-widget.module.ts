import { assetPaths } from '../assets/assets';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule, hookComponent } from '@c8y/ngx-components';
import { ButtonInstanceComponent } from './button-instance/button-instance.component';
import { OperationWidgetConfigComponent } from './widget-config/operation-widget-config.component';
import { OperationWidgetComponent } from './widget/operation-widget.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { OperationValueComponent } from './widget-config/operationValue/operation-value.component';

@NgModule({
  imports: [CommonModule, CoreModule, BsDropdownModule],
  declarations: [
    OperationWidgetComponent,
    OperationWidgetConfigComponent,
    ButtonInstanceComponent,
    OperationValueComponent,
  ],
  entryComponents: [
    OperationWidgetComponent,
    OperationWidgetConfigComponent,
  ],
  providers: [
    hookComponent({
      id: 'operation-widget',
      label: 'Operation Button Widget',
      description: '',
      component: OperationWidgetComponent,
      configComponent: OperationWidgetConfigComponent,
      previewImage: assetPaths.previewImage,
    })
  ],
})

export class OperationWidgetModule {}
