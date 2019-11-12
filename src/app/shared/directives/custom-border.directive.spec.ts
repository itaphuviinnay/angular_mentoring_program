import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('CustomBorderDirective', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
    });
    it('should create an instance', () => {
        expect(fixture).toBeDefined();
    });
});

@Component({
    selector: 'test-layout',
    template: `<div [customBorder]='creationDate'></div>`
})
export class TestHostComponent implements OnInit {
    creationDate: Date = new Date();
    constructor() { }
    ngOnInit() { }
}
