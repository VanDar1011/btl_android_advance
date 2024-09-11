import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {CheckBox, Button} from 'react-native-elements';

const TermsPrivacyScreen = ({navigation}) => {
  const handleProceed = () => {
    navigation.goBack('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Điều khoản & Chính sách quyền riêng tư</Text>
      <Text style={styles.content}>
        Khi sử dụng ứng dụng này, bạn đồng ý với các điều khoản và điều kiện sau
        đây và xác nhận rằng bạn đã đọc và hiểu chính sách quyền riêng tư của
        chúng tôi.
      </Text>
      <Text style={styles.content}>
        Các điều khoản và điều kiện của chúng tôi bao gồm hướng dẫn về việc sử
        dụng dịch vụ của chúng tôi, giới hạn trách nhiệm, và nghĩa vụ của bạn
        với tư cách là người dùng. Vui lòng đọc kỹ trước khi tiếp tục.
      </Text>
      <Text style={styles.content}>
        Chính sách quyền riêng tư của chúng tôi giải thích cách chúng tôi thu
        thập, sử dụng, và bảo vệ dữ liệu cá nhân của bạn. Chúng tôi cam kết bảo
        vệ quyền riêng tư của bạn và đảm bảo rằng dữ liệu của bạn được bảo mật.
      </Text>
      <Button
        title="Tiếp tục"
        onPress={handleProceed}
        buttonStyle={styles.proceedButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  content: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
    lineHeight: 22,
  },
  proceedButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
  },
});

export default TermsPrivacyScreen;
