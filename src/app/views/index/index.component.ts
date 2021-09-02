import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core'; 
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface tabelafuturo {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

export interface tabeladodia {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

export interface tabelaatrasado {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const dodia: tabeladodia[] = [
  {position: 1, name: '/assets/humano.png', weight: '/assets/seafi.png', symbol: '4 DIAS'},
  {position: 2, name: '/assets/robotico.png', weight: '/assets/sefis.png', symbol: '2 DIAS'},
  {position: 3, name: '/assets/sistemico.png', weight: '/assets/selog.png', symbol: '1 DIA'},
  {position: 4, name: '/assets/robotico.png', weight: '/assets/seope.png', symbol: '1 HORA'},
  {position: 5, name: '/assets/sistemico.png', weight: '/assets/selog.png', symbol: '45 MIN'},
  {position: 6, name: '/assets/humano.png', weight: '/assets/seafi.png', symbol: '90 DIAS'},
  {position: 7, name: '/assets/sistemico.png', weight: '/assets/selog.png', symbol: '30 DIAS'},
  {position: 8, name: '/assets/robotico.png', weight: '/assets/seope.png', symbol: '2 HORAS'},
  {position: 9, name: '/assets/humano.png', weight: '/assets/seafi.png', symbol: '15 MINUTOS'},
  {position: 10, name: '/assets/sistemico.png', weight: '/assets/selog.png', symbol: '25 MINUTOS'},
];

const atrasado: tabelaatrasado[] = [
  {position: 1, name: '/assets/humano.png', weight: '/assets/seafi.png', symbol: '4 DIAS'},
  {position: 2, name: '/assets/robotico.png', weight: '/assets/sefis.png', symbol: '2 DIAS'},
];

const futuro: tabelafuturo[] = [
  {position: 1, name: '/assets/humano.png', weight: '/assets/seafi.png', symbol: '4 DIAS'},
  {position: 2, name: '/assets/robotico.png', weight: '/assets/sefis.png', symbol: '2 DIAS'},
  {position: 3, name: '/assets/sistemico.png', weight: '/assets/selog.png', symbol: '1 DIA'},
  {position: 4, name: '/assets/robotico.png', weight: '/assets/seope.png', symbol: '1 HORA'},
  {position: 5, name: '/assets/sistemico.png', weight: '/assets/selog.png', symbol: '45 MIN'},
  {position: 6, name: '/assets/humano.png', weight: '/assets/seafi.png', symbol: '90 DIAS'},
  {position: 7, name: '/assets/sistemico.png', weight: '/assets/selog.png', symbol: '30 DIAS'},
  {position: 8, name: '/assets/robotico.png', weight: '/assets/seope.png', symbol: '2 HORAS'},
  {position: 9, name: '/assets/humano.png', weight: '/assets/seafi.png', symbol: '15 MINUTOS'},
  {position: 10, name: '/assets/sistemico.png', weight: '/assets/selog.png', symbol: '25 MINUTOS'},
  {position: 11, name: '/assets/humano.png', weight: '/assets/seafi.png', symbol: '3 DIAS'},
  {position: 12, name: '/assets/robotico.png', weight: '/assets/sefis.png', symbol: '38 DIAS'},
  {position: 13, name: '/assets/humano.png', weight: '/assets/seafi.png', symbol: '45 DIAS'},
  {position: 14, name: '/assets/sistemico.png', weight: '/assets/selog.png', symbol: '28 MINUTOS'},
];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<tabeladodia>(dodia);
  dataatrasado = new MatTableDataSource<tabelaatrasado>(atrasado);
  datafuturo = new MatTableDataSource<tabelafuturo>(futuro);
  panelOpenState = false;
  eventoaberto = false;
  myControl = new FormControl();
  options: string[] = ['Sungrow', 'TpLink', 'Google'];
  filteredOptions: Observable<string[]>;


  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.datafuturo.paginator = this.paginator;
  }

  abrirevento(variavel: any){
    this.eventoaberto = true;
  }

  fecharevento(){
    this.eventoaberto = false;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}

