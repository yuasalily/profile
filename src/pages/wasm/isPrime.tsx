import React from "react";
import { useEffect, useState } from "react";
import init, { is_prime } from "../../wasm/algorithms/pkg/algorithms"

export default function IsPrime() {
    useEffect(() => {
        document.title = "素数判定"
        init();
    }, [])
    const [value, setValue] = useState(0)
    return (
        <>
            <h2>素数判定</h2>
            <input onChange={(e) => {
                const v = Number(e.target.value)
                setValue(Number(is_prime(BigInt(v))))
            }} />
            <div>{value == 0 ? "素数です" : "少なくとも" + value + "割り切れます"}</div>
        </>
    )
}

export const Head = () => <title>素数判定</title>
