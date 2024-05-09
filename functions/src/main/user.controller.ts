import * as functions from "firebase-functions";
import { createUserUseCaseIndex } from "../useCase";
import { Request, Response } from "express";

export const createUser = functions.https.onRequest(
  async (req: Request, res: Response) => {
    const { body } = req;
    const result = await createUserUseCaseIndex.handle(body);
    res.status(result.status).json(result);
  }
);
