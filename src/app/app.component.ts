import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  ThisAppTitle = "Poom's To Drink List";
  filter: "all" | "doing" | "done" = "all";

  allItems = [
    { description: "White Wine", done: true },
    { description: "Red Wine", done: true },
    { description: "Whiskey", done: false },
    { description: "Cocktails", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.push({
      description,
      done: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}