import { Link } from "gatsby-link";
import React from "react";
import { useEffect } from "react";

export default function IsPrime() {
    useEffect(() => {
        document.title = "アルゴリズム"
    }, [])
    return (
        <>
            <h2>アルゴリズム</h2>
            <Link to="/wasm/isPrime">素数判定</Link>
        </>
    )
}

export const Head = () => <title>Wasm</title>
