import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import QRCode from 'react-native-qrcode';

import { Container, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

function index({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
        extrapolate: 'clamp'
      })
    }}>
      {/* <Code>
        <QRCode
          value="https://github.com/matheus-germano/nubank-clone"
          size={80}
          bgColor="#8B10AE"
          fgColor="#fff"
        />
      </Code> */}

      <Nav>
        <NavItem>
          <Icon name='help-outline' size={20} color='#fff'/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name='person-outline' size={20} color='#fff'/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name='credit-card' size={20} color='#fff'/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name='smartphone' size={20} color='#fff'/>
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do app</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}

export default index
