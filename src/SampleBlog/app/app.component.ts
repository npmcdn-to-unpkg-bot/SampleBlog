import { Component } from '@angular/core';

export class Contact {
    id: number;
    firstname: string;
    lastname: string;
    phonenumbers: PhoneNumber[] = [];

    constructor() {
        this.id = 1;
        this.firstname = 'Chris';
        this.lastname = 'Murphy';
        this.phonenumbers.push(new PhoneNumber(1, "303-523-1234"));
        this.phonenumbers.push(new PhoneNumber(2, "303-123-9876"));
    }
}

export class PhoneNumber {
    Id: number;
    Phonenumber: string;

    constructor(id: number, phonenumber: string) {
        this.Id = id;
        this.Phonenumber = phonenumber;
    }
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title }}</h1>
        <h2>{{contact.firstname}} {{contact.lastname}}</h2>
        <div><label>id: </label>{{contact.id}}</div>
        <div>
            <label>first name: </label>
            <input [(ngModel)]="contact.firstname" placeholder="first name">
        </div>
        <div>
            <label>last name: </label>
            <input [(ngModel)]="contact.lastname" placeholder="last name">
        </div> 
        <li *ngFor="let p of contact.phonenumbers">
           {{p.Phonenumber}}
        </li>      
    `
})

export class AppComponent {
    title = 'Contact Info';   
    contact: Contact = new Contact();
}