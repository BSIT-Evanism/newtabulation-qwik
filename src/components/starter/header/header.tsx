import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import {
  useAuthSession,
  useAuthSignin,
  useAuthSignout,
} from "~/routes/plugin@auth";

export default component$(() => {
  const signIn = useAuthSignin();
  const session = useAuthSession();
  const signOut = useAuthSignout();

  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/examples/introduction/hello-world/"
              target="_blank"
            >
              Examples
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/tutorial/welcome/overview/"
              target="_blank"
            >
              Tutorials
            </a>
          </li>
          <li>
            <span>{session.value?.user?.email}</span>
          </li>
          <li>
            <h1>{session.value?.user?.name}</h1>
          </li>
          <li>
            {session.value?.user === undefined && (
              <button
                onClick$={() =>
                  signIn.submit({
                    providerId: "github",
                    options: { callbackUrl: "http://localhost:5173" },
                  })
                }
              >
                Sign In
              </button>
            )}
          </li>
          <li>
            {session.value?.user !== undefined && (
              <button onClick$={() => signOut.submit({ callbackUrl: "/" })}>
                Sign Out
              </button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
});
