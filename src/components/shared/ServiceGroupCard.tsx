import type { ServiceGroup } from '../../data/content'

export default function ServiceGroupCard({ group }: { group: ServiceGroup }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-line bg-paper-raised p-6 shadow-card">
      <div>
        <h3 className="text-lg font-bold">{group.title}</h3>
        <p className="mt-1 text-sm text-ink-soft">{group.summary}</p>
      </div>
      <ul className="grid gap-2 border-t border-line pt-4 text-sm">
        {group.items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="text-ink-soft">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
