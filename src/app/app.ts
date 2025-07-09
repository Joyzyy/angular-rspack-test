import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'angular rspack demo';
  public counter = signal(15);

  ngOnInit(): void {
    console.log("App component initialized!");
  }

  public increment() {
    this.counter.update((value) => value + 1);
  }

  public decrement() {
    this.counter.update((value) => value - 1);
  }
}
