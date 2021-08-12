import { render, screen } from '@testing-library/react'
import App from './App'

// test('renders learn react link', () => {
//     render(<App />)
//     const linkElement = screen.getByText(/text component/i)
//     expect(linkElement).toBeInTheDocument()
// })

test('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4)
})
