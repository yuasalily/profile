import React from "react"
import H2 from "../components/H2";
import InternalLink from "../components/InternalLink";

export default function HomePage() {
  return (
    <>
      <H2 msg="Home" />
      <InternalLink to="/wasm" msg="Wasm" />
    </>
  );
}

export const Head = () => <title>Home</title>