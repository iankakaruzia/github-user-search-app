export type Statistic = {
  label: string
  value: number
}

type StatisticsProps = {
  stats: Statistic[]
}

export function Statistics({ stats }: StatisticsProps) {
  return (
    <section className='grid grid-flow-col  grid-cols-3 rounded-[10px] bg-gray-200 px-[14px] py-[18px] dark:bg-gray-900 md:py-4 md:px-8 lg:ml-[154px]'>
      {stats.map(({ label, value }, index) => (
        <div
          key={`statistic-${index}`}
          className='flex flex-col items-center md:items-start'
        >
          <span className='mb-2 block text-[11px] leading-4 md:mb-[1px] md:text-heading4'>
            {label}
          </span>
          <span className='font-bold text-gray-600 dark:text-white md:text-heading2'>
            {value}
          </span>
        </div>
      ))}
    </section>
  )
}
