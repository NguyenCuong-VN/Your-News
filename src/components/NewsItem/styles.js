import {ScaledSheet} from 'react-native-size-matters';

export default styles = theme => {
  let styles = {
    wrapperNews: {
      flex: 1,
      flexDirection: 'column',
      padding: '10@s',
      alignItems: 'stretch',
      backgroundColor: '#FFFFFF',
      borderRadius: '5@s',
      marginBottom: '5@s',
    },
    newsThumbnail: {
      height: '100@s',
      margin: '-10@s',
      borderTopRightRadius: '5@s',
      borderTopLeftRadius: '5@s',
    },
    newsTitle: {
      fontFamily: 'Lato-Bold',
      fontSize: '20@s',
      color: '#1E3658',
      marginTop: '15@s',
      marginBottom: '5@s',
    },
    newsInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    newsSource: {
      fontFamily: 'Lato',
      fontSize: '12@s',
      color: '#87919F',
    }
  };

  return ScaledSheet.create(styles);
};