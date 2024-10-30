import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function UserAvatar() {
    const { user } = useUser();

    return (
        <Avatar className="size-8">
            <AvatarImage src={user?.imageUrl}/>
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    )
}