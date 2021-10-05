import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { loggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [loggingService],
})
export class AccountComponent implements OnInit {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();
  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    this.logService.logStatusChange(status);
  }
  constructor(private logService: loggingService) {}

  ngOnInit(): void {}
}
