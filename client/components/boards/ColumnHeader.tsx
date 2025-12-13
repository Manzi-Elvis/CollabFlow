type Props = {
  title: string
}

export default function ColumnHeader({ title }: Props) {
  return (
    <div className="flex items-center justify-between text-sm font-medium">
      <span>{title}</span>
      <button className="text-muted-foreground hover:text-foreground">•••</button>
    </div>
  )
}
