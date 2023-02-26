import services from "@/services/api";
import { RestException } from "./../Models/exceptions";
import { GetUserType } from "./../Models/User";
import { nameOf, useGenericSwr } from "@/hooks/useSwr";

export const loadUsersSwr = (shouldFetch?: boolean) => {
  const {
    data: loadUsers,
    error: loadUsersError,
    isValidating: isLoadingUsers,
    mutate: revalidate,
  } = useGenericSwr<any, Array<GetUserType>, RestException>(
    `/api/swr`,
    nameOf(() => services.getAllUser),
    services.getAllUser,
    shouldFetch
  );

  return {
    loadUsers,
    loadUsersError,
    isLoadingUsers,
    revalidate,
  };
};
