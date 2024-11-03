export interface ILanguage {
  languageId: number;
  language: string;
  logo: string;
  youtubePlayListUrl: string;
}
export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}
export interface LanguageTopic {
  languageTopicId: number;
  languageId: number;
  topicName: string;
  orderNo: number;
  youtubeVideoUrl: string;
}

export interface Queston {
  question: string;
  answer: string;
  topicName: string;
  languageTopicId: number;
  questionId: number;
  language: string;
  languageId: number;
  orderNo: number;
  logo: string;
  tags: any;
}
