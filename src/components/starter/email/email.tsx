import { component$ } from "@builder.io/qwik";
import { useAuthSession, useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  const signOut = useAuthSignout();

  return (
    <>
      <div>{session.value?.user?.name}</div>
      <button
        onClick$={() =>
          signOut.submit({ callbackUrl: "http://locahost:5173/" })
        }
      >
        Sign Out
      </button>
    </>
  );
});
