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
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-6">素数判定</h2>
            <input
                className="border border-gray-300 rounded-md p-2 text-lg mb-4"
                type="number"
                placeholder="数字を入力"
                onChange={(e) => {
                    const v = Number(e.target.value);
                    setValue(Number(is_prime(BigInt(v))));
                }}
            />
            <div className="text-lg">
                {value === 0 ? "素数です" : `少なくとも${value}割り切れます`}
            </div>
        </div>
    );
}

export const Head = () => <title>素数判定</title>
