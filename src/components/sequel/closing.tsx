import { buttonVariants } from "@/components/ui/button"
import { Wordmark } from "./mark"

// Footer closes on a single display line and a sparse row of links.
export function Closing() {
  return (
    <footer id="contact" className="scroll-mt-18 bg-void">
      <div className="mx-auto max-w-page px-5 pt-24 pb-10 sm:px-8 lg:pt-30">
        <h2 className="text-[64px] leading-[0.98] font-medium tracking-[-0.05em] sm:text-[104px] lg:text-display">
          Ready when <span className="payoff">you</span> are.
        </h2>
        <p className="mt-8 max-w-xl text-body-lg text-mute">
          No joining fee this month, WhatsApp reminders on every plan and a coach on the floor from 5 AM.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#plans" className={buttonVariants({ size: "lg" })}>
            Join now
          </a>
          <a href="#contact" className={buttonVariants({ variant: "ghost", size: "lg" })}>
            Contact us
          </a>
        </div>

        <div className="mt-24 grid gap-10 border-t border-graphite pt-10 md:grid-cols-3">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-body text-mute">
              Strength, conditioning and community in the heart of Bengaluru.
            </p>
          </div>
          <div>
            <p className="label text-smoke">Visit</p>
            <p className="mt-3 text-body text-mute">80 Feet Road, 4th Block, Koramangala, Bengaluru 560034</p>
            <p className="mt-2 text-body text-mute">Mon to Fri 5 AM to 11 PM, Sat and Sun 6 AM to 9 PM</p>
          </div>
          <div>
            <p className="label text-smoke">Contact</p>
            <p className="mt-3 text-body text-mute">+91 80000 00000</p>
            <p className="mt-2 text-body text-mute">hello@ironwarriors.example</p>
            <p className="mt-2 text-body text-mute">WhatsApp: +91 80000 00000</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 text-body text-smoke sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Iron Warriors. Demo website: no real payments or WhatsApp messages.</p>
          <nav aria-label="Footer" className="flex gap-6">
            <a href="#plans" className="hover:text-ink">Membership</a>
            <a href="#reminders" className="hover:text-ink">Reminders</a>
            <a href="#faq" className="hover:text-ink">Questions</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
