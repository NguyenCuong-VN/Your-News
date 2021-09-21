import {ScaledSheet} from 'react-native-size-matters';

export default styles = theme => {
  let styles = {
    info: {
      marginTop: '30@s',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    infoWrapper: {
      flexDirection: 'column',
      padding: '10@s',
      width: '33%',
    },
    infoItem: {
      fontSize: '13@s',
      fontStyle: 'normal',
      color: '#B1BAC9',
      fontFamily: 'Lato-Regular',
      alignSelf: 'center',
      
    },
    infoIcon: {
      alignSelf: 'center',
      width: '30@s',
      height: '30@s',
      marginBottom: '5@s',
    },
  };

  return ScaledSheet.create(styles);
};