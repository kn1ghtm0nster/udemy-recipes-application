import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // using custom event emitter to mimic route behavior and listen for changes on featureSelected property to change rendered content.
  @Output() featureSelected = new EventEmitter<string>();

  constructor(){}

  /**
   * Method responsible for switching route views based on the selected navigation link.
   * 
   * @param {string} feature - name of the selected navigation link.
   * @returns {void}
   */
  public onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
}
