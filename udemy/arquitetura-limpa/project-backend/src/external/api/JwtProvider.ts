import jwt from 'jsonwebtoken';

export default class JwtProvider {
  constructor(private secret: string) {
    if (!this.secret) {
      throw new Error('JWT secret is required');
    }
  }

  sign(payload: any): string {
    return jwt.sign(payload, this.secret, {
      expiresIn: '1h',
    });
  }

  verify(token: string): string | object {
    try {
      return jwt.verify(token, this.secret);
    } catch (error: any) {
      throw new Error('Invalid token');
    }
  }
}
