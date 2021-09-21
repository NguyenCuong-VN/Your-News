import {ScaledSheet} from 'react-native-size-matters';

export default styles = theme => {
  let styles = {
    itemWrapper: {
      flexDirection: 'column',
      padding: '10@s',
    },
    itemTitle: {
      fontSize: '15@s',
      fontStyle: 'normal',
      color: '#877EC1',
      fontFamily: 'Lato-Bold',
      alignSelf: 'center',
      marginBottom: "2@s",
    },
    itemIcon: {
      alignSelf: 'center',
      width: '40@s',
      height: '40@s',
    },
    itemDesc: {
      fontSize: '14@s',
      fontStyle: 'normal',
      color: '#B1BAC9',
      fontFamily: 'Lato-Regular',
      alignSelf: 'center',
    },
  };

  return ScaledSheet.create(styles);
};