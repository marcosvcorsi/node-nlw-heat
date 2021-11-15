import { Request, Response } from "express";

export interface IController {
  handle: (request: Request, response: Response) => Promise<Response | void>;
}

export interface IService<P = Record<string, unknown>, R = Promise<void>> {
  execute: (payload: P) => R;
}