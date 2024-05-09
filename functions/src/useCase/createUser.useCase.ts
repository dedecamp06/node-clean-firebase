import {
  BadRequestResponseInterface,
  CreateUserUseCaseInterface,
  CreateUsersInterface,
  ErrorResponseInterface,
  SuccessResponseInterface,
} from "../domain/interface";
import { FirestoreRepository } from "../infra/firestone";
import { successResponse, errorResponse, badRequestResponse } from "./helpers";

class CreateUserUseCase {
  private firestoreRepository: FirestoreRepository;

  constructor() {
    this.firestoreRepository = new FirestoreRepository();
  }

  async handle(
    params: CreateUsersInterface
  ): Promise<
    | SuccessResponseInterface
    | ErrorResponseInterface
    | BadRequestResponseInterface
  > {
    try {
      const { name } = params;

      if (!name) {
        return badRequestResponse("Por favor insira o nome!");
      }

      const docId = await this.firestoreRepository.createUser(name);

      const result: CreateUserUseCaseInterface = { docId };

      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}

export const createUserUseCaseIndex = new CreateUserUseCase();
