"use client"
import React, { use } from "react"
import Image from "next/image"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname()
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="Menu icon"
            className="cursor-pointer brightness-0 invert"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-black">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 px-4"
          >
            <Image src="/icons/logo.svg" width={34} height={34} alt="logo" />
            <h1 className="text-26 font-ibm-plex-serif text-white-1 font-bold">
              Horizon
            </h1>
          </Link>
          <SheetClose>
            <div className="mobilenav-sheet">
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`/${item.route}/`)
                  return (
                    <SheetClose
                      key={item.route}
                      render={
                        <Link
                          href={item.route}
                          className={cn(
                            "mobilenav-sheet_close w-full",
                            isActive && "bg-bank-gradient"
                          )}
                        />
                      }
                    >
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                        className={cn({
                          "brightness-[3] invert-0": isActive,
                        })}
                      />
                      <p className="text-16 font-semibold text-white">
                        {item.label}
                      </p>
                    </SheetClose>
                  )
                })}
                USER
              </nav>
            </div>
          </SheetClose>
          FOOTER
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
