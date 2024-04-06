import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-casillas',
  templateUrl: './casillas.component.html',
  styleUrls: ['./casillas.component.sass']
})
export class CasillasComponent{
  @Input () lapalabra!: string
  @Input () lasletras!: any []
  @Input () habilitar!: number
  @Output () error = new EventEmitter<any>()
  filas=[1,2,3,4,5,6]
  erronio(e:any){
    this.error.emit(e)
  }
}
