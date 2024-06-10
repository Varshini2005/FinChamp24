"use client";

import { refillHearts } from "@/actions/user-progress";
import { Button } from "@/components/ui/button";
import { constants } from "buffer";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

const POINTS_TO_REFILL = 50;

type Props = {
    hearts: number;
    points: number;
    // hasActiveSubscription: boolean;
};

export const Items = ({
    hearts,
    points,
    // hasActiveSubscription,
}: Props) => {
    const [pending, startTransition] = useTransition();

    const onRefillHearts = () => {
        if (pending || hearts === 10 || points < POINTS_TO_REFILL) {
            return;
        }

        startTransition(() => {
            refillHearts()
            .catch(() => toast.error("Something went wrong"))
        });
    };

    return (
        <ul className="w-full">
            <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Image 
                    src="/heart.png"
                    alt="Heart"
                    height={60}
                    width={60}
                />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Refill hearts
                    </p>
                </div>
                <Button
                onClick={onRefillHearts}
                    disabled={pending || hearts === 10 || points < POINTS_TO_REFILL}
                >
                    {hearts === 5
                    ? "full"
                    : (
                        <div className="flex items-center">
                            <Image
                                src="/point.png"
                                alt="point"
                                height={20}
                                width={20}
                            />
                            <p>
                                {POINTS_TO_REFILL}
                            </p>
                        </div>
                    )
                }
                </Button>
            </div>
        </ul>
    );
};