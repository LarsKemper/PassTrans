export const loadState = (ref: string) => {
  try {
    const state = localStorage.getItem(ref);
    if (!state) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = (data: any, ref: string): void => {
  try {
    const state = JSON.stringify(data);
    localStorage.setItem(ref, state);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const deleteState = (ref: string): void => {
  try {
    localStorage.removeItem(ref);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
