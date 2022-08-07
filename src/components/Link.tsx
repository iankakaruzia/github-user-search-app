type LinkProps = {
  href: string
  label: string | null
}

export function Link({ href, label }: LinkProps) {
  const isValidLink = (label !== null && label !== '') || href !== ''

  return (
    <a
      href={href}
      className={!isValidLink ? 'pointer-events-none' : 'hover:underline'}
      target='_blank'
      rel='noreferrer'
    >
      <span className={!label ? 'opacity-75' : ''}>
        {!!label ? label : 'Not Available'}
      </span>
    </a>
  )
}
