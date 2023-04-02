import { Link } from "gatsby-link";
import React from "react";
import { useEffect } from "react";

export default function IsPrime() {
    useEffect(() => {
        document.title = "アルゴリズム"
    }, [])
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-6">アルゴリズム</h2>
            <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                to="/wasm/isPrime">
                素数判定
            </Link>
        </div>
    );
}

export const Head = () => <title>Wasm</title>
