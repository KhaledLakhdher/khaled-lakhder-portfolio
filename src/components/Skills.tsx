import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I work with"
          description="From model training to containerized deployment."
        />

        <div className="card mt-8 divide-y divide-line overflow-hidden">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="grid gap-3 px-5 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8 sm:px-7 sm:py-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy sm:pt-1.5">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="chip transition hover:border-navy/40 hover:bg-navy hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
