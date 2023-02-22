type SwrKeyType<TOption> = [string, TOption];
export const nameOf = (f: () => any, returnesFullName = false): string => {
  const fullName = f.toString().replace(/[ |\(\)=>]/g, "");
  if (!returnesFullName) {
    return (
      fullName.split(".").find((_, index, arr) => index === arr.length - 1) ??
      ""
    );
  }
  return fullName;
};

const useGenericSwr = <TOption, TResponse, TError>(
  option: TOption,
  operationName: string,
  api: (option: TOption) => Promise<TResponse>,
  shouldFetch: boolean
) => {
  const keyGenerator = (option?: TOption): SwrKeyType<TOption> | null => {
    if (option) {
      const query = Object.entries(option)
        .sort((a, b) => (a[0] > b[0] ? 1 : -1))
        .map((k, v) => `${k}=${v ?? ""}`)
        .join("&");

      const key = `${operationName}?${query}`;

      return [key, option];
    }
    return null;
  };
};

const useGenericMutation = () => {};

const useGenericInfinite = () => {};

export default { useGenericSwr, useGenericMutation, useGenericInfinite };
