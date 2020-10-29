import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  @ViewChild('frame', {static:true}) frame : ElementRef;

  transactions = [];
  selected_transaction : any;

  constructor(private transactionsService : TransactionService) { }

  ngOnInit(): void {
    this.transactionsService.getAllTransactions().subscribe(
      res=>{
        this.transactions = res;
      },
      err=>{},
    );
    // console.log(this.frame.nativeElement);
  }

  onClickItem(event, index){
    console.log("onClickItem");
    this.selected_transaction = this.transactions[index];
    console.log(this.selected_transaction);
  }

}
