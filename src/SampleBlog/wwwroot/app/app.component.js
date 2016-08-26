System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Contact, PhoneNumber, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Contact = (function () {
                function Contact() {
                    this.phonenumbers = [];
                    this.id = 1;
                    this.firstname = 'Chris';
                    this.lastname = 'Murphy';
                    this.phonenumbers.push(new PhoneNumber(1, "303-523-1234"));
                    this.phonenumbers.push(new PhoneNumber(2, "303-123-9876"));
                }
                return Contact;
            }());
            exports_1("Contact", Contact);
            PhoneNumber = (function () {
                function PhoneNumber(id, phonenumber) {
                    this.Id = id;
                    this.Phonenumber = phonenumber;
                }
                return PhoneNumber;
            }());
            exports_1("PhoneNumber", PhoneNumber);
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Contact Info';
                    this.contact = new Contact();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>{{title }}</h1>\n        <h2>{{contact.firstname}} {{contact.lastname}}</h2>\n        <div><label>id: </label>{{contact.id}}</div>\n        <div>\n            <label>first name: </label>\n            <input [(ngModel)]=\"contact.firstname\" placeholder=\"first name\">\n        </div>\n        <div>\n            <label>last name: </label>\n            <input [(ngModel)]=\"contact.lastname\" placeholder=\"last name\">\n        </div> \n        <li *ngFor=\"let p of contact.phonenumbers\">\n           {{p.Phonenumber}}\n        </li>      \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map