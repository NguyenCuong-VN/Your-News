import {ScaledSheet} from 'react-native-size-matters';

export default styles = theme => {
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
    //info area styles
    info: {
      flexGrow: 0,
      flexShrink: 0,
    },
    updateInfo: {
      color: '#1E3658',
      marginLeft: '10@s',
    },
    //news area styles
    news: {
      padding: '7@s',
      marginTop: '10@s',
    },
    
  };

  return ScaledSheet.create(styles);
};
