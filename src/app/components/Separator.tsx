export default function Separator({ title }: { title: string }) {
  return (
    <div className="pt-16 pb-8 px-4 flex w-[80svw] sm:w-[65svw] lg:w-[50svw] gap-4 items-center">
      <div className="h-px flex-grow bg-primary opacity-35" />
      <div className="lg:text-xl font-light">{title}</div>
      <div className="h-px flex-grow bg-primary opacity-35" />
    </div>
  )
}
