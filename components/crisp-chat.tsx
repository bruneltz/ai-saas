"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export default function CrispChat() {
    useEffect(() => {
        Crisp.configure("d5182266-13e5-4f78-9c70-451a895d05c1")
    }, [])

    return null;
}