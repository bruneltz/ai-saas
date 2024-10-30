import { Avatar, AvatarImage } from "./ui/avatar";

export function BotAvatar() {

    return (
        <Avatar className="size-8">
            <AvatarImage className="p-1" src="/vercel.svg"/>
        </Avatar>
    )
}