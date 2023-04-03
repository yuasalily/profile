import React, { useEffect } from "react"
import InternalLink from "../../components/InternalLink";

export default function Wasm() {
    return (
        <>
            <h1>Wasm</h1>
            <InternalLink to="/wasm/algorithms" msg="アルゴリズム" />
        </>
    )
}

export const Head = () => <title>Wasm</title>