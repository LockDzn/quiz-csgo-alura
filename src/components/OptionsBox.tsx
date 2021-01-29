import { useState } from 'react'
import { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { optionsSelectedUpdate } from '../store/actions/options/selected'

import { Option } from '../styles/pages/Quiz'

type Props = {
    options: string[]
}

const OptionsBox: FunctionComponent<Props> = ({ options }) => {
    const selected = useSelector((state) => state.selected)
    const dispatch = useDispatch()

    const handleSwitchOptions = (index) => {
        dispatch(optionsSelectedUpdate(index));
    }

    return (
        <>
            {options.map((option, index) => (
                <Option 
                    onClick={() => handleSwitchOptions(index)}
                    selected={selected == index} 
                    key={index}
                >
                    <input 
                        type="radio" 
                        id={`option_${index}`}
                        name="option"
                        checked={selected == index}
                        onChange={() => handleSwitchOptions(index)}
                    />
                    <label htmlFor={`option_${index}`}>{option}</label>
                </Option>
            ))}
        </>
    )
}

export default OptionsBox