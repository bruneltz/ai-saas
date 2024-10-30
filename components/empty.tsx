import Image from "next/image";

interface EmptyProps {
    label: string;
}

export function Empty(props: EmptyProps) {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative size-72">
                <Image
                    alt="Empty"
                    fill
                    src="/empty.png"
                />
            </div>
            <p className="text-muted-foreground text-sm text-center">
                {props.label}
            </p>
        </div>
    )
}