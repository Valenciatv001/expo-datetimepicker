import React from "react";
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export type DateTimePickerMode = "date" | "time" | "datetime";

export interface DateTimePickerProps {
  value: Date;
  mode?: DateTimePickerMode;
  onChange: (date: Date) => void;
  minimumDate?: Date;
  maximumDate?: Date;
  locale?: string;
  // Allow custom styling or override the button text
  buttonText?: string;
  style?: {
    containerStyle?: object;
    buttonStyle?: object;
    buttonTextStyle?: object;
  };
}

// A simple wrapper that works on iOS/Android and web fallback
export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  mode = "date",
  onChange,
  minimumDate,
  maximumDate,
  locale,
  buttonText = "Pick Date/Time",
  style,
}) => {
  const [show, setShow] = React.useState(false);

  const handleChange = (event: DateTimePickerEvent, selectedValue?: Date) => {
    setShow(false);
    if (selectedValue) {
      onChange(selectedValue);
    }
  };

  if (Platform.OS === "web") {
    // Use native <input> for web
    return (
      <input
        type={mode === "time" ? "time" : "date"}
        value={
          mode === "time"
            ? value.toISOString().slice(11, 16)
            : value.toISOString().slice(0, 10)
        }
        onChange={(e) => {
          const val = e.target.value;
          if (mode === "time") {
            const [h, m] = val.split(":").map(Number);
            const dt = new Date(value);
            dt.setHours(h, m);
            onChange(dt);
          } else {
            const [year, month, day] = val.split("-").map(Number);
            const dt = new Date(value);
            dt.setFullYear(year, month - 1, day);
            onChange(dt);
          }
        }}
      />
    );
  }

  return (
    <View style={[styles.container, style?.containerStyle]}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={[styles.button, style?.buttonStyle]}
      >
        <Text style={[styles.buttonText, style?.buttonTextStyle]}>
          {buttonText}
        </Text>
      </TouchableOpacity>

      {show && (
        <RNDateTimePicker
          value={value}
          mode={mode === "datetime" ? "date" : mode}
          display="default"
          onChange={handleChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          locale={locale}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "red",
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
