import { Routes } from '@angular/router';

import { SurveyComponent } from './survey/survey.component';
import { IntroductionComponent } from './introduction/introduction.component';

export const routes: Routes = [

    {
        path:'',
        component : IntroductionComponent,
        title : 'Itroduction'

    },
    {
        path:'survey',
        component : SurveyComponent,
        title : 'Survey'

    },
];
