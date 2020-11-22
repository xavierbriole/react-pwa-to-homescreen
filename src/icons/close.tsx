import * as React from 'react'

interface Props {
  className: string
  onClick: () => void
}

export default function Close({ className, onClick }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 496 496'
      className={className}
      onClick={onClick}
    >
      <path d='M248 0C111.033 0 0 111.033 0 248s111.033 248 248 248 248-111.033 248-248C495.841 111.099 384.901.159 248 0zm0 480C119.87 480 16 376.13 16 248S119.87 16 248 16s232 103.87 232 232c-.141 128.072-103.928 231.859-232 232z' />
      <path d='M361.136 134.864a8 8 0 00-11.312 0L248 236.688 146.176 134.864a8 8 0 10-11.312 11.312L236.688 248 134.864 349.824a8 8 0 00-.196 11.312 8 8 0 0011.508 0L248 259.312l101.824 101.824a8 8 0 0011.312-.196 8 8 0 000-11.116L259.312 248l101.824-101.824a8 8 0 000-11.312z' />
    </svg>
  )
}
