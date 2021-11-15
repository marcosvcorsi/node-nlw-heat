import jwt from 'jsonwebtoken';

export class JwtProvider {
  constructor(
    private readonly secret: string,
  ) {}

  async generateToken(data: Record<string, unknown>, expiresIn = '1d'): Promise<string> {
    return jwt.sign(data, this.secret, { expiresIn });
  }

  async verifyToken(token: string): Promise<Record<string, unknown>> {
    return jwt.verify(token, this.secret) as Record<string, unknown>;
  }
}