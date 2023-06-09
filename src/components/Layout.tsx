import React from "react"

export default function Layout({ children }: { children: any }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            {children}
        </div>
    );
}