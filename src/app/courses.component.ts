import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// decorator function
@Component({
    // CSS selector
    // e.g., class selector: .courses, id selector: #courses
    // string inter-polation
    selector: 'courses',
    template: `
        <div (click)="onDivClick()">
            <h2 [textContent]="title"></h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>

            <h4>example of interpolation and property binding</h4>
            <img src="{{ imageURL }}" />
            <img [src]="imageURL" />

            <h4>example of attribute binding</h4>
            <table>
                <tr>
                    <td [attr.colspan]="colSpan">row 1</td>
                </tr>
            </table>

            <h4>example of class, style and event binding</h4>
            <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'red'">Save</button>

            <div>
                <h4>event binding example</h4>
                <input (keyup)="onKeyUp($event)"/>
                <input (keyup.enter)="onEnterKeyUp()"/>
            </div>
            <div>
                <h4>tempalte variable example</h4>
                <input #mail (keyup.enter)="onKeyUpTempVariable(mail.value)"/>
            </div>
            <div>
                <h4>two-way binding example1</h4>
                <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUpTwoWayOne()"/>
            </div>
            <div>
                <h4>two-way binding example2 (banana in a box)</h4>
                <input [(ngModel)]="email" (keyup.enter)="onKeyUpTwoWayTwo()"/>
            </div>
            <div>
                <h4>example of pipe</h4>
                <p>{{ text | summary:10 }}</p>
            </div>
        </div>
    `
})

export class  CoursesComponent {
    title = "List of courses";
    imageURL = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = true;
    email = "me@example.com";
    text = 'In baseball, the Washington Nationals defeat the Houston Astros to win the World Series';
    courses;

    getTitle() {
        return this.title;
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event) {
        $event.stopPropagation();
        console.log('save button is clicked', $event);
    }

    onDivClick() {
        console.log('div is clicked');
    }

    onKeyUp($event) {
        $event.stopPropagation();
        if ($event.keyCode === 13) console.log('ENTER was pressed');
    }

    onEnterKeyUp() {
        console.log('ENTER was pressed');
    }

    onKeyUpTempVariable(email) {
        console.log(email);
    }

    onKeyUpTwoWayOne() {
        console.log(this.email + ' in two-way binding 1');
    }

    onKeyUpTwoWayTwo() {
        console.log(this.email + ' in two-way binding 2');
    }
}