import PropTypes from 'prop-types';

export const Hola =({user, id, title}) => {
    return (
        <>
        <h1>H1 chido {user}</h1>
        <h2>H2 chido {title}</h2>
        </>
    )
}

//Sirve para validar los props
Hola.propTypes = {
    title:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
}

Hola.defaultProps = {
    title: 'Default Title'
}