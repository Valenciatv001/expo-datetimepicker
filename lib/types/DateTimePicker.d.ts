import React from 'react';
export type DateTimePickerMode = 'date' | 'time' | 'datetime';
export interface DateTimePickerProps {
    value: Date;
    mode?: DateTimePickerMode;
    onChange: (date: Date) => void;
    minimumDate?: Date;
    maximumDate?: Date;
    locale?: string;
    buttonText?: string;
    style?: {
        containerStyle?: object;
        buttonStyle?: object;
        buttonTextStyle?: object;
    };
}
export declare const DateTimePicker: React.FC<DateTimePickerProps>;
