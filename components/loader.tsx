import Image from "next/image";

export function Loader() {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="size-10 relative animate-spin">
                <Image
                    alt="logo"
                    fill
                    src="/vercel.svg"
                />
            </div>
            <p className="text-sm text-muted-foreground">
                Genius is thinking...
            </p>
        </div>
    )
}