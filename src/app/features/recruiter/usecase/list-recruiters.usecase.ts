import { UserType } from "../../../models/user-type.model";
import { Result } from "../../../shared/util/result.contract";
import { Usecase } from "../../../shared/util/usecase.contract";
import { UserRepository } from "../../user/repositories/user.repositer";

export class ListRecruitersUsecase implements Usecase {
  public async execute(): Promise<Result> {
    const repository = new UserRepository();
    const result = await repository.list(UserType.Recruite);

    return {
      ok: true,
      message: "Recruiters successfully listed",
      data: result,
      code: 200,
    };
  }
}
