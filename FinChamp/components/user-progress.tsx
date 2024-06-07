import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
    activeCourse: typeof courses.$inferSelect; //replace with database types
    hearts: number;
    points: number;
    // hasActiveSubscription: boolean;
};

export const UserProgress = ({
    activeCourse,
    points,
    hearts,
}: Props) => {
    return (
        <div className="flex items-bottom justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-md border"
                        width={34}
                        height={34}
                    />
                    {/* {activeCourse.title} */}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/point.png" height={28} width={28} alt="Points" className="mr-2" />
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image src="/heart.png" height={28} width={28} alt="Hearts" className="mr-2" />
                    {/* {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" : hearts} */}
                    {hearts}
                </Button>
            </Link>
        </div>
    )
}