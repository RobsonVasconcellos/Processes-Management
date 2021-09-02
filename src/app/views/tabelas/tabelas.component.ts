import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {
  panelOpenState = false;
  
  @Output() fechado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.fechado.emit(true);
  }

}
