import React from 'react'

type Size = 's' | 'm' | 'l' | 'xl'
const sizeCss = (size: Size) => {
  switch (size) {
    case 's':
      return 'h-9' // 36px
    case 'm':
      return 'h-10' // 40px
    case 'l':
      return 'h-11' // 44px
    case 'xl':
      return 'h-12' // 48px
    default: {
      return ''
    }
  }
}

export type ButtonColor =
  | 'default'
  | 'gray'
  | 'purple'
  | 'red'
  | 'yellow'
  | 'green'
export type ButtonVariant = 'filled' | 'outlined'

const generateDisabledCss = (color: ButtonColor, fade: boolean) => {
  switch (color) {
    case 'gray':
      if (fade) {
        return 'text-gray-700 bg-gray-100 opacity-40 '
      }
      return 'text-white bg-gray-700 opacity-40'
    case 'purple':
      if (fade) {
        return 'text-purple-700 bg-purple-50 opacity-40'
      }
      return 'text-white bg-purple-700 opacity-40'
    case 'red':
      if (fade) {
        return 'text-red-600 bg-red-50 opacity-40'
      }
      return 'text-white bg-red-600 opacity-40 '
    case 'yellow':
      if (fade) {
        return 'text-yellow-700 bg-yellow-50 opacity-40'
      }
      return 'text-white bg-yellow-700 opacity-40'
    case 'green':
      if (fade) {
        return 'text-green-700 bg-green-50 opacity-40'
      }
      return 'text-white bg-green-700 opacity-40'
    default: {
      if (fade) {
        return 'text-blue-500 bg-blue-25 opacity-40'
      }
      return 'text-white bg-blue-500 opacity-40'
    }
  }
}

const generateActiveCss = (color: ButtonColor, fade: boolean) => {
  switch (color) {
    case 'gray':
      if (fade) {
        return 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-100 focus:ring-offset-0'
      }
      return 'text-white bg-gray-700 hover:bg-gray-8 00 focus:outline-none focus:ring focus:ring-gray-100 focus:ring-offset-0'
    case 'purple':
      if (fade) {
        return 'text-purple-700 bg-purple-50 hover:bg-purple-100 focus:outline-none focus:ring focus:ring-purple-50 focus:ring-offset-0'
      }
      return 'text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring focus:ring-purple-100 focus:ring-offset-0'
    case 'red':
      if (fade) {
        return 'text-red-600 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring focus:ring-red-50 focus:ring-offset-0'
      }
      return 'text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-100 focus:ring-offset-0'
    case 'yellow':
      if (fade) {
        return 'text-yellow-700 bg-yellow-50 hover:bg-yellow-100 focus:outline-none focus:ring focus:ring-yellow-50 focus:ring-offset-0'
      }
      return 'text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring focus:ring-yellow-100 focus:ring-offset-0'
    case 'green':
      if (fade) {
        return 'text-green-500 bg-green-50 hover:bg-green-100 focus:outline-none focus:ring focus:ring-green-50 focus:ring-offset-0'
      }
      return 'text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring focus:ring-green-100 focus:ring-offset-0'
    default: {
      if (fade) {
        return 'text-blue-500 bg-blue-25 hover:bg-blue-50 focus:outline-none focus:ring focus:ring-gray-100 focus:ring-offset-0'
      }
      return 'text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-50 focus:ring-offset-0'
    }
  }
}

const generateVariantCss = (
  variant: ButtonVariant,
  disabled: boolean,
  color: ButtonColor,
  fade: boolean
) => {
  switch (variant) {
    case 'filled': {
      const disabledCss = disabled
        ? `${generateDisabledCss(color, fade)} cursor-default`
        : generateActiveCss(color, fade)
      return `${disabledCss} border border-transparent`
    }
    case 'outlined': {
      const disabledCss = disabled
        ? 'text-gray-900 opacity-40'
        : 'text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-100 focus:ring-offset-0'
      return `${disabledCss} border border-gray-300`
    }
    default:
      return ''
  }
}


export type ButtonProps = {
  text: string
  disabled?: boolean
  size: Size
  color: ButtonColor
  fade?: boolean
  variant?: ButtonVariant
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}
export const Button: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  size,
  fade = false,
  color,
  variant = 'filled',
  fullWidth = false,
  type = 'button',
  onClick,
}) => {
  const width = fullWidth ? 'w-full' : ''
  const height = sizeCss(size)
  const variantCss = generateVariantCss(variant, disabled, color, fade)

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseUp={(e) => e.currentTarget.blur()}
      onClick={onClick}
      className={`group relative flex items-center justify-center rounded-md px-4 ${variantCss} ${height} ${width}`}
      data-test="button"
    >
      <div className="flex items-center">
       
        <p className='text-md'>
          {text}
        </p>
      </div>
    </button>
  )
}
