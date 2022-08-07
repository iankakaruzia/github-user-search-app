type LinkProps = {
  href?: string
  label: string | null
}

export function Link({ href, label }: LinkProps) {
  return (
    <a
      href={href}
      className={`${
        !href ? 'pointer-events-none' : 'hover:underline'
      } md:block md:overflow-hidden md:text-ellipsis`}
      target='_blank'
      rel='noreferrer'
      aria-disabled={!href}
    >
      <span className={!label ? 'opacity-75' : ''}>
        {!!label ? label : 'Not Available'}
      </span>
    </a>
  )
}
