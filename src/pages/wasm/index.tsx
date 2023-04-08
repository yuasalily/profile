import React, { useEffect } from "react"
import InternalLink from "../../components/InternalLink";
import H2 from "../../components/H2";

export default function Wasm() {
    return (
        <>
            <H2 msg="Wasm" />
            <InternalLink to="/wasm/algorithms" msg="アルゴリズム" />
            <InternalLink to="/wasm/animations" msg="アニメーション" />
        </>
    )
}

export const Head = () => <title>Wasm</title>