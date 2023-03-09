/**
 * Deep copy and objectif without keeping the reference
 * @param object The object to copy
 * @returns An object
 */
export const deepCopy = <T>(object: T): T => {
  return JSON.parse(JSON.stringify(object));
};
