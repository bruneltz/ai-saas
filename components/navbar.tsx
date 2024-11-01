import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

export default function NavBar() {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar></MobileSidebar>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"></UserButton>
            </div>
        </div>
    )
}