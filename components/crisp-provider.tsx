"use client"

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export function CrispChat() {
    useEffect(() => {
        Crisp.configure("d5182266-13e5-4f78-9c70-451a895d05c1")
    }, [])

    return null;
}

export default function CrispProvider() {
    return <CrispChat />
}