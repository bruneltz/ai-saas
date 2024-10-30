import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

export default function Heading(props: HeadingProps) {
    return (
        <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
            <div className={cn("p-2 w-fit rounded-md", props.bgColor)}>
                <props.icon className={cn("size-10", props.iconColor)} />
            </div>
            <div>
                <h2 className="text-3xl font-bold">
                    {props.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                    {props.description}
                </p>
            </div>
        </div>
    )
}