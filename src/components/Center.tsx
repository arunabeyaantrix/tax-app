import { ChildProps } from '@/modals'
import React from 'react'


export const Center:React.FC<ChildProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}
