"use client"

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeCounterConfig {
    apiLimitCount: number;
    isPro: boolean;
}

export default function FreeCounter({apiLimitCount = 0, isPro = 0}  : FreeCounterConfig) {
    const [mounted, setMounted] = useState(false);
    const proModal = useProModal();

    // Trick to avoid hydration errors
    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }

    if(isPro) {
        return null;
    }

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>
                            {apiLimitCount} / {MAX_FREE_COUNTS} Free generations
                        </p>
                        <Progress 
                            className="h-3 bg-white/90"
                            value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                        />
                    </div>
                    <Button className="w-full" variant="premium"
                        onClick={proModal.onOpen}>
                        Upgrade
                        <Zap className="size-4 ml-2 fill-white"/>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}