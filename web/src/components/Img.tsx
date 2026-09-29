import { cn } from '@/lib/utils'

/* A photo from public/img. Lazy by default; `priority` for the hero. */
export function Img({ name, alt = '', className, priority }: { name: string; alt?: string; className?: string; priority?: boolean }) {
  return (
    <img src={`/img/${name}.webp`} alt={alt} width={1400} height={1000} decoding="async"
      loading={priority ? 'eager' : 'lazy'} {...(priority ? { fetchPriority: 'high' as const } : {})}
      className={cn('h-full w-full object-cover', className)} />
  )
}
