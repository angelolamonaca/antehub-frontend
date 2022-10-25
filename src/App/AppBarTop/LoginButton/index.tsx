import { Fragment } from 'react'
import Mobile from '../LoginButton/Mobile'
import Desktop from '../LoginButton/Desktop'

const LoginButton = () => {
  return (
    <Fragment>
      <Mobile />
      <Desktop />
    </Fragment>
  )
}

export default LoginButton
