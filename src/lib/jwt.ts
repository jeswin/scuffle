import jwt from "jsonwebtoken";
import * as jwtConfig from "../config/jwt.js";

export type IJwt = {
  [key: string]: string;
};

export type IVerifiedInvalidJwt = {
  valid: false;
};

export type IVerifiedValidJwt = {
  valid: true;
  value: IJwt;
};

export type IVerifiedJwt = IVerifiedInvalidJwt | IVerifiedValidJwt;

export function verify(token: string): IVerifiedJwt {
  try {
    return {
      valid: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: jwt.verify(token, jwtConfig.borderPatrolPublicKey) as any,
    };
  } catch (ex) {
    return { valid: false };
  }
}

export function decode(token: string): IJwt | undefined {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = jwt.decode(token) as any;
  return result || undefined;
}
