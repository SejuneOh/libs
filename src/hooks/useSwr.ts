import useSWR from "swr";
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

const keyGenerator = <TOption>(
  option: TOption,
  operationName: string
): SwrKeyType<TOption> | null => {
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

export const useGenericSwr = <TOption, TResponse, TError>(
  option: TOption | undefined,
  urlOperationName: string,
  api: (option: TOption) => Promise<TResponse>,
  isFetchQuery?: boolean
) => {
  const fetcher = ([_, opt]: SwrKeyType<TOption>) => api(opt);

  const { data, isValidating, error, mutate } = useSWR<TResponse, TError>(
    () =>
      (isFetchQuery !== undefined ? isFetchQuery : true)
        ? keyGenerator(option, urlOperationName)
        : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isValidating, error, mutate };
};
