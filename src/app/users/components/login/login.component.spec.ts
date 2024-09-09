import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthModule } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../../../environments/environment.development';
import { LoginComponent } from './login.component';
import { UserService } from '../../service/user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        AuthModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      ],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
