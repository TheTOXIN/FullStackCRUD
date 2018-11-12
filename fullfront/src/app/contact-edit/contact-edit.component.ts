import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getContact(this.route.snapshot.params['id']);
  }

  getContact(id) {
    this.http.get('http://localhost:8080/contacts/' + id).subscribe(data => {
      this.contact = data;
    });
  }

  updateContact(data) {
    const id = data.id;
    this.http.put('http://localhost:8080/contacts/' + id, data).subscribe(res => {
      this.router.navigate(['/contact-detail', id]);
    }, err => {
      console.log(err);
    });
  }

}
