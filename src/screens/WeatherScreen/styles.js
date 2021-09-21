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
    changeLocation: {
      alignSelf: 'flex-end',
      marginTop: '20@s',
      marginRight: '5@s',
      width: '40@s',
      height: '40@s',
    },
    line: {
      backgroundColor: '#9CADC8',
      height: '1@s',
      marginTop: '3@s',
      marginRight: '5@s',
      marginLeft: '5@s',
    },
    // title style
    title: {
      alignSelf: 'center',
      marginTop: '40@s',
    },
    titleLocation: {
      fontSize: '60@s',
      fontStyle: 'normal',
      color: '#EBEBEB',
      fontFamily: 'Lato-Bold',
    },
    titleDate: {
      fontSize: '14@s',
      fontStyle: 'normal',
      color: '#FFFFFF',
      fontFamily: 'Lato-Regular',
      alignSelf: 'center',
    },
    // common weather style
    commonWeather: {
      alignSelf: 'center',
      marginTop: '20@s',
      marginBottom: '20@s',
    },
    commonIcon: {
      alignSelf: 'center',
      width: '100@s',
      height: '100@s',
    },
    commonTemper: {
      fontSize: '90@s',
      fontStyle: 'normal',
      color: '#8A8787',
      fontFamily: 'Lato-Bold',
    },
    commonNote: {
      fontSize: '25@s',
      fontStyle: 'normal',
      color: '#C6C2C2',
      fontFamily: 'Lato-Regular',
      alignSelf: 'center',
    },
    // areas styles
    area: {
      marginTop: '20@s',
    },
    areaHeader: {
      marginLeft: '7@s',
      marginRight: '7@s',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    areaTitle: {
      fontSize: '20@s',
      fontStyle: 'normal',
      color: '#B1BAC9',
      fontFamily: 'Lato-Bold',
    },
    areaTemper: {
      fontSize: '14@s',
      fontStyle: 'normal',
      color: '#E0D9D9',
      fontFamily: 'Lato-Regular',
    },
    // infos styles
    info: {
      marginTop: '30@s',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  };

  return ScaledSheet.create(styles);
};

ScaledSheet.create({
  asd: {
  },
});
