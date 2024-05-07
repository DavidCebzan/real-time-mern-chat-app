import React from 'react'


type GenderCheckboxProps = {
    onCheckboxChange: (gender: 'male' | 'female') => void,
    selectedGender: string;
}
//2.38
function GenderCheckbox({onCheckboxChange, selectedGender}: GenderCheckboxProps) {
  return (
    <div className='flex mt-2'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
                <span className='label-text'>
                    Male
                </span>
                <input 
                type='checkbox' 
                className='checkbox border-indigo-900'
                checked={selectedGender === 'male'}
                onChange={() => onCheckboxChange('male')}
                />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
                <span className='label-text'>
                    Female
                </span>
                <input 
                type='checkbox' 
                className='checkbox border-indigo-900'
                onChange={() => onCheckboxChange('female')}
                checked={selectedGender === 'female'}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox