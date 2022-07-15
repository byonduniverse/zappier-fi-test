import { FC } from 'react'

type Props = {
  fill?: string
}

const AlgorandIcon: FC<Props> = ({ fill = '#FAF8FF' }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12H2L7.5 2.5L8.19398 5.13712L4 12H6.5L8.875 7.725L10 12H12L10.2931 5.17241L11.5 3H9.75L9 0H7L0 12Z"
      fill={fill}
    />
  </svg>
)

export default AlgorandIcon
