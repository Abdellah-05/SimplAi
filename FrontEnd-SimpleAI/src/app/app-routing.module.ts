import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './second-page/container/home/home.component';
import { DatasetComponent } from './second-page/container/dataset/dataset.component';
import { CodeComponent } from './second-page/container/code/code.component';
import { QuestionAnswerComponent } from './second-page/container/question-answer/question-answer.component';
import { TryYourModelComponent } from './second-page/container/try-your-model/try-your-model.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'dataset' , component: DatasetComponent },
  { path: 'code' , component: CodeComponent },
  { path: 'question-answer' , component: QuestionAnswerComponent },
  { path: 'try-your-model' , component: TryYourModelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
