import { render, fireEvent } from '@testing-library/react'
import Button from './index'
import '@testing-library/jest-dom/extend-expect'

describe('<Button /> tests', () => {
    it('should render as default button', () => {
        const { container } = render(<Button />)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render a primary button', () => {
        // Arrange
        const variant = 'primary'

        // Act
        const { container } = render(<Button variant={variant} />)

        // Assert
        expect(container).toMatchSnapshot()
        expect(container.firstChild).toHaveClass(`button-${variant}`)
    })

    it('should render a secondary button', () => {
        // Arrange
        const variant = 'secondary'

        // Act
        const { container } = render(<Button variant={variant} />)

        // Assert
        expect(container).toMatchSnapshot()
        expect(container.firstChild).toHaveClass(`button-${variant}`)
    })

    it('should render the button with some text', () => {
        // Arrange
        const text = 'I am a button, I can be clicked'

        // Act
        const { getByText, container } = render(<Button>{text}</Button>)

        // Assert
        expect(container).toMatchSnapshot()
        getByText(text)
    })

    it('should call the click callback handler', () => {
        // Arrange
        const content = 'Hello, World!'
        const onClick = jest.fn()

        // Act

        const { getByText } = render(
            <Button onClick={onClick}>{content}</Button>
        )
        fireEvent.click(getByText(content))

        // Assert
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
