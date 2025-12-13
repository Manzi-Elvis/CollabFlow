'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

type Props = {
  id: string
  title: string
  description?: string
  onClick?: (id: string) => void
  onContextMenu?: (id: string) => void
}

export default function TaskCard({
  id,
  title,
  description,
  onClick,
  onContextMenu,
}: Props) {
  return (
    <motion.div
      layout
      tabIndex={0}
      role="button"
      aria-label={`Task: ${title}`}
      onClick={() => onClick?.(id)}
      onContextMenu={e => {
        e.preventDefault()
        onContextMenu?.(id)
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'rounded-lg bg-background p-3 shadow-sm cursor-pointer',
        'focus:outline-none focus:ring-2 focus:ring-primary',
        'transition-colors'
      )}
    >
      <p className="text-sm font-medium leading-snug">{title}</p>

      {description && (
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
          {description}
        </p>
      )}
    </motion.div>
  )
}