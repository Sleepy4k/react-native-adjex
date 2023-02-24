// Import Core Libraries
import { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";

// Import Consts
import { Colors } from "../../constant";

// Import Styles
import styles from "./styles";

// Import Components
import { Icon } from "../index";

const InputField = ({
  icon,
  error,
  label,
  editable,
  onFocused,
  hideInput,
  inputType,
  placeholder,
  inputFunction,
  defaultValue,
  inputMaxLength,
  placeholderColor,

  customIcon,
  customFunction,
  customIconColor,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(hideInput);

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? Colors.red
              : isFocused
              ? Colors.darkBlue
              : Colors.light,
            alignItems: "center",
          },
        ]}
      >
        <Icon name={icon} style={styles.inputIcon} color={Colors.darkBlue} />
        <TextInput
          autoCorrect={false}
          editable={editable}
          returnKeyType={"next"}
          style={styles.inputText}
          keyboardType={inputType}
          placeholder={placeholder}
          maxLength={inputMaxLength}
          defaultValue={defaultValue}
          onChangeText={inputFunction}
          secureTextEntry={hidePassword}
          placeholderTextColor={placeholderColor}
          onFocus={() => {
            onFocused();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {inputType == "password" ? (
          <Icon
            name={hidePassword ? "eye-off-outline" : "eye-outline"}
            style={styles.inputPasswordIcon}
            color={Colors.darkBlue}
            onPress={() => setHidePassword(!hidePassword)}
          />
        ) : (
          <Icon
            name={customIcon}
            color={customIconColor}
            onPress={customFunction}
            style={styles.inputPasswordIcon}
          />
        )}
      </View>
      {error && <Text style={styles.inputError}>{error}</Text>}
    </View>
  );
};

InputField.propTypes = {
  icon: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  editable: PropTypes.bool,
  hideInput: PropTypes.bool,
  onFocused: PropTypes.func,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  inputFunction: PropTypes.func,
  defaultValue: PropTypes.string,
  inputMaxLength: PropTypes.number,
  placeholderColor: PropTypes.string,
};

InputField.defaultProps = {
  icon: "person",
  error: "",
  label: "",
  editable: true,
  hideInput: false,
  onFocused: () => {},
  inputType: "default",
  placeholder: "",
  inputFunction: () => {},
  defaultValue: "",
  inputMaxLength: 100,
  placeholderColor: Colors.grey,

  customIcon: "",
  customFunction: () => {},
  customIconColor: Colors.darkBlue,
};

export default InputField;
