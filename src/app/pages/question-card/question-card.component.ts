import { Component, Input } from '@angular/core';
import { Queston } from 'src/app/model/language.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css'],
})
export class QuestionCardComponent {
  @Input() question!: Queston;
}
