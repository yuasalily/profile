import React, { useEffect, useState } from "react";
import InputNumber from "../../../components/InputNumber";
import { prime_factorization } from "../../../wasm/algorithms/pkg/algorithms";

function formatSuperscript(text: string) {
    const words = text.split(',');
    return (
        <>
            {words.map((word, index) => {
                const sep = index == 0 ? '' : '×';
                const np = word.split('-');
                const n = np[0];
                const p = np[1];
                if (p == '1') {
                    return <>{sep + n}</>
                } else {
                    return <>{sep + n}<sup>{p}</sup></>
                }
            })}
        </>
    )
}

export default function PrimeFactorization() {
    const [value, setValue] = useState("");
    return (
        <>
            <h2>素因数分解</h2>
            <InputNumber onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(prime_factorization(BigInt(e.target.value)))
            }} />
            <div>{formatSuperscript(value)}</div>
        </>
    )
}

export const Head = () => <title>素因数分解</title>