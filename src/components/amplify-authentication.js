import React from 'react'
import Amplify from 'aws-amplify'
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import config from '../aws-exports'

Amplify.configure(config)

const authReducer = (state, action) => {
  switch (action.type) {
    case 'authStateChange':
      return { authStage: action.authStage, user: action.user }
    default:
      throw Error(`action ${action.type} not found.`)
  }
}

const initialState = {}
function MyApp({ Component, pageProps }) {
  const [state, dispatch] = React.useReducer(authReducer, initialState)

  React.useEffect(() => {
    //this will fire anytime a user switches auth scenarios
    // https://docs.amplify.aws/ui/auth/authenticator/q/framework/react#methods--enums
    onAuthUIStateChange((nextAuthState, data) => {
      dispatch({
        type: 'authStateChange',
        authStage: nextAuthState,
        user: data,
      })
    })
  }, [])

  return state.authStage === AuthState.SignedIn && state.user ? (
    <>
      <AmplifySignOut />
      <Component {...pageProps} />
    </>
  ) : (
    <>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <table>
          <tr>
              <h1>Welcome to the Crosslink firmware factory</h1>
          </tr>
          <tr>
            <AmplifyAuthenticator usernameAlias="email">
                {/* don't include phone number for signup */}
                <AmplifySignUp
                slot="sign-up"
                formFields={[
                    { type: 'username', label: 'Email Address *', placeholder: 'Ender your email address', required: true },
                    { type: 'phone_number'},
                    { type: 'password' },
                ]}
                />
            </AmplifyAuthenticator>
        </tr>
        <tr>
          <footer>* required field<br/><br/>(C)2021 Daniel Crosslink Media 3D</footer>
        </tr>
      </table>
    </div>
    </>
  )
}

export default MyApp