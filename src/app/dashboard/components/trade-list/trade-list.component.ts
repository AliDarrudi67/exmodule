import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ITradeInterface} from "../../../core/interfaces/trade.interface";
import {MockService} from "../../../core/services/mock.service";

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.scss']
})
export class TradeListComponent {
  displayedColumns: string[] = ['trade', 'dateTime', 'tradeType', 'triggeredBy', 'currencySold', 'price', 'currencyAcquired'];
  dataSource!: MatTableDataSource<ITradeInterface>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('tableParent') tableParent!: ElementRef;
  isInEndOfRules = false;
  hasFadeEffect = false

  constructor(private mockService: MockService) {
    this.getTrades()
  }

  ngOnInit(): void {
    setTimeout(
      () => {
        if (this.isTextOverflow('tableParent')) {
          this.hasFadeEffect = true
        }
      }, 100
    )
  }

  getTrades() {
    this.mockService.getUsers().subscribe(
      (response) => {
        console.log(response)
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  scroll() {
    this.isInEndOfRules = this.tableParent.nativeElement.scrollHeight - this.tableParent.nativeElement.scrollTop === this.tableParent.nativeElement.clientHeight;
  }

  isTextOverflow(elementId: string): boolean {
    const elem = document.getElementById(elementId);
    if (elem)
      return (elem.offsetHeight < elem.scrollHeight);
    return false;
  }
}
