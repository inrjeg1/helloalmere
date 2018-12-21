export class Category {
  public single: Boolean;
  public doubles: Boolean;
  public mixed_doubles: Boolean;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
