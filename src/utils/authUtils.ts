import { navigateTo } from "forgo-router"
import { getCookie } from "../lib/cookie.js";
import { verify } from "../lib/jwt.js";
import { JwtData } from "../types/index.js";

export async function ensureJwt<T>(
  then: (jwt: JwtData) => Promise<T>
): Promise<void | T> {
  const jwt = getCookie("border-patrol-jwt");

  return jwt !== undefined
    ? await (async () => {
        const decoded = verify(jwt);
        return decoded.valid
          ? await (async () => {
              const {
                value: { userId, providerUserId, provider },
              } = decoded;

              const data = {
                jwt,
                userId,
                providerUserId,
                provider,
              };

              return await then(data);
            })()
          : navigateTo("/login");
      })()
    : navigateTo("/login");
}
