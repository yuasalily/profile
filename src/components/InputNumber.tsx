import React from "react";

export default function InputNumber({ onChangeFunction }: { onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <input
            className="border border-gray-300 rounded-md p-2 text-lg mb-4"
            type="number"
            placeholder="数字を入力"
            onChange={onChangeFunction}
        />
    )
}