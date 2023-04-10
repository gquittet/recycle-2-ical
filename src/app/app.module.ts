import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaskitoModule } from '@maskito/angular';
import { TuiValidatorModule } from '@taiga-ui/cdk';
import {
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
  TuiErrorModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { AuthInterceptor } from '~/app/auth.interceptor';
import { ButtonModule } from '~/shared/directives/buttons/button.module';
import { InputModule } from '~/shared/directives/inputs/input.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    InputModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiInputModule,
    TuiErrorModule,
    TuiValidatorModule,
    MaskitoModule,
    TuiButtonModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
