import React from 'react'
import styles from '../style'

const Button = ({styles}) => {
    return (
        <button type="button" className={`py-4 font-poppins rounded-[10px] text-primary outline-none ${styles} font-medium mt-5 rounded px-6 bg-blue-gradient hover:bg-gray-gradient`}
        >Get Started</button>
    )
}

export default Button
