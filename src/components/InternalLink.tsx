import { Link } from "gatsby-link";
import React from "react";

export default function InternalLink({ to, msg }: { to: string, msg: string }) {
    return (
        <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to={to}>
            {msg}
        </Link>
    )
}