"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useHeartsModal } from "@/store/use-hearts-modal";

export const HeartsModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = useHeartsModal();

    useEffect(() => setIsClient(true), []);

    const onClick = () => {
        close();
        router.push("/learn"); //change this link later
    };

    if (!isClient) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image
                        src="/bad.png"
                        alt="bad"
                        height={80}
                        width={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        You ran out of hearts!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Wait for sometime to fill the hearts, or purchase in the shop.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-col gap-y-4 w-full">
                    <Button
                        variant="primary"
                        className="w-full"
                        size="lg"
                        onClick={onClick}
                    >
                        Alright!
                    </Button>
                    <Button
                        variant="primaryOutline"
                        className="w-full"
                        size="lg"
                        onClick={close}
                    >
                        No thanks
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};