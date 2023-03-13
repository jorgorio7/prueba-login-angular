import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [LoginComponent]
    })
    .compileComponents();

  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it('should be invalid form - Entered only the email field', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.loginForm;
    const email = component.loginForm.controls['username'];
    email.setValue('username@mail.com');

    expect(form.invalid).toBeTrue();
  });


  it('should be invalid form - Entered username without email format', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.loginForm;
    const email = component.loginForm.controls['username'];
    const password = component.loginForm.controls['password'];
    email.setValue('username123');
    password.setValue('123425');

    expect(form.invalid).toBeTrue();
  });


  it('should be invalid form - Entered password with only 3 digits (must be 5 min)', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.loginForm;
    const email = component.loginForm.controls['username'];
    const password = component.loginForm.controls['password'];
    email.setValue('username@mail.com');
    password.setValue('123');

    expect(form.invalid).toBeTrue();
  });


  it('should be valid form - Entered all required fields in the correct format', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.loginForm;
    const email = component.loginForm.controls['username'];
    const password = component.loginForm.controls['password'];
    email.setValue('username@mail.com');
    password.setValue('123425');

    expect(form.valid).toBeTrue();
  });


  it('should be invalid form - Click button with empty fields', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const form = component.loginForm;

    const button = fixture.debugElement.query(By.css('.submitButton'));
    button.nativeElement.click();

    expect(form.invalid).toBeTrue();
  });



});
