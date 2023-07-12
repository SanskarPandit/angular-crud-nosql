import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private contactService: ContactsService,
    private dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.contactForm = this._fb.group({
      firstName: '',
      lastName: '',
      phoneNumber: '',
    });
  }
  ngOnInit(): void {
    this.contactForm.patchValue(this.data);
  }
  handleSubmit() {
    if (this.contactForm.valid) {
      if (this.data) {
        this.contactService
          .updateContact(this.data._id, this.contactForm.value)
          .subscribe({
            next: (val: any) => {
              alert('Contact Updated  Successfully');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      } else {
        this.contactService.addContact(this.contactForm.value).subscribe({
          next: (val: any) => {
            alert('Contact Added Successfully');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    }
  }
}
