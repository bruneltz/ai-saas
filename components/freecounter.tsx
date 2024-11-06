"use client"

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

interface FreeCounterConfig {
    apiLimitCount: number;
}

export default function FreeCounter({apiLimitCount}  : FreeCounterConfig) {
    const [mounted, setMounted] = useState(false);

    // Trick to avoid hydration errors
    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
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
                    <Button className="w-full" variant="premium">
                        Upgrade
                        <Zap className="size-4 ml-2 fill-white"/>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}