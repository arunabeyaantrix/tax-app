import React, { ReactNode } from 'react'

export const Card: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div
      className={`h-auto w-full overflow-hidden rounded-xl border border-solid border-gray-50 bg-white shadow-md`}
      data-test="card"
    >
      {children}
    </div>
  )
}
