import React, { ReactNode } from 'react'

export const Card: React.FC<{
  children?: ReactNode
  background?: 'greyish' | 'bg-white'
}> = ({ children, background = '' }) => {
  const backgroundColor = background === 'greyish' ? 'bg-gray-200' : 'bg-white'
  return (
    <div
      className={`h-auto w-full overflow-hidden rounded-xl border border-solid border-gray-50 ${backgroundColor} shadow-md`}
      data-test="card"
    >
      {children}
    </div>
  )
}
