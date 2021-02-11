export type APIResult<T> =
  | {
      success: false;
      error: string;
      errorCode: string;
    }
  | {
      success: true;
      result: T;
    };
