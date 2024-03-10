import React from "react";
import './globals.css'
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (<>
        <header className="bg-transparent h-auto flex-row flex sticky top-0">
            <Image
                className="box-border p-1 ml-5 mt-5"
                src='/logo.svg'
                alt="Manzily Logo"
                width={100} height={100}
                style={{ filter: 'invert(0.95)', transform: 'scaleX(-1)' }}
            />
        </header>
        {children}
        <footer>Footer Text</footer>
    </>)
}