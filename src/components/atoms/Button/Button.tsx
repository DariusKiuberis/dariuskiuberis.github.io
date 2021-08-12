import * as React from 'react'

interface Button {
    variant?: 'primary' | 'secondary'
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<Button> = ({
    variant = 'primary',
    children,
    onClick,
}) => {
    return (
        <button
            className={`button button-${variant}`}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    )
}

export default Button
