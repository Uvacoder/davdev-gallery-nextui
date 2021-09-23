import { useState } from 'react'

export default function useField(inputProps) {
  const [inputValue, setInputValue] = useState('')

  const onChange = (event) => {
    setInputValue(event.target.value)
  }

  return {
    onChange,
    ...inputProps,
    value: inputValue
  }
}
