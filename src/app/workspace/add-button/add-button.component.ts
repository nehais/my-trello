import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css'],
})
export class AddButtonComponent {
  newData: boolean = false;

  @Input() actionTitle: string = '';
  @Output() addNewData = new EventEmitter<string>();
  @Output() cancelNewData = new EventEmitter<string>();

  handleAdd() {
    if (this.newData) return;
    this.addNewData.emit();
    this.newData = true;
  }

  handleCancel() {
    this.cancelNewData.emit();
    this.newData = false;
  }
}
