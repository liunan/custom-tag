import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Output() itemAdded:EventEmitter<string> = new EventEmitter<string>();
  addItem(item:string){
    console.log(`${item} to be added!`);
    this.items.push(item);  
    // 向外发送自定义事件
    this.itemAdded.emit(item);
  }

  items:string[] =[];
}
