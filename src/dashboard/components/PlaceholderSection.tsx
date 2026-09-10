export default function PlaceholderSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-vial-text">{title}</h1>
      <div className="mt-4 flex flex-col items-center gap-2 rounded-lg bg-vial-surface p-12 text-center shadow-sm">
        <p className="font-semibold text-vial-text">Próximamente</p>
        <p className="max-w-sm text-sm text-slate-500">{description}</p>
      </div>
    </div>
  )
}
