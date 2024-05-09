import { CreateUserUseCaseInterface } from "./createUsersUseCase.interface";

export interface SuccessResponseInterface {
  status: number;
  message: string;
  object: CreateUserUseCaseInterface;
}
