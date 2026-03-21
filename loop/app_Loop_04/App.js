import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  let menuItems = ['Appointments', 'Trips', 'Passwords', 'Pitches', 'Updates'];
  let menuIcons = [
    require('./img/icon1.png'),
    require('./img/icon2.png'),
    require('./img/icon3.png'),
    require('./img/icon4.png'),
    require('./img/icon5.png')
  ];

  let userNames = ['Amy Farha', 'Chris Jackson', 'Amanda Martin', 'Christy Thomas', 'Melissa Jones'];
  let userRoles = ['Vice President', 'Vice Chairman', 'CEO', 'Lead Developer', 'CTO'];
  let userAvatars = [
    require('./img/avatar1.png'),
    require('./img/avatar2.png'),
    require('./img/avatar3.png'),
    require('./img/avatar4.png'),
    require('./img/avatar5.png')
  ];

  let tabIcons = [
    require('./img/tab1.png'),
    require('./img/tab2.png'),
    require('./img/tab3.png'),
    require('./img/tab4.png'),
    require('./img/tab5.png')
  ];

  let elementosMenu = null;
  let i = 0;
  while (i < menuItems.length) {
    elementosMenu = (
      <>
        {elementosMenu}
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
          <Image source={menuIcons[i]} style={{ width: 25, height: 25, marginRight: 15 }} />
          <Text style={{ flex: 1, fontSize: 16, color: '#444' }}>{menuItems[i]}</Text>
          <Text style={{ fontSize: 18, color: '#ccc', fontWeight: 'bold' }}>{'>'}</Text>
        </View>
      </>
    );
    i++;
  }

  let elementosUsuarios = null;
  let j = 0;
  while (j < userNames.length) {
    elementosUsuarios = (
      <>
        {elementosUsuarios}
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
          <Image source={userAvatars[j]} style={{ width: 45, height: 45, borderRadius: 22.5, marginRight: 15 }} />
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={{ fontSize: 16, color: '#333' }}>{userNames[j]}</Text>
            <Text style={{ fontSize: 13, color: '#999' }}>{userRoles[j]}</Text>
          </View>
          <Text style={{ fontSize: 18, color: '#ccc', fontWeight: 'bold' }}>{'>'}</Text>
        </View>
      </>
    );
    j++;
  }

  let elementosTabs = null;
  let k = 0;
  while (k < tabIcons.length) {
    elementosTabs = (
      <>
        {elementosTabs}
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 12 }}>
          <Image source={tabIcons[k]} style={{ width: 25, height: 25 }} />
        </View>
      </>
    );
    k++;
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      
      <View style={{ height: 90, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#eee', paddingTop: 20 }}>
        <Text style={{ fontSize: 20, color: '#333' }}>REACT NATIVE <Text style={{ fontWeight: 'bold' }}>ELEMENTS</Text></Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {elementosMenu}
        
        <View style={{ height: 35, backgroundColor: '#f0f4f7' }}></View>
        
        {elementosUsuarios}
      </ScrollView>

      <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#eee', backgroundColor: 'white' }}>
        {elementosTabs}
      </View>

    </View>
  );
}

export default App;