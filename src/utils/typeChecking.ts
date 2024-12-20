export const isNull = <T>(value: T | null): value is null => {
  return value === null;
};

export const isUndefined = <T>(value: T | undefined): value is undefined => {
  return value === undefined;
};

export const isNotNull = <T>(value: T | null): value is T => {
  return !isNull(value);
};

export const isNotUndefined = <T>(value: T | undefined): value is T => {
  return !isUndefined(value);
};

export const isEmpty = (value: any): boolean => {
  if (isNull(value) || isUndefined(value)) {
    return true;
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
};

export const isNotEmpty = (value: any): boolean => {
  return !isEmpty(value);
};

export const isFunction = (val: any): val is Function =>
  typeof val === 'function';
