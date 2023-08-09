import { CacheRepository } from "../../../../main/database/repositoies/cache.repository";
import { UserType } from "../../../models/user-type.model";
import { Result, Usecase } from "../../../shared/util";
import { UserRepository } from "../../user/repositories/user.repository";

export class ListRecruitersUsecase implements Usecase {
  public async execute(): Promise<Result> {
    const repository = new UserRepository();
    const cacheRepository = new CacheRepository();

    const cacheResult = await cacheRepository.get("recruiters");
    if (cacheResult) {
      return {
        ok: true,
        message: "Recruiters successfully listed (cache!!!)",
        data: cacheResult,
        code: 200,
      };
    }

    const result = await repository.list(UserType.Recruiter);

    const data = result?.map((recruiter) => recruiter.toJson());

    await cacheRepository.set("recruiters", data);

    return {
      ok: true,
      message: "Recruiters successfully listed",
      data: data,
      code: 200,
    };
  }
}
