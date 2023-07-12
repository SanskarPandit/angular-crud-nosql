import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private _http: HttpClient) {}
  addContact(data: any): Observable<any> {
    return this._http.post(
      'https://weary-plum-cuttlefish.cyclic.app/addContact',
      data
    );
  }
  getContact(): Observable<any> {
    return this._http.get(
      'https://weary-plum-cuttlefish.cyclic.app/allContacts'
    );
  }
  updateContact(_id: number, data: any) {
    return this._http.patch(
      `https://weary-plum-cuttlefish.cyclic.app/updateContact/${_id}`,
      data
    );
  }
  deleteContact(_id: number): Observable<any> {
    return this._http.delete(
      `https://weary-plum-cuttlefish.cyclic.app/removeContact/${_id}`
    );
  }
}
