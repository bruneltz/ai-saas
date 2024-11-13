"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";

export default function MobileSidebar(props: { count: number; isPro: boolean; }) {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu></Menu>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar count={props.count} isPro={props.isPro}/>
            </SheetContent>
        </Sheet>
    )
}