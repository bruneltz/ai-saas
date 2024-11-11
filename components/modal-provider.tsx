"use client"

import { useState, useEffect } from "react";
import ProModal from "./pro-modal";

export function ModalProvider() {
    const [mounted, setMounted] = useState(false);

    // Trick to avoid hydration errors
    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }

    return (
        <>
            <ProModal />
        </>
    )
}