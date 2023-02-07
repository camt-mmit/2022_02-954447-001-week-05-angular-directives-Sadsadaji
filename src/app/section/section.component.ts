import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InputType = { value:number };
export type SectionType = InputType[];
@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  items = [{value : 0}];
  texts = [this.createSection()];

  private createInput() : InputType {
    return { value: 0 };
  }

  private createSection() : InputType[] {
    return [ this.createInput()];
  }
  addSection() : void {
    this.texts.push(this.createSection());
  }

  removeSection(index : number) : void {
    this.texts.splice(index, 1);
  }

  addInput(text: InputType[]): void {
    text.push(this.createInput());
  }
  removeInput(text: InputType[], index:number) : void {
    text.splice(index, 1);
  }

  getResult(section: SectionType): number {
    return section
      .map((input) => input.value)
      .reduce((carry, value) => carry + value , 0);
  }
}
