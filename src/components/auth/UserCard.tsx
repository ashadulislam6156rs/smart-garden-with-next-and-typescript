"use client";

import { useSession } from "next-auth/react";

const UserCard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>User not logged in</p>;
  }

  return (
    <div>
      <h1>User Client</h1>
      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email ?? "No email"}</p>
    </div>
  );
};

export default UserCard;
