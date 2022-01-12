const base = process.env.REACT_APP_URL_TRANSFER_LINK;

function generateID(len: number): string {
  const maxlen = 8;
  const min = Math.pow(16, Math.min(len, maxlen) - 1);
  const max = Math.pow(16, Math.min(len, maxlen)) - 1;
  const n = Math.floor(Math.random() * (max - min + 1)) + min;
  let r = n.toString(16);

  while (r.length < len) {
    r = r + generateID(len - maxlen);
  }
  return r;
}

export function generateLink(): string {
  return base + generateID(12);
}
