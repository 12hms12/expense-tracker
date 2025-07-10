import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Typo from '@/components/Typo'

const Welcome = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/*login button */}

        <View>
          <TouchableOpacity style={styles.loginButton}>
            <Typo fontWeight={'500'}>Sign In</Typo>
          </TouchableOpacity>

          <Image
          source={require('../../assets/images/welcome.png')}
          style={styles.welcomeImage}
          resizeMode="contain"
          />
        </View>

        {/*Footer */}
        <View style={styles.footer}>
          <View style={{alignItems:'center', gap:2}}>
            <Typo size={17} fontWeight={400} >Always be in Control</Typo>
            <Typo size={17} fontWeight={400} >of your Finances</Typo>
          </View>

          <View style={styles.buttonContainer}>
            {/* */}
          </View>

        </View>
      </View>
    </ScreenWrapper>
  )
}


let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});


export default Welcome
