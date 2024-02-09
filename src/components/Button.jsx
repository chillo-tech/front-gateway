function Button({isLoggedIn = false, position, handleClick}) {
  return (
    <button
        type="button"
        onClick={handleClick}
        style={{ background : isLoggedIn ? 'red' : 'green', color: 'white' }}
      >
       {position} {isLoggedIn ? 'DECONNEXION' : 'CONNEXION'}
      </button>
  )
}

export default Button
