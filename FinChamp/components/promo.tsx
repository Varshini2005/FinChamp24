"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Promo = () => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4 mt-50">
            <div className="space-y-3">
                <div className="flex items-center gap-x-6">
                    <Image
                        src="/heart.png"
                        alt="heart"
                        height={26}
                        width={26}
                    />
                    <h3 className="font-bold text-lg">Earn more hearts</h3>
                </div>
                <p className="text-muted-foreground">
                    Convert XP into heart
                </p>
            </div>
            
            <Button
            asChild
                variant="secondary"
                className="w-full"
                size="lg"
            >
            <Link href="/shop">
                Earn hearts
            </Link>
            </Button>
        </div>
    )
}