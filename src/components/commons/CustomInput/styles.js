import { ScaledSheet } from 'react-native-size-matters';

export default styles = (theme) => {
  let styles = {
    input: {
      padding: '10@s',
      flex:1,
    },
    wrapper: {
      borderColor: theme.grey,
      borderWidth: '1@s',
      borderRadius: 4,
      flexDirection:"row",
      paddingHorizontal: '5@s',
      alignItems : 'center',
      marginTop: '5@s'
    },
    inputContainer: {
      paddingVertical: '12@s'
    },
    error: {
      color: theme.danger,
      paddingTop: '4@s',
      fontSize: '12@s',
    }
  }

  return ScaledSheet.create(styles);
};