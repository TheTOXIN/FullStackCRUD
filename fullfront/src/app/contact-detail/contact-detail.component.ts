import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getContactDetail(this.route.snapshot.params['id']);
  }

  getContactDetail(id) {
    this.http.get('http://localhost:8080/contacts/' + id).subscribe(data => {
      this.contact = data;
    });
  }

  deleteContact(id) {
    this.http.delete('http://localhost:8080/contacts/' + id).subscribe(res => {
      this.router.navigate(['/contact']);
    }, err => {
      console.log(err);
    });
  }

}
