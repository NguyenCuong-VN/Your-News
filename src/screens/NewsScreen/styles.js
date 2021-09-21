import { ScaledSheet } from "react-native-size-matters";

export default styles = (theme) => {
  let styles = {
    background: {
      flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    //header area style
    header: {
      fontFamily: 'Lato-Bold',
      fontSize: '40@s',
      color: '#FFFFFF',
      padding: '20@s',
    },
    //news area styles
    news: {
      padding: '7@s',
    },
  }

  return ScaledSheet.create(styles);
}