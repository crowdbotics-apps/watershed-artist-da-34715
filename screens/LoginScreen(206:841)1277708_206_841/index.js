import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72dc/922a/c0ab12e1916107b4f7a8b42a0b409d31"
        }}
        style={styles.ImageBackground_206_858}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72dc/922a/c0ab12e1916107b4f7a8b42a0b409d31"
        }}
        style={styles.ImageBackground_206_865}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72dc/922a/c0ab12e1916107b4f7a8b42a0b409d31"
        }}
        style={styles.ImageBackground_206_864}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f9a/ba50/a6933a8381bfecf861b98b9417e80946"
        }}
        style={styles.ImageBackground_206_863}
      />
      <View style={styles.View_206_859}>
        <Text style={styles.Text_206_859}>Create Account</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f9a/ba50/a6933a8381bfecf861b98b9417e80946"
        }}
        style={styles.ImageBackground_206_870}
      />
      <View style={styles.View_206_871}>
        <Text style={styles.Text_206_871}>Create Account</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f9a/ba50/a6933a8381bfecf861b98b9417e80946"
        }}
        style={styles.ImageBackground_206_872}
      />
      <View style={styles.View_206_873}>
        <Text style={styles.Text_206_873}>Sign in</Text>
      </View>
      <View style={styles.View_206_866}>
        <Text style={styles.Text_206_866}>Email</Text>
      </View>
      <View style={styles.View_206_867}>
        <Text style={styles.Text_206_867}>Password</Text>
      </View>
      <View style={styles.View_206_868}>
        <Text style={styles.Text_206_868}>Re-enter password</Text>
      </View>
      <View style={styles.View_206_869}>
        <Text style={styles.Text_206_869}>Create an account:</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(146, 209, 97, 0.28999999165534973)" },
  View_2: { height: hp("140%") },
  ImageBackground_206_858: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("78%")
  },
  ImageBackground_206_865: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("37%")
  },
  ImageBackground_206_864: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("57%")
  },
  ImageBackground_206_863: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("93%")
  },
  View_206_859: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_206_859: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_206_870: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("93%")
  },
  View_206_871: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_206_871: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_206_872: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("109%")
  },
  View_206_873: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_206_873: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_206_866: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_206_866: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_206_867: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_206_867: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_206_868: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_206_868: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_206_869: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_206_869: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 60,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
