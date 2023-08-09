import { RedisDatabase } from "../redis.connection";

export class CacheRepository {
  private _repository = RedisDatabase.connection;

  // get - buscar
  public async get(key: string) {
    const result = await this._repository.get(key);

    if (!result) {
      return null;
    }

    console.log(result);

    return JSON.parse(result);
  }

  // set - setar salvar
  public async set(key: string, value: any) {
    await this._repository.set(key, JSON.stringify(value));
  }

  // setex - setar com tempo
  public async setEx(key: string, value: any, seconds: number) {
    await this._repository.setex(key, seconds, JSON.stringify(value));
  }

  // delet - deletar dados
  public async delete(key: string) {
    await this._repository.del(key);
  }
}
