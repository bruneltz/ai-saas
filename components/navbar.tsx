import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export default async function NavBar() {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription();

    return (
        <div className="flex items-center p-4">
            <MobileSidebar count={apiLimitCount} isPro={isPro}></MobileSidebar>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"></UserButton>
            </div>
        </div>
    )
}