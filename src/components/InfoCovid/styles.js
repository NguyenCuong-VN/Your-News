import {ScaledSheet} from 'react-native-size-matters';

export default styles = theme => {
  let styles = {
    infoItem: {
      flexDirection: 'column',
      backgroundColor: '#FDE8E9',
      borderRadius: '8@s',
      padding: '10@s',
      alignItems: 'center',
      margin: '5@s',
    },
    infoTitle: {
      fontFamily: 'Lato-Bold',
      fontSize: '20@s',
      color: '#333333',
      marginLeft: '5@s',
      marginRight: '5@s',
    },
    infoNumber: {
      fontFamily: 'Lato-Bold',
      fontSize: '24@s',
      color: '#ED1C24',
    },
    infoToday: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    infoNumberToday: {
      fontFamily: 'Lato-Bold',
      fontSize: '16@s',
      color: '#9C2727',
    },
    infoNote: {
      fontFamily: 'Lato-Bold',
      fontSize: '13@s',
      color: '#666666',
    },
  };

  return ScaledSheet.create(styles);
};