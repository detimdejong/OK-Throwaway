import React, { FunctionComponent, useState, MutableRefObject, RefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface IProps {
    onChange: (input: string) => void;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
    onChange
}) => {
    const keyboardRef = React.useRef<typeof Keyboard>();

    const onKeyPress = (button: string) => {

    };

    const layout = React.useMemo(() => {
        return {
            'default': [
                'q w e r t y u i o p {bksp}',
                'a s d f g h j k l',
                'z x c v b n m',
                '{space}'
            ]
        }
    }, []);

    return (
        <Keyboard
            keyboardRef={r => (keyboardRef.current = r)}
            layoutName="default"
            onChange={onChange}
            onKeyPress={onKeyPress}
            layout={layout}
        />
    );
};

export default KeyboardWrapper;
