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
      <View style={styles.View_206_843}>
        <Text style={styles.Text_206_843}>
          Welcome to the Watershed Artist Dashboard.
        </Text>
      </View>
      <View style={styles.View_206_844}>
        <Text style={styles.Text_206_844}>Let’s get started.</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1668/4c1c/3440a2cbcab0a18b4f40f3773b1a8d92"
        }}
        style={styles.ImageBackground_206_845}
      />
      <View style={styles.View_206_849}>
        <Text style={styles.Text_206_849}>Join Watershed</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(146, 209, 97, 0.28999999165534973)" },
  View_2: { height: hp("140%") },
  View_206_843: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_206_843: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 80,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_206_844: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_206_844: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 60,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_206_845: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("93%")
  },
  View_206_849: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_206_849: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
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
