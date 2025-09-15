import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './component/home/home';
import { Dashboard } from './component/dashboard/dashboard';
import { Registration } from './component/auth/registration/registration';
import { Login } from './component/auth/login/login';
import { Logout } from './component/auth/logout/logout';
import { Userprofile } from './component/auth/userprofile/userprofile';
import { Showallhealthpolicy } from './component/health/showallhealthpolicy/showallhealthpolicy';
import { Addhealthpolicy } from './component/health/addhealthpolicy/addhealthpolicy';
import { Updatehealthpolicy } from './component/health/updatehealthpolicy/updatehealthpolicy';
import { Healthbody } from './component/health/healthbody/healthbody';
import { Healthpolicyshow } from './component/health/healthpolicyshow/healthpolicyshow';
import { Policy } from './component/policy/policy';
import { Creatpolicy } from './component/creatpolicy/creatpolicy';
import { Updatepolicy } from './component/updatepolicy/updatepolicy';
import { Bill } from './component/bill/bill';
import { Creatbill } from './component/creatbill/creatbill';
import { Updatebill } from './component/updatebill/updatebill';
import { Reciept } from './component/reciept/reciept';
import { Creatreciept } from './component/creatreciept/creatreciept';
import { Carpolicy } from './component/car/carpolicy/carpolicy';
import { Creatcarpolicy } from './component/car/creatcarpolicy/creatcarpolicy';
import { Carbill } from './component/car/carbill/carbill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Carbillcreat } from './component/car/carbillcreat/carbillcreat';
import { PrintFireCoverNote } from './component/print-fire-cover-note/print-fire-cover-note';
import { PrintFireMoneyreceipt } from './component/print-fire-moneyreceipt/print-fire-moneyreceipt';
import { Carreciept } from './component/car/carreciept/carreciept';
import { Creatcarreciept } from './component/car/creatcarreciept/creatcarreciept';
import { Updatecarpolicy } from './component/car/updatecarpolicy/updatecarpolicy';
import { PrintCarMoneyreceipt } from './component/print-car-moneyreceipt/print-car-moneyreceipt';
import { Updatecarbill } from './component/car/updatecarbill/updatecarbill';
import { Payment } from './component/payment/payment';
import { Accountforadmin } from './component/accountforadmin/accountforadmin';
import { Showcompanyvolt } from './component/showcompanyvolt/showcompanyvolt';
import { Adddepositeadmintouser } from './component/adddepositeadmintouser/adddepositeadmintouser';
import { Showpaymentdetails } from './component/showpaymentdetails/showpaymentdetails';






@NgModule({
  declarations: [
    App,
    Home,
    Dashboard,
    Registration,
    Login,
    Logout,
    Userprofile,
    Showallhealthpolicy,
    Addhealthpolicy,
    Updatehealthpolicy,
    Healthbody,
    Healthpolicyshow,
    Policy,
    Creatpolicy,
    Updatepolicy,
    Bill,
    Creatbill,
    Updatebill,
    Reciept,
    Creatreciept,
    Carpolicy,
    Creatcarpolicy,
    Carbill,
    Carbillcreat,
    PrintFireCoverNote,
    PrintFireMoneyreceipt,
    Carreciept,
    Creatcarreciept,
    Updatecarpolicy,
    PrintCarMoneyreceipt,
    Updatecarbill,
    Payment,
    Accountforadmin,
    Showcompanyvolt,
    Adddepositeadmintouser,
    Showpaymentdetails
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  ReactiveFormsModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),

    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
