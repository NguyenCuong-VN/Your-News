import { ScaledSheet } from "react-native-size-matters";

export default styles = (theme) => {
  let styles = {
    row: {
      borderBottomWidth: "1@s",
      borderBottomColor: "#9CADC8",
      marginLeft: "10@s",
      marginBottom: "5@s",
      marginTop: "5@s",
      marginRight: "10@s",
    },
    item: {
      margin: "5@s",
      fontSize: '20@s',
      fontStyle: 'normal',
      color: '#1E3658',
      fontFamily: 'Lato-Regular',
      alignItems: 'center',
    }
  }

  return ScaledSheet.create(styles);
}
