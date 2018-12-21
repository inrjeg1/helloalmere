import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ConfigurationService {

  config: any;

  constructor() {
    this.config = environment;
  }
}
