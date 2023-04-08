import React from "react";
import InputNumber from "../../../components/InputNumber";
import { useEffect, useState } from "react";
import { is_prime } from "../../../wasm/algorithms/pkg/algorithms"

export default function IsPrime() {
    const [value, setValue] = useState(0)
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-6">素数判定</h2>
            <InputNumber onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => {
                const v = Number(e.target.value);
                setValue(Number(is_prime(BigInt(v))));
            }} />
            <div className="text-lg">
                {value === 0 ? "素数です" : `少なくとも${value}割り切れます`}
            </div>
        </div>
    );
}

export const Head = () => <title>素数判定</title>
