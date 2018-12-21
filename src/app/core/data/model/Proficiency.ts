export class Proficiency {
  public beginner: Boolean;
  public intermediate: Boolean;
  public advanced: Boolean;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
