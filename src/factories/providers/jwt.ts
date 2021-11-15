import { JwtProvider } from "../../providers/jwt";

export const makeJwtProvider = (): JwtProvider => {
  return new JwtProvider(process.env.JWT_SECRET);
}