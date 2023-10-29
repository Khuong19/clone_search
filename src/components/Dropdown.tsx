import React from 'react'
interface Option {
    id: string;
    displayName: string;
}
interface SelectInputProps {
    id: string;
    onChange: (optionId: Option['id']) => void;
    options: Option[];
}
const options = [
    {
        id: '1',
        displayName: 'Option 1',
      },
      {
        id: '2',
        displayName: 'Option 2',
      },
      {
        id: '3',
        displayName: 'Option 3',
      },
]
const Dropdown = ({
    id,
    onChange,
    options,
}: SelectInputProps) => {
  return (
    <select id={id} onChange={(e) => onChange(e.target.value
        )}>
            {options.map((option)=>(
            <option key={option.id} value={option.id}>
                {option.displayName}
            </option>
        ))
    }
    </select>
  )
}

export default Dropdown