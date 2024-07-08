import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IOperationButtonConfig } from '../models/IOperationWidgetConfig';

@Component({
  selector: 'app-button-instance',
  templateUrl: './button-instance.component.html',
  styleUrls: ['./button-instance.component.scss'],
})
export class ButtonInstanceComponent {
  @Input() config: IOperationButtonConfig;
  @Output() clickedOperation = new EventEmitter<IOperationButtonConfig>();

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  createOperation(event: Event): void {
    event.stopPropagation();
    this.clickedOperation.emit(this.config);
  }

  openModal(template: TemplateRef<any>, size: 'modal-lg'): void {
    if (!this.config.showModal) {
      this.clickedOperation.emit(this.config);
    } else {
      this.modalRef = this.modalService.show(template, { class: size });
    }
  }
}
