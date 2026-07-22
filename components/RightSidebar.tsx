import Image from "next/image"
import React from "react"
import Link from "next/link"
import BankCard from "./BankCard"

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile pl-4">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name text-white">
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email text-grey">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks pr-3 pl-3">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My banks</h2>
          <Link href="/" className="flex gap-2">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              className="brightness-0 invert"
              alt="plus"
            />
            <h2 className="text-14 text-grey-600 font-semibold">Add Bank</h2>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute top-8 right-0 z-0 w-[90%]">
                <BankCard
                  key={banks[0].$id}
                  account={banks[0]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSidebar
