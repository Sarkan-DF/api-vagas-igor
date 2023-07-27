import { v4 } from "uuid";

export class User {
  private _id: string;

  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _type: string,
    private _enterpriseName?: string
  ) {
    this._id = v4();
  }
}
