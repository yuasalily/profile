import { Link } from "gatsby-link";
import React from "react";

export default function InternalLink({ to, msg }: { to: string, msg: string }) {
    return (
        <Link
            className="text-black hover:text-white hover:bg-black py-2"
            to={to}>
            {msg}
        </Link>
    )
}