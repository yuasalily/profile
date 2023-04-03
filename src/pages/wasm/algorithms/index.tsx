import { Link } from "gatsby-link";
import React from "react";
import { useEffect } from "react";
import InternalLink from "../../../components/InternalLink";

export default function IsPrime() {
    useEffect(() => {
        document.title = "アルゴリズム"
    }, []);
    return (
        <>
            <h2 className="text-2xl font-bold mb-6">アルゴリズム</h2>
            <InternalLink to="/wasm/algorithms/isPrime" msg="素数判定" />
        </>
    );
}

export const Head = () => <title>Wasm</title>
