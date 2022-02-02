import React from "react";
import { StyleSheet, } from "react-native";
import { Dialog, Paragraph, Portal, Provider } from "react-native-paper";
import { TextInput } from "react-native";
import colors from "../../constants/colors";
import { Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import useTheme from "../../hooks/useTheme";
import { addShoppingList } from "../../api/api-client";

interface AddProps {
    visible: boolean;
    setVisible: (v: boolean) => void;
}

export default function Add({ visible, setVisible }: AddProps) {
    const [name, setName] = React.useState<string | undefined>();
    const theme = useTheme();

    const addList = React.useCallback(async () => {
        if (name)
            await addShoppingList(1, name);

        setVisible(false);
    }, [name]);

    const styles = StyleSheet.create({
        dialog: {
            backgroundColor: theme.background
        },
        input: {
            borderWidth: 0.5,
            borderColor: theme.border,
            borderRadius: 10,
            padding: 10,
            color: theme.text
            
        }
    })

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={addList} style={styles.dialog}>
                <Dialog.Title style={{ color: theme.text }}>Lijstje toevoegen</Dialog.Title>
                <Dialog.Content>
                    <TextInput onChangeText={setName} style={styles.input} placeholder="Naam" />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button
                        title="Opslaan"
                        onPress={addList}
                        icon={
                            <FontAwesome
                                name="save"
                                size={20}
                                color={theme.text}
                                style={{ marginRight: 10 }}
                            />
                        }
                        type="outline"
                    />
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}