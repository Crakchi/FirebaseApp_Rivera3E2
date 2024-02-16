import { Component } from '@angular/core';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Tablaled1: any;
  Tablaled2: any;
  Tablaled3: any;

  Button1I: boolean = false;
  Button1D: boolean = false;
  Button2I: boolean = false;
  Button2D: boolean = false;
  Button3I: boolean = false;
  Button3D: boolean = false;
  ButtonAllI: boolean = false;
  ButtonAllD: boolean = false;

  constructor(private db: Firestore) {
    this.loadStateAndSetColors(); 
    this.loadStateAndSetColors2(); 
  }

  async encender() {
    this.Tablaled1 = doc(this.db, 'controlLED', 'LED1');
    await setDoc(this.Tablaled1, { encender: true });
    this.Button1I = true;
    this.Button1D = false;
    await this.saveStateData();  
  }

  async apagar() {
    this.Tablaled1 = doc(this.db, 'controlLED', 'LED1');
    await setDoc(this.Tablaled1, { encender: false });
    this.Button1D = true;
    this.Button1I = false;
    await this.saveStateData2();  
  }

  async encender2() {
    this.Tablaled2 = doc(this.db, 'controlLED', 'LED2');
    await setDoc(this.Tablaled2, { encender: true });
    this.Button2I = true;
    this.Button2D = false;
    await this.saveStateData();  
  }

  async apagar2() {
    this.Tablaled2 = doc(this.db, 'controlLED', 'LED2');
    await setDoc(this.Tablaled2, { encender: false });
    this.Button2D = true;
    this.Button2I = false;
    await this.saveStateData2();  
  }

  async encender3() {
    this.Tablaled3 = doc(this.db, 'controlLED', 'LED3');
    await setDoc(this.Tablaled3, { encender: true });
    this.Button3I = true;
    this.Button3D = false;
    await this.saveStateData();  
  }

  async apagar3() {
    this.Tablaled3 = doc(this.db, 'controlLED', 'LED3');
    await setDoc(this.Tablaled3, { encender: false });
    this.Button3D = true;
    this.Button3I = false;
    await this.saveStateData2();  
  }

  async encenderAll() {
    await this.encender();
    await this.encender2();
    await this.encender3();
    this.ButtonAllI = true;
    this.ButtonAllD = false;
    await this.saveStateData();  
  }

  async apagarAll() {
    await this.apagar();
    await this.apagar2();
    await this.apagar3();
    this.ButtonAllD = true;
    this.ButtonAllI = false;
    await this.saveStateData2();  
  }

  colorBoton1I (state: boolean):string{
    if(state){
      return "success";
    }else{
      return "dark";
    }
  }

  colorBoton1D (state: boolean):string{
    if(state){
      return "danger";
    }else{
      return "dark";
    }
  }

  colorBoton2I (state: boolean):string{
    if(state){
      return "success";
    }else{
      return "dark";
    }
  }

  colorBoton2D (state: boolean):string{
    if(state){
      return "danger";
    }else{
      return "dark";
    }
  }


  colorBoton3I (state: boolean):string{
    if(state){
      return "success";
    }else{
      return "dark";
    }
  }

  colorBoton3D (state: boolean):string{
    if(state){
      return "danger";
    }else{
      return "dark";
    }
  }

  colorBotonAllI (state: boolean):string{
    if(state){
      return "success";
    }else{
      return "dark";
    }
  }

  colorBotonAllD (state: boolean):string{
    if(state){
      return "danger";
    }else{
      return "dark";
    }
  }

  
  async loadStateAndSetColors() {
    const led1Ref = doc(this.db, 'controlLED', 'LED1');
    const led2Ref = doc(this.db, 'controlLED', 'LED2');
    const led3Ref = doc(this.db, 'controlLED', 'LED3');

    const led1Snap = await getDoc(led1Ref);
    const led2Snap = await getDoc(led2Ref);
    const led3Snap = await getDoc(led3Ref);

    if (led1Snap.exists()) {
      const data1 = led1Snap.data();
      this.Button1I = data1?.['encender']?? false;
    }
    if (led2Snap.exists()) {
      const data2 = led2Snap.data();
      this.Button2I = data2?.['encender']?? false;
    }
    if (led3Snap.exists()) {
      const data3 = led3Snap.data();
      this.Button3I = data3?.['encender']?? false;
    }
    this.ButtonAllI = this.Button1I && this.Button2I && this.Button3I;  
  }

  async saveStateData() {
    const led1Ref = doc(this.db, 'controlLED', 'LED1');
    const led2Ref = doc(this.db, 'controlLED', 'LED2');
    const led3Ref = doc(this.db, 'controlLED', 'LED3');

    await setDoc(led1Ref, { encender: this.Button1I });
    await setDoc(led2Ref, { encender: this.Button2I });
    await setDoc(led3Ref, { encender: this.Button3I });

  }



  async loadStateAndSetColors2() {
    const led1Ref = doc(this.db, 'controlLED', 'LED1');
    const led2Ref = doc(this.db, 'controlLED', 'LED2');
    const led3Ref = doc(this.db, 'controlLED', 'LED3');

    const led1Snap = await getDoc(led1Ref);
    const led2Snap = await getDoc(led2Ref);
    const led3Snap = await getDoc(led3Ref);

    if (led1Snap.exists()) {
      const data1 = led1Snap.data();
      this.Button1D = data1?.['apagar']?? false;
    }
    if (led2Snap.exists()) {
      const data2 = led2Snap.data();
      this.Button2D = data2?.['apagar']?? false;
    }
    if (led3Snap.exists()) {
      const data3 = led3Snap.data();
      this.Button3D = data3?.['apagar']?? false;
    }
    this.ButtonAllD = this.Button1D && this.Button2D && this.Button3D;  
  }

  async saveStateData2() {
    const led1Ref = doc(this.db, 'controlLED', 'LED1');
    const led2Ref = doc(this.db, 'controlLED', 'LED2');
    const led3Ref = doc(this.db, 'controlLED', 'LED3');

    await setDoc(led1Ref, { apagar: this.Button1D });
    await setDoc(led2Ref, { apagar: this.Button2D });
    await setDoc(led3Ref, { apagar: this.Button3D });

  }

}