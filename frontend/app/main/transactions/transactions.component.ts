import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  @ViewChild('frame', {static:true}) frame : ElementRef;

  isModalShow = false;

  transactions = [];
  selected_transaction : any;

  // 
  message : string;
  successStr = "거래내역 데이터베이스가 초기화되었습니다";
  failStr = "초기화에 실패했습니다"
  
  icons = {
    "백화점": "assets/images/ico_type2.png",
    "편의점": "assets/images/ico_type3.png",
    "식당": "assets/images/ico_type5.png",
    "포인트충전": "assets/images/ico_type1.png",
    "마트": "assets/images/ico_type4.png",
    "스포츠": "assets/images/ico_type6.png",
    "카페": "assets/images/ico_type7.png",
    "포인트교환": "assets/images/ico_type8.png",
    "교통카드충전": "assets/images/ico_type1.png",
};

  constructor(private transactionsService : TransactionService) { }

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions(){
    this.transactionsService.getAllTransactions().subscribe(
      res=>{
        this.transactions = res;
        this.selected_transaction = this.transactions[0];
      },
      err=>{},
    );
  }

  onClickItem(event, index){
    console.log("onClickItem");
    this.selected_transaction = this.transactions[index];
    console.log(this.selected_transaction);
  }

  onClickReset(event){
    this.transactionsService.reset().subscribe(
      res =>{
        // console.log("asdf", res);
        this.message = this.successStr;
        this.isModalShow = true;
      },
      error =>{
        console.log("error", error);
        this.message = this.failStr;
        this.isModalShow = true;
      }
    );
  }

  onClickModalBlur(){
    this.isModalShow = false;
  }
  onClickModalConfirm(){
    this.isModalShow = false;
    this.getAllTransactions();
  }

}
