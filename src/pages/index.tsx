import React from "react"
import Layout from "../components/Layout"
import InternalLink from "../components/InternalLink";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <InternalLink to="/wasm" msg="Wasm" />
    </>
  );
}

export const Head = () => <title>Home</title>