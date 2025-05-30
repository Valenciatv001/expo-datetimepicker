````md
# expo-datetimepicker

A lightweight, customizable DateTimePicker component for React Native and Expo projects, built with TypeScript.  
Wraps `@react-native-community/datetimepicker` with added convenience and Expo compatibility.

---

## Features

- Supports both iOS and Android
- Date and time modes
- TypeScript-ready
- Easy to use with React Native & Expo
- Peer dependencies to keep your bundle size small

---

## Installation

```bash
npm install expo-datetimepicker
# or
yarn add expo-datetimepicker
````

Make sure to also install peer dependencies if you don’t have them already:

```bash
npm install react react-native @react-native-community/datetimepicker
# or
yarn add react react-native @react-native-community/datetimepicker
```

---

## Usage

```tsx
import React, {useState} from 'react';
import {View, Button} from 'react-native';
import DateTimePicker from 'expo-datetimepicker';

export default function Example() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate?: Date) => {
        setShow(false);
        if (selectedDate) setDate(selectedDate);
    };

    return (
        <View style={{padding: 20}}>
            <Button title="Pick a Date" onPress={() => setShow(true)}/>
            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}
```

---

## API

Props extend from `@react-native-community/datetimepicker` with added convenience if any (document your custom props
here).

Refer to [official docs](https://github.com/react-native-datetimepicker/datetimepicker) for full API details.

---

## Peer Dependencies

This package relies on:

* `react` (>=17.0.0)
* `react-native` (>=0.68.0)
* `@react-native-community/datetimepicker` (>=8.4.1)

Ensure these are installed in your project.

---

## Development

```bash
git clone <repo-url>
cd expo-datetimepicker
npm install
npm run build
```

---

## License

MIT © Ezekiel Agwu

---

## Contact

Created by Ezekiel Agwu

[LinkedIn](https://www.linkedin.com/in/agwuezekiel/)

[Github](https://github.com/valenciatv001)

