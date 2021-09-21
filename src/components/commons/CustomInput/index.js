import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const CustomInput = ({theme, focus, style, secureTextEntry, label, icon, iconPosition, error, hasHide, ...props}) => {

  const [isHideText, setIsHideText] = useState(secureTextEntry);
  const [isFocused, setFocused] = useState(focus);
  
  const stylesTheme = styles(theme);

  const getFlexDIrection = () => {
    if (icon && iconPosition == 'right') {
      return 'row-reverse';
    } else{
      return 'row';
    }
  }

  const getBorderColor = () => {
    if (isFocused) {
      return theme.primary;
    }
    if (error) {
      return theme.danger;
    } else {
      return theme.grey;
    }
    
  }

  const onPressHideTextIcon = () => {
    setIsHideText(!isHideText);
  }


  return (
    <View style={stylesTheme.inputContainer}>

      {label ? <Text>{label}</Text> : null}

      <View style={[stylesTheme.wrapper, {flexDirection: getFlexDIrection(), borderColor: getBorderColor()}]}>
        {icon ? <Text>{icon}</Text> : null}

        <TextInput 
          style= {[stylesTheme.input, style]}
          underlineColorAndroid='transparent'
          secureTextEntry = {isHideText}
          onFocus = {() => {setFocused(true)}}
          onBlur = {() => {setFocused(false)}}
          {...props}
        />

        {hasHide ? <Text onPress={onPressHideTextIcon}>{isHideText ? '😌' : '😎'}</Text> : null}
      </View>

      {error ? <Text style={stylesTheme.error}>{error}</Text> : null}
    </View>
  );
}

CustomInput.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default CustomInput;
