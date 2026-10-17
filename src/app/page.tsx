import { Closing } from "@/components/sequel/closing"
import { Faq } from "@/components/sequel/faq"
import { Floor } from "@/components/sequel/floor"
import { Hero } from "@/components/sequel/hero"
import { Nav } from "@/components/sequel/nav"
import { Plans } from "@/components/sequel/plans"
import { Reminders } from "@/components/sequel/reminders"
import { Stories } from "@/components/sequel/stories"

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-paper">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Floor />
        <Plans />
        <Reminders />
        <Stories />
        <Faq />
      </main>
      <Closing />
    </div>
  )
}
