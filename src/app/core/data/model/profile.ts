import { Category } from './category';
import { Proficiency } from './Proficiency';

export class Profile {
  public id: number;
  public first_name: String;
  public last_name: String;
  public email: String;
  public phone_number: String;
  public category: Category = new Category();
  public proficiency: String;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
