import React, {useState} from 'react'
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'
import { SignOut } from 'aws-amplify-react';
import {NavLink} from 'react-router-dom'
import { Auth } from 'aws-amplify'

const TopMenu = () => { 
  const [authState, setAuthState] = useState(false)
  const [isAdmin, setisAdmin] = useState(false)

  Auth.currentAuthenticatedUser().then((user)=>{
    const groups = user.signInUserSession.accessToken.payload["cognito:groups"]
    if(groups && groups.filter(f=>f === "Admin").length>0)
      setisAdmin(true)
    setAuthState(true)
  });
  if(!authState)
  {
    return null;
  }
  return (
    <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Image size='mini' src='/logo192.png' style={{ marginRight: '1.5em' }} />
        Crosslink Firmware Factory
      </Menu.Item>
      <Menu.Item><NavLink to={`/`}>Home</NavLink></Menu.Item>
      <Menu.Item><NavLink to={`/Marlin`}>Marlin</NavLink></Menu.Item>

      { isAdmin ? 
      <Dropdown item simple text='Admin'>
        <Dropdown.Menu>
          <Dropdown.Header>Configurations</Dropdown.Header>
          <Dropdown.Item href='/BuildDefinition'>Build Definitions</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> : null}
    </Container>
    <Container>
      <Menu.Item as="a"><SignOut/></Menu.Item>
    </Container>
  </Menu> 
)}

export default TopMenu