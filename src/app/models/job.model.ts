import { v4 } from "uuid";
import { Recruiter } from "./recruiter.model";

export class Job {
  private _id: string;

  constructor(
    private _descripion: string,
    private _enterprise: string,
    private _limitDate: Date,
    private _isActive: boolean,
    private _recruiter: Recruiter,
    private _maxCandidates?: number
  ) {
    this._id = v4();
  }
}
