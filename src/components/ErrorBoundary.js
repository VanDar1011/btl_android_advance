import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ToastAndroid} from 'react-native';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // Gửi thông tin lỗi đến server hoặc dịch vụ theo dõi lỗi
    console.error(error, errorInfo);
    ToastAndroid.showWithGravity(
      'Đã xảy ra lỗi!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Đã xảy ra lỗi. Vui lòng thử lại sau.
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default ErrorBoundary;
