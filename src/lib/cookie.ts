export function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2
    ? (parts.pop() as string).split(";").shift()
    : undefined;
}
