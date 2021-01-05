import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-transcation-history',
  templateUrl: './transcation-history.component.html',
  styleUrls: ['./transcation-history.component.css']
})
export class TranscationHistoryComponent implements OnInit {
  histories = [];
  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.bankService.history()
      .subscribe((data: any) => {
        this.histories = data.history;
      })
  }

}
