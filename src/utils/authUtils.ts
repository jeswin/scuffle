import { getCookie } from "../lib/cookie";
import { verify } from "../lib/jwt";
import { JwtData } from "../types";
import { navigateTo } from "forgo-router"

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
