export function isExpired(inputDate: string | null): boolean {
  if (!inputDate) {
    return false;
  }
  const input = new Date(inputDate);
  const now = new Date();
  if (input.setHours(0, 0, 0, 0) <= now.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
}
