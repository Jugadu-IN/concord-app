import React from 'react';
import {
    Appearance,
    Button,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import {actions, defaultActions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

const initHTML = `<br/>
<center><b>Rich Editor</b></center>
<center>
<a href="https://github.com/wxik/react-native-rich-editor">React Native</a>
<span>And</span>
<a href="https://github.com/wxik/flutter-rich-editor">Flutter</a>
</center>
<br/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png" />
<br/><br/><br/><br/>
`;

class TextEditor extends React.Component {

    render() {
        let that = this;
        return (
            <SafeAreaView style={[styles.container]}>
                <StatusBar />
                <ScrollView style={[styles.scroll]} keyboardDismissMode={'none'}>
                <RichEditor
  ref={(r) => this.richtext = r}
  initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'}
 
/>
                </ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <RichToolbar
                  getEditor={() => this.richtext}
                  actions={[
                    actions.setBold,
                    actions.setItalic,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                    actions.insertImage,
                    actions.insertLink,
                    'customAction',
                  ]}
                  customAction={this.handleCustomAction}
                />
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    rich: {
        minHeight: 300,
        flex: 1,
    },
    richBar: {
        height: 50,
        backgroundColor: '#F5FCFF',
    },
    scroll: {
        backgroundColor: '#ffffff',
    },
    item: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#e8e8e8',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 15,
    },

    input: {
        flex: 1,
    },

    tib: {
        textAlign: 'center',
        color: '#515156',
    },
});

export default TextEditor;