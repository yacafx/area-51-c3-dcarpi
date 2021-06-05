import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should notify the click', () => {
    /** THIS IS A BAD TEST DO NOT DO IT LKE THIS!!!! **/
    // const spy = jest.spyOn(component, 'notify');
    // component.notify();
    // expect(spy).toBeCalled();

    /** THIS IS A GOOD TEST, DO IT LKE THIS!!!! 😀😀😀 **/
    const spy = jest.spyOn(component.clicked, 'emit');
    component.notify();
    expect(spy).toBeCalled();
    expect(component.visible).toBeFalsy();
  });
  // it('should get a composed label', () => {
  //   // Arrange
  //   const name = 'Sergio';
  //   const expectedResult = 'Hola Sergio';

  //   // Act
  //   const result = component.getLabel(name);

  //   // Assert
  //   expect(result).toBe(expectedResult);
  // });
});
