export function isExpired(inputDate: Date): boolean {
  if (!inputDate) {
    return false;
  }
  const now = new Date();
  if (inputDate.setHours(0, 0, 0, 0) <= now.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
}
