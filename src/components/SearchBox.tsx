import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'

type SearchBoxProps = {
  onSearch: (value: string) => Promise<{ errorMessage: string | null }>
}

export function SearchBox({ onSearch }: SearchBoxProps) {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (search.length === 0) {
      return
    }

    setIsLoading(true)

    const { errorMessage } = await onSearch(search)

    if (errorMessage) {
      setError(errorMessage)
    } else {
      setSearch('')
    }

    setIsLoading(false)
  }

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    setError('')
  }

  return (
    <section className='mb-4 h-[60px] rounded-2xl bg-gray-100 shadow-xl dark:bg-blue-900 dark:shadow-none md:mb-6 md:h-[69px]'>
      <form onSubmit={handleSubmit} className='h-full'>
        <div className='relative flex h-full items-center p-[7px] pl-4 md:p-[10px] md:pl-8'>
          <div className='relative mr-1 min-h-[20px] min-w-[21px] md:mr-3 md:min-h-[24px] md:min-w-[25px]'>
            <Image src='/assets/icon-search.svg' alt='' layout='fill' />
          </div>
          <input
            type='text'
            aria-invalid={error.length > 0}
            value={search}
            onChange={handleSearchChange}
            className={`h-full w-full overflow-hidden text-ellipsis border-0 bg-transparent px-0 pl-1 text-heading4 leading-[25px] text-gray-700 placeholder:text-blue-700 focus:outline-none focus:ring-0 dark:text-white md:pl-3 md:text-[18px] dark:placeholder:text-white${
              error.length ? ' pr-[112px]' : ''
            }`}
            placeholder='Search Github username...'
            required
          />
          {error && (
            <span className='absolute top-1/2 right-[112px] -translate-y-1/2 transform text-[15px] font-bold leading-[22px] text-red-500 md:right-[138px]'>
              {error}
            </span>
          )}
          <button
            type='submit'
            disabled={isLoading}
            className='h-full rounded-[10px] bg-blue-500 px-4 text-[14px] text-base font-bold leading-[21px] text-white transition-colors hover:bg-blue-300 md:px-6 md:leading-6'
          >
            Search
          </button>
        </div>
      </form>
    </section>
  )
}
