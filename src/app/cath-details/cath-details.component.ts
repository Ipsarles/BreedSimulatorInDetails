import { Component, OnInit } from '@angular/core';
import { calcBreeding } from '../Calcs';
import { CathsService } from '../Service/caths.service';
import { Cathlete } from '../Models/CathModel';
import { ChartsComponent } from '../charts/charts.component';
import { Rarity } from '../Constant';

@Component({
  selector: 'app-cath-details',
  templateUrl: './cath-details.component.html',
  styleUrls: ['./cath-details.component.scss'],
})
export class CathDetailsComponent implements OnInit {
  next = false;
  cat1!: Cathlete;
  cat2!: Cathlete;
  ID1!: number;
  ID2!: number;
  genes!: any;
  body: number[] = [];
  color: number[] = [];
  environment: number[] = [];
  face: number[] = [];
  tail: number[] = [];
  ears: number[] = [];
  overAll: number[] = [];
  traits: number[][] = [
    this.body,
    this.color,
    this.environment,
    this.face,
    this.tail,
    this.ears,
    this.overAll,
  ];
  constructor(
    private cathService: CathsService,
    private chart: ChartsComponent
  ) {}

  ngOnInit(): void {}

  research(ID: number, i: number): void {
    if (i === 1) {
      this.cathService.getData(ID).subscribe((cath: Cathlete) => {
        // Appel de getData, permet de récupérer les attributs d'un chat.
        this.cat1 = cath;
      });
    } else if (i === 2) {
      this.cathService.getData(ID).subscribe((cath: Cathlete) => {
        // Appel de getData, permet de récupérer les attributs d'un chat.
        this.cat2 = cath;
      });
    }
  }
  onKey1(event: any) {
    this.ID1 = event.target.value;
    this.research(this.ID1, 1);
    if (this.cat1 !== undefined && this.cat2 !== undefined) {
      this.chart.ngOnInit();
    }
  }
  onKey2(event: any) {
    this.ID2 = event.target.value;
    this.research(this.ID2, 2);
    if (this.cat1 !== undefined && this.cat2 !== undefined) {
      this.chart.ngOnInit();
    }
  }

  doCalc(
    cat1: Cathlete,
    cat2: Cathlete //: number[][]
  ) {
    if (this.next) {
      this.next = false;
    }
    if (cat1.level == 0 || cat2.level == 0) {
    } else {
      this.genes = calcBreeding(cat1, cat2);
      this.body.splice(0);
      this.color.splice(0);
      this.environment.splice(0);
      this.face.splice(0);
      this.tail.splice(0);
      this.ears.splice(0);
      this.overAll.splice(0);
      for (let traits in this.genes.genes) {
        // console.log(this.genes.genes[traits]);
        for (let rarity in this.genes.genes[traits]) {
          // console.log(rarity);
          if (traits === 'body') {
            this.body.push(this.genes.genes[traits][rarity]);
          }
          if (traits === 'color') {
            this.color.push(this.genes.genes[traits][rarity]);
          }
          if (traits === 'environment') {
            this.environment.push(this.genes.genes[traits][rarity]);
          }
          if (traits === 'face') {
            this.face.push(this.genes.genes[traits][rarity]);
          }
          if (traits === 'tail') {
            this.tail.push(this.genes.genes[traits][rarity]);
          }
          if (traits === 'ears') {
            this.ears.push(this.genes.genes[traits][rarity]);
          }
        }
      }
      for (let RARITY in this.genes.rarity) {
        this.overAll.push(this.genes.rarity[RARITY]);
      }
      console.log(this.overAll);
      if (!this.next) {
        this.next = true;
      }
      if (this.next) {
        this.next = false;
      }
      if (!this.next) {
        this.next = true;
      }

    }
  }
  reset() {
    this.next = false;
    this.cat1.level = 0;
    this.cat2.level = 0;
    this.ID1 = 0;
    this.ID2 = 0;
  }
}

