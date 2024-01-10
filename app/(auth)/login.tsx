import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const loginPage = () => {
  return (
    <View>
      <Text>Login Page</Text>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/signup",
          })
        }
      >
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default loginPage;

// import { FunctionComponent } from "react";
// import { StyleSheet } from 'react-native';

// const Login: FunctionComponent = () => {
//   return (
//       <view style={styles.login}>
//       <view style={styles.getStarted}>
//         <view style={styles.frameParent}>
//           <view style={styles.letsGetStartedParent}>
//             <view style={styles.letsGetStarted}><Text>Lets Get Started</Text></view>
//             <view style={styles.findTheRightContainer}>
//               <Text style={styles.findTheRight}>Find the right ticket and what you want</Text>
//               <Text style={styles.findTheRight}>only in myticket</Text>
//             </view>
//           </view>
//           <view style={styles.inputField}>
//             <view style={styles.vectorWrapper}>
//               <img style={styles.vectorIcon} alt="" src="/vector.svg" />
//             </view>
//             <view style={styles.signUpEmail}><Text>Sign Up Email</Text></view>
//           </view>
//           <view style={styles.orUseInstant}><Text>Or Use Instant Sign Up</Text></view>
//           <view style={styles.googleLogin}>
//             <view style={styles.component}>
//               <img
//                 style={styles.componentChild}
//                 alt=""
//                 src="/group-17@2x.png"
//               />
//             </view>
//             <view style={styles.signWithGoogle}><Text>Sign With Google</Text></view>
//           </view>
//           <view style={styles.appleLogin}>
//             <img style={styles.appleIcons} alt="" src="/apple-icons.svg" />
//             <view style={styles.signWithGoogle}><Text>Sign With Apple</Text></view>
//           </view>
//           <view style={styles.alreadyHaveAnAccountSignWrapper}>
//             <view style={styles.alreadyHaveAnContainer}>
//               <view><Text>Already Have an Account?</Text></view>
//               <view style={styles.signIn}><Text>Sign In</Text></view>
//             </view>
//           </view>
//         </view>
//       </view>
//     </view>
//   );
// };

// const styles = StyleSheet.create({
//   letsGetStarted: {
//     alignSelf: 'stretch',
//     position: 'relative',
//     fontWeight: '500',
//   },
//   findTheRight: {
//     margin: 0,
//   },
//   findTheRightContainer: {
//     alignSelf: 'stretch',
//     position: 'relative',
//     // fontSize: /* --paragraf-14-medium-size */
//     // lineHeight: '170%',
//     fontWeight: '500',
//     opacity: 0.5,
//   },
//   letsGetStartedParent: {
//     alignSelf: 'stretch',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     // gap: /* --gap-2xs */,
//     // fontSize: /* --heading-h2-size */,
//     // color: /* --white-100 */,
//   },
//   vectorIcon: {
//     position: 'relative',
//     width: 1.13,
//     height: 0.89,
//   },
//   vectorWrapper: {
//     width: 2.38,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     // padding: /* --padding-3xs */,
//     // boxSizing: 'border-box',
//   },
//   signUpEmail: {
//     flex: 1,
//     position: 'relative',
//     // lineHeight: '160%',
//     fontWeight: '500',
//   },
//   inputField: {
//     alignSelf: 'stretch',
//     // borderRadius: /* --br-mini */,
//     // backgroundColor: /* --dark-60 */,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // padding: /* --padding-mini */ /* --padding-3xs */,
//     // gap: /* --gap-3xs */,
//   },
//   orUseInstant: {
//     alignSelf: 'stretch',
//     position: 'relative',
//     // fontSize: /* --paragraf-12-medium-size */,
//     // lineHeight: '170%',
//     fontWeight: '600',
//     // color: /* --white-100 */,
//     opacity: 0.5,
//   },
//   componentChild: {
//     position: 'relative',
//     width: 1.44,
//     height: 1.48,
//     objectFit: 'cover',
//   },
//   component: {
//     width: 1.5,
//     height: 1.5,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // paddingVertical: /* --padding-3xs */,
//     paddingHorizontal: 0,
//     // boxSizing: 'border-box',
//   },
//   signWithGoogle: {
//     flex: 1,
//     position: 'relative',
//     // lineHeight: '160%',
//     fontWeight: '600',
//   },
//   googleLogin: {
//     alignSelf: 'stretch',
//     // borderRadius: /* --br-base */,
//     borderWidth: 2,
//     // borderColor: /* --dark-60 */,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     // paddingVertical: /* --padding-base */,
//     // paddingHorizontal: /* --padding-51xl */,
//     // gap: /* --gap-22xl */,
//   },
//   appleIcons: {
//     position: 'relative',
//     width: 1.5,
//     height: 1.56,
//   },
//   appleLogin: {
//     alignSelf: 'stretch',
//     // borderRadius: /* --br-base */,
//     borderWidth: 2,
//     // borderColor: /* --dark-60 */,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // paddingVertical: /* --padding-base */,
//     // paddingHorizontal: /* --padding-51xl */,
//     // gap: /* --gap-3xs */,
//   },
//   signIn: {
//     color: '#c6f432',
//   },
//   alreadyHaveAnContainer: {
//     flex: 1,
//     position: 'relative',
//     // lineHeight: '170%',
//     fontWeight: '500',
//   },
//   alreadyHaveAnAccountSignWrapper: {
//     alignSelf: 'stretch',
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     // padding: /* --padding-3xs */,
//     // fontSize: /* --paragraf-12-medium-size */,
//     // color: /* --color-slategray */,
//   },
//   frameParent: {
//     position: 'absolute',
//     top: 11,
//     // left: 'calc(50% - 164px)',
//     width: 20.44,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     // gap: /* --gap-6xl */,
//   },
//   getStarted: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 24.38,
//     height: 52.75,
//   },
//   login: {
//     position: 'relative',
//     // borderRadius: /* --br-21xl */,
//     // backgroundColor: /* --color-gray-600 */,
//     width: '100%',
//     height: 52.75,
//     overflow: 'hidden',
//     // textAlign: 'center',
//     // fontSize: /* --font-size-base */,
//     // color: /* --dark-20 */,
//     // fontFamily: /* --paragraf-12-medium */,
//   },
// });

