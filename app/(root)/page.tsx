import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import React from "react"
import RightSidebar from "@/components/RightSidebar"

const Home = () => {
  const loggedIn = {
    firstName: "Mido",
    lastName: "Bolt",
    email: "midobolt@yahoo.com",
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Välkommen"
            user={loggedIn?.firstName || "Guest"}
            subtext="Kom enkelt åt och hantera dina banktjänster."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={[1]}
            totalCurrentBalance={1500.75}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  )
}

export default Home
