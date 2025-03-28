export function useNonReactiveCopy(original) {
  return JSON.parse(JSON.stringify(original));
}