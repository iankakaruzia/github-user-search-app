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
    <form onSubmit={handleSubmit} className='h-full'>
      <div className='relative flex h-full items-center p-[7px] pl-4'>
        <div className='relative mr-1 min-h-[20px] min-w-[21px]'>
          <Image src='/assets/icon-search.svg' alt='' layout='fill' />
        </div>
        <input
          type='text'
          aria-invalid={error.length > 0}
          value={search}
          onChange={handleSearchChange}
          className={`h-full w-full overflow-hidden text-ellipsis border-0 bg-transparent px-0 pl-1 text-gray-700 placeholder:text-blue-700 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-white${
            error.length ? ' pr-[94px]' : ''
          }`}
          placeholder='Search Github username...'
          required
        />
        {error && (
          <span className='absolute top-1/2 right-24 -translate-y-1/2 transform text-[15px] font-bold leading-[22px] text-red-500'>
            {error}
          </span>
        )}
        <button
          type='submit'
          disabled={isLoading}
          className='h-full rounded-[10px] bg-blue-500 px-4 text-[14px] font-bold leading-[21px] text-white'
        >
          Search
        </button>
      </div>
    </form>
  )
}
