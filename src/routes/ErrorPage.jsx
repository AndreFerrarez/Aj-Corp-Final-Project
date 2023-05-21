import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h3>Erro 404!</h3>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  )
}

export default ErrorPage
