import React from "react";
import InternalLink from "../../../components/InternalLink";

export default function IsPrime() {
    return (
        <>
            <h2 className="text-2xl font-bold mb-6">アルゴリズム</h2>
            <InternalLink to="/wasm/algorithms/isPrime" msg="素数判定" />
            <InternalLink to="/wasm/algorithms/primeFactorization" msg="素因数分解" />
        </>
    );
}

export const Head = () => <title>アルゴリズム</title>
