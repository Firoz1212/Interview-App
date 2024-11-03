import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  APIResponseModel,
  ILanguage,
  LanguageTopic,
  Queston,
} from 'src/app/model/language.model';
import { InterviewService } from 'src/app/service/interview.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  languageList: ILanguage[] = [];
  QuestionList: Queston[] = [];
  service = inject(InterviewService);

  topicList$: Observable<LanguageTopic[]> | undefined;
  selectedLanguage: number = 0;
  selectedTopic: number = 0;
  ngOnInit(): void {
    this.loadLanguage();
  }
  loadLanguage() {
    this.service.getAllLanguage().subscribe((res: APIResponseModel) => {
      this.languageList = res.data;
    });
  }
  onLanguageChange(event: any) {
    debugger;
    this.QuestionList = [];
    this.getQuesByLang(event);
    this.topicList$ = this.service.getTopicsBYLangId(event).pipe(
      map((item: APIResponseModel) => {
        return item.data;
      })
    );
  }
  onTopicChange() {
    this.service
      .getQuestionByTopicId(this.selectedTopic)
      .subscribe((res: APIResponseModel) => {
        this.QuestionList = res.data;
      });
  }
  getQuesByLang(id: number) {
    this.service.getQuestionByLangId(id).subscribe((res: APIResponseModel) => {
      this.QuestionList = res.data;
    });
  }
}
