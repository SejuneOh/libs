import { loadUsersSwr } from "@/swr/users";

export default function Swr() {
  const { loadUsers, loadUsersError, isLoadingUsers, revalidate } =
    loadUsersSwr();

  if (isLoadingUsers) return <p>Loading...</p>;
  if (loadUsersError) return <p>Error: {loadUsersError.title}</p>;
  return (
    <>
      <div className="container p-3">
        <h1 className=" font-bold text-xl mb-2">Using SWR</h1>
        <div className="border borde-black px-4 py-2">
          <ul>
            {loadUsers
              ? loadUsers.map((user, idx) => {
                  return <li key={idx}>{user.email}</li>;
                })
              : null}
          </ul>
        </div>
      </div>
    </>
  );
}
