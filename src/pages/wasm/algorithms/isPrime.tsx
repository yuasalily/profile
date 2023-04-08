import React from "react";
import InputNumber from "../../../components/InputNumber";
import { useState } from "react";
import { is_prime } from "../../../wasm/algorithms/pkg/algorithms"
import H2 from "../../../components/H2";

export default function IsPrime() {
    const [value, setValue] = useState(0)
    return (
        <>
            <H2 msg="素数判定" />
            <InputNumber onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => {
                const v = Number(e.target.value);
                setValue(Number(is_prime(BigInt(v))));
            }} />
            <div className="text-lg">
                {value === 0 ? "素数です" : `少なくとも${value}割り切れます`}
            </div>
        </>
    );
}

export const Head = () => <title>素数判定</title>
