import { Text } from "@nextui-org/react";
import styles from "./style";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <Text h1>Davdev Gallery</Text>
        {children}
      </main>
      <style jsx>{styles}</style>
    </>
  );
}
