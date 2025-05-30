// src/DateTimePicker.tsx
import React from 'react';
import { Platform, View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
// A simple wrapper that works on iOS/Android and web fallback
export const DateTimePicker = ({ value, mode = 'date', onChange, minimumDate, maximumDate, locale, buttonText = 'Pick Date/Time', style, }) => {
    const [show, setShow] = React.useState(false);
    const handleChange = (event, selectedValue) => {
        setShow(false);
        if (selectedValue) {
            onChange(selectedValue);
        }
    };
    if (Platform.OS === 'web') {
        // Use native <input> for web
        return (React.createElement("input", { type: mode === 'time' ? 'time' : 'date', value: mode === 'time'
                ? value.toISOString().slice(11, 16)
                : value.toISOString().slice(0, 10), onChange: (e) => {
                const val = e.target.value;
                if (mode === 'time') {
                    const [h, m] = val.split(':').map(Number);
                    const dt = new Date(value);
                    dt.setHours(h, m);
                    onChange(dt);
                }
                else {
                    const [year, month, day] = val.split('-').map(Number);
                    const dt = new Date(value);
                    dt.setFullYear(year, month - 1, day);
                    onChange(dt);
                }
            } }));
    }
    return (React.createElement(View, { style: [styles.container, style === null || style === void 0 ? void 0 : style.containerStyle] },
        React.createElement(TouchableOpacity, { onPress: () => setShow(true), style: [styles.button, style === null || style === void 0 ? void 0 : style.buttonStyle] },
            React.createElement(Text, { style: [styles.buttonText, style === null || style === void 0 ? void 0 : style.buttonTextStyle] }, buttonText)),
        show && (React.createElement(RNDateTimePicker, { value: value, mode: mode === 'datetime' ? 'date' : mode, display: "default", onChange: handleChange, minimumDate: minimumDate, maximumDate: maximumDate, locale: locale }))));
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: '#007AFF',
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
