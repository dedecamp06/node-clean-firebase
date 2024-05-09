import { createUser } from "../src/main/user.controller";
import { createUserUseCaseIndex } from "../src/useCase/createUser.useCase";
import { Request, Response } from "express";

jest.mock("../src/useCase/createUser.useCase", () => ({
  createUserUseCaseIndex: {
    handle: jest.fn(),
  },
}));

describe("Create in User Controller a good return", () => {
  it("should handle requests and return appropriate responses", async () => {
    const mockHandle = createUserUseCaseIndex.handle as jest.Mock;
    mockHandle.mockResolvedValue({
      status: 200,
      data: { docId: "expectedDocId" },
    });

    const req = {
      body: { name: "John Doe" },
    } as Request;

    const send = jest.fn();
    const status = jest.fn(() => ({ json: send }));
    const res = { status } as unknown as Response;

    await createUser(req, res);

    expect(mockHandle).toHaveBeenCalledWith({ name: "John Doe" });
    expect(status).toHaveBeenCalledWith(200);
    expect(send).toHaveBeenCalledWith({
      status: 200,
      data: { docId: "expectedDocId" },
    });
  });
});

describe("Create in User Controller a bad retuurn", () => {
  it("should handle requests and return a  Bad Request Response", async () => {
    const mockHandle = createUserUseCaseIndex.handle as jest.Mock;
    mockHandle.mockResolvedValue({
      status: 400,
      message: "Por favor insira o nome!",
    });

    const req = {
      body: {},
    } as Request;

    const send = jest.fn();
    const status = jest.fn(() => ({ json: send }));
    const res = { status } as unknown as Response;

    await createUser(req, res);

    expect(mockHandle).toHaveBeenCalledWith({});
    expect(status).toHaveBeenCalledWith(400);
    expect(send).toHaveBeenCalledWith({
      status: 400,
      message: "Por favor insira o nome!",
    });
  });
});
