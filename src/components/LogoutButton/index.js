import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const getBack = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/logout')
  }
  return (
    <div>
      <button type="button" onClick={getBack}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
