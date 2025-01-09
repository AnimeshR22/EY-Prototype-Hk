import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

const InsightsScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false); // Track if bot is typing

  // Send Message to Backend
  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');

    // Show typing indicator
    setIsTyping(true);

    try {
      // Fetch reply from the GPT model backend
      const response = await axios.post('http://192.168.29.179:5001/chat', {
        message: input,
      });

      // Add GPT response to chat
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { type: 'bot', text: response.data.reply },
        ]);
      }, 1500); // Delay for typing animation effect
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: 'Error communicating with the server.' },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={120} // Adjust this value
    >
      <View style={styles.container}>
        {/* Top Header with AI Name */}
        <View style={styles.header}>
          <Text style={styles.title}>HealthEZY.Ai 💬</Text>
        </View>

        <KeyboardAwareScrollView
          style={styles.chatContainer}
          contentContainerStyle={{ paddingBottom: 20 }}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          {/* Chat Messages */}
          {messages.map((msg, index) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                msg.type === 'user' ? styles.userContainer : styles.botContainer,
              ]}
            >
              {/* Chat Icons */}
              <Image
                source={
                  msg.type === 'user'
                    ? require('../../assets/images/user.gif') // Replace with user icon path
                    : require('../../assets/images/bot.gif') // Replace with bot icon path
                }
                style={styles.icon}
              />
              {/* Chat Message Bubble */}
              <View
                style={[
                  styles.messageBubble,
                  msg.type === 'user' ? styles.userBubble : styles.botBubble,
                ]}
              >
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
            </View>
          ))}

          {/* Typing Animation */}
          {isTyping && (
            <View style={[styles.messageContainer, styles.botContainer]}>
              <Image
                source={require('../../assets/images/bot.gif')} // Replace with bot icon path
                style={styles.icon}
              />
              <View style={[styles.messageBubble, styles.botBubble]}>
                <Text style={styles.messageText}>thinking 💭 </Text>
              </View>
            </View>
          )}
        </KeyboardAwareScrollView>

        {/* Input Section */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Ask Anything! 😄"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#F7C12B',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
    marginTop: 13,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  userContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  botContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 20,
    maxWidth: '70%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  userBubble: {
    backgroundColor: '#FFD700',
  },
  botBubble: {
    backgroundColor: '#FFF8DC',
  },
  messageText: {
    fontSize: 16,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#F7C12B',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InsightsScreen;
