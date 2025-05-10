"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  data: {
    firstName: string;
    lastName: string;
    email: string;
    contactNo: string;
    message: string;
  };
}

export default function SuccessModal({ open, onClose}: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="text-center flex flex-col items-center justify-center gap-2 bg-white">
        <DialogHeader>
          <div className="flex justify-center">
            <Image height={200} width={200} src='/images/success.jpg' alt="success" priority loading="eager" />
          </div>
          <DialogTitle className="mt-2 text-xl font-semibold">
            Thank you for reaching out to us!
          </DialogTitle>
        </DialogHeader>

        <p className="text-muted-foreground text-sm text-center">
          We&apos;ve received your message and will respond shortly 😊
        </p>
      </DialogContent>
    </Dialog>
  )
}
