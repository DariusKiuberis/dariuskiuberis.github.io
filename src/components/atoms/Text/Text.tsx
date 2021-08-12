// import PropTypes from 'prop-types'
import { Container } from './styles'

interface Person {
    firstName: string
    lastName: string
}

interface Props {
    text?: string
    label?: string
    fn?: (bob: string) => string
    person?: Person
}

const Text: React.FC<Props> = ({ text, label }): JSX.Element => {
    return (
        <Container>
            {label} Text component {text}{' '}
        </Container>
    )
}

// Text.propTypes = {
//     text: PropTypes.string,
// }

Text.defaultProps = {
    text: 'default text',
}

export default Text
