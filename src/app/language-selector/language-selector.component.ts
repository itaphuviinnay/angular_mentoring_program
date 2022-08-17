import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  selectedLanguage = 'en';

  constructor(private translate: TranslateService) {}

  selectLanguage(selectedLanguage: string) {
    this.translate.use(`${selectedLanguage}`);
  }
}
