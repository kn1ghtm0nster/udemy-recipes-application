import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // property that dictates which component is being rendered.
  loadedFeature = 'recipe';

  constructor() {}

  /**
   * method that sets the 'loadedFeature' property to render either the receipe or shopping list component.
   * 
   * @param {string} feature - string value that is passed from child header component whenever a navigation link is clicked.
   * @returns {void}
   */
  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
