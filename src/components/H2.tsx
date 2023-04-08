import React from "react";
export default function H2({ msg }: { msg: string }) {
    return (
        <h2 className="text-black font-bold text-4xl py-4">{msg}</h2>
    );
}