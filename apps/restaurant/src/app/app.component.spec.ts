import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FlexModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@dc/auth';
import { LayoutModule } from '@dc/layout';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        LayoutModule,
        FlexModule,
        HttpClientModule,
        RouterTestingModule,
        AuthModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as greet 'Hola Mundo!'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Hola Mundo!');
  // });

  it(`should greet Sergio`, () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const name = 'Sergio';

    // Act
    const result = app.greet(name); //?

    // Assert
    expect(result).toEqual('Hola Sergio!');
  });

  // it(`should have as title 'restaurant'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('restaurant');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'Welcome to restaurant!'
  //   );
  // });
});
