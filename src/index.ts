import "reflect-metadata";
import { Database } from "./main/database/database.connection";
import { Server } from "./main/server/express.server";
import { RedisDatabase } from "./main/database/redis.connection";

Promise.all([Database.connect(), RedisDatabase.connect()]).then(() => {
  Server.listen();
});
