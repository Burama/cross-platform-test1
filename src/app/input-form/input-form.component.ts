import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
  form!: FormGroup;

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      degrees1: ['', Validators.required],
      minutes1: ['', Validators.required],
      seconds1: ['', Validators.required],
      degrees2: ['', Validators.required],
      minutes2: ['', Validators.required],
      seconds2: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
