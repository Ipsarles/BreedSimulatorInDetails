import { ApexChart, ApexTheme, ApexTitleSubtitle } from 'ng-apexcharts';

export class Chart {
  // id!:number;
  stats!: number[];
  details!: ApexChart;
  labels!: string[];
  title!: ApexTitleSubtitle;
  theme!:ApexTheme;
}
