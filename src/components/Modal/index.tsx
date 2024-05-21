import React from 'react'
import { Background } from './Background'


export type ModalVariant = 'side' | 'center' | 'full'
export type ModalCloseButtonSize = 's' | 'm'

export type ModalProps = {
  variant?: ModalVariant
  onClose?: () => void
  showCloseButton?: boolean
  width?: string
  height?: string
  children: React.ReactNode
  closeButtonSize?: ModalCloseButtonSize
}
export const Modal: React.FC<ModalProps> = ({
  variant = '',
  onClose = () => undefined,
  showCloseButton = true,
  width = '',
  height = '',
  children,
  closeButtonSize = 'm',
}) => {

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      data-test="modal"
    >
      <Background onClose={onClose} />
      <div
        className={`relative rounded-lg bg-white shadow-lg ${width} ${height}`}
      >

        {children}
      </div>
    </div>
  )
}
