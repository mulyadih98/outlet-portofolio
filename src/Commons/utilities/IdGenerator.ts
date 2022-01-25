import "reflect-metadata";
import { injectable } from "inversify";
import { nanoid } from "nanoid";
import IdGeneratorInterface from "./IdGeneratorInterface";

@injectable()
class IdGenerator implements IdGeneratorInterface {
  generateId(): string {
    return nanoid();
  };
}

export default IdGenerator;