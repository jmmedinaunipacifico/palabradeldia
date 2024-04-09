import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit {
  palabra!: string
  contador: number = 0;
  palabras = [
    'romeo',
    'barco',
    'lucio',
    'canta',
    'carro',
    'dejar',
    'aereo',
    'deber'
  ]
  letras: any[] = []
  constructor() { }
  ngOnInit(): void {
    let random = 0
    do {
      random = Math.round(Math.random() * this.palabras.length)
    } while (!this.palabras[random])
    console.log(this.palabras[random])
    this.palabra = this.palabras[random]
    this.letras = this.palabras[random].split('')
    console.log(this.letras)
  }
  enviar(){
    this.contador += 1
  }

  erronio(e:any){
    if (e === 'error') {
      console.log(e);
      if (this.contador > 0) {
        this.contador -= 1
      }
    }else if (e === true){
      console.log('ganastes')
      window.location.reload()
    }else if (e === true){
      if (this.contador ==6 ){
        console.log('vuelve a intentarlo')
        window.location.reload()
      }else{
        console.log('sigue intentando a intentarlo')
      }
    }
  }
}
