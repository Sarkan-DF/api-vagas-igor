import { CacheRepository } from "../../../../main/database/repositoies/cache.repository";
import { UserType } from "../../../models/user-type.model";
import { Result } from "../../../shared/util";
import { Usecase } from "../../../shared/util/usecase.contract";
import { UserRepository } from "../../user/repositories/user.repository";

export class ListCandidateUsecase implements Usecase {
  public async execute(): Promise<Result> {
    const repository = new UserRepository();
    const cacheRepository = new CacheRepository();

    const cacheResult = await cacheRepository.get("candidates");
    if (cacheResult) {
      return {
        ok: true,
        message: "Candidates successfully listed (cache!!!)",
        data: cacheResult,
        code: 200,
      };
    }

    const result = await repository.list(UserType.Candidate);
    const data = result?.map((candidate) => candidate.toJson());

    await cacheRepository.set("candidates", data);

    return {
      ok: true,
      message: "Candidates successfully listed",
      data: result?.map((candidate) => candidate.toJson()),
      code: 200,
    };
  }
}
