import { Component, Input, OnInit } from '@angular/core';
import { Chart } from '../Models/ChartSpecs';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  constructor() {
  }
  @Input() traits!: number[][];

  palettes: string[] = [
    'palette1',
    'palette2',
    'palette3',
    'palette4',
    'palette5',
    'palette6',
    'palette7',
    'palette8',
    'palette9',
    'palette10',
  ];
  body: Chart = {
    stats: [0],
    details: {
      type: 'pie',
      toolbar: {
        show: true,
      },
    },
    labels: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
    title: { text: 'Body', align: 'center',style:{color:'#ffffff'} },
    theme: { palette: 'palette1' },
  };
  color: Chart = {
    stats: [0],
    details: {
      type: 'pie',
      toolbar: {
        show: true,
      },
    },
    labels: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
    title: { text: 'Color', align: 'center',style:{color:'#ffffff'} },
    theme: { palette: 'palette1' },
  };
  environment: Chart = {
    stats: [0],
    details: {
      type: 'pie',
      toolbar: {
        show: true,
      },
    },
    labels: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
    title: { text: 'Environment', align: 'center',style:{color:'#ffffff'} },
    theme: { palette: 'palette1' },
  };
  face: Chart = {
    stats: [0],
    details: {
      type: 'pie',
      toolbar: {
        show: true,
      },
    },
    labels: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
    title: { text: 'Face', align: 'center',style:{color:'#ffffff'} },
    theme: { palette: 'palette1' },
  };
  tail: Chart = {
    stats: [0],
    details: {
      type: 'pie',
      toolbar: {
        show: true,
      },
    },
    labels: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
    title: { text: 'Tail', align: 'center',style:{color:'#ffffff'} },
    theme: { palette: 'palette1' },
  };
  ears: Chart = {
    stats: [0],
    details: {
      type: 'pie',
      toolbar: {
        show: true,
      },
    },
    labels: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
    title: { text: 'Ears', align: 'center',style:{color:'#ffffff'} },
    theme: { palette: 'palette1' },
  };
  overAll: Chart = {
    stats: [0],
    details: {
      type: 'pie',
      toolbar: {
        show: true,
      },
    },
    labels: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
    title: { text: 'En somme', align: 'center',style:{color:'#ffffff'} },
    theme: { palette: 'palette1' },
  };
  global: Chart[] = [
    this.body,
    this.color,
    this.environment,
    this.face,
    this.tail,
    this.ears,
    this.overAll,
  ];

  ngOnInit(): void {
    this.body.stats = this.traits[0];
    this.color.stats = this.traits[1];
    this.environment.stats = this.traits[2];
    this.face.stats = this.traits[3];
    this.tail.stats = this.traits[4];
    this.ears.stats = this.traits[5];
    this.overAll.stats = this.traits[6];

  }
  updateTheme(e: any) {
    console.log(e);
    if (typeof e != typeof " a ") {
      e = e.target.value;
    }
    this.body.theme = { palette: e };
    this.color.theme = { palette: e };
    this.environment.theme = { palette: e };
    this.face.theme = { palette: e };
    this.tail.theme = { palette: e };
    this.ears.theme = { palette: e };
  }
}

  // updatestats() {
  //   this.body.stats = this.traits[0];
  //   this.color.stats = this.traits[1];
  //   this.environment.stats = this.traits[2];
  //   this.face.stats = this.traits[3];
  //   this.tail.stats = this.traits[4];
  //   this.ears.stats = this.traits[5];
  //   this.overAll.stats = this.traits[6];
  //   // console.log(this.overAll.stats);
  // }
