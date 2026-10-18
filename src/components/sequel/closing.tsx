import { buttonVariants } from "@/components/ui/button"
import { Wordmark } from "./mark"

const hours = [
  ["Morning", "6:00 AM to 11:00 AM"],
  ["Evening", "4:00 PM to 10:00 PM"],
]

// A dark call-to-action band, then the footer with address, hours and contact.
export function Closing() {
  return (
    <footer id="contact" className="scroll-mt-16">
      <div className="dark bg-paper text-ink">
        <div className="mx-auto flex max-w-page flex-col gap-10 px-5 py-24 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-32">
          <div>
            <p className="eyebrow text-muted">No joining fee this month</p>
            <h2 className="display mt-6 text-[64px] sm:text-[104px] lg:text-[136px]">
              Start this
              <br />
              week.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[17px] text-ink/80">
              Walk in for a tour of the floor any day, or pick a plan online and start training
              tomorrow morning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#plans" className={buttonVariants({ size: "lg" })}>
                Choose a plan
              </a>
              <a href="tel:+918000000000" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Call the front desk
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paper">
        <div className="mx-auto max-w-page px-5 pt-16 pb-10 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Wordmark />
              <p className="mt-4 max-w-xs text-[15px] text-muted">
                Strength and conditioning gym in Tezpur, Assam.
              </p>
            </div>
            <div>
              <p className="eyebrow text-muted">Visit</p>
              <address className="mt-4 text-[15px] not-italic">
                Main Road
                <br />
                Tezpur, Assam 784001
              </address>
            </div>
            <div>
              <p className="eyebrow text-muted">Hours</p>
              <dl className="mt-4 grid gap-1 text-[15px]">
                {hours.map(([days, time]) => (
                  <div key={days} className="flex justify-between gap-4 sm:block">
                    <dt className="text-muted sm:inline">{days}</dt>
                    <dd className="sm:mt-0.5 sm:mb-2 sm:block tabular-nums">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p className="eyebrow text-muted">Contact</p>
              <ul className="mt-4 grid gap-1 text-[15px]">
                <li>
                  <a href="tel:+918000000000" className="hover:underline">+91 80000 00000</a>
                </li>
                <li>
                  <a href="mailto:hello@ironwarriors.example" className="hover:underline">
                    hello@ironwarriors.example
                  </a>
                </li>
                <li className="text-muted">WhatsApp on the same number</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-4 border-t border-rule pt-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Iron Warriors. Demo website: no real payments or WhatsApp messages.</p>
            <nav aria-label="Footer" className="flex gap-6">
              <a href="#plans" className="hover:text-ink">Membership</a>
              <a href="#reminders" className="hover:text-ink">Renewals</a>
              <a href="#faq" className="hover:text-ink">Questions</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
