import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/Button';
import MyIcon from "@/components/Icon";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E6F2FF', dark: '#002B5B' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hoş Geldiniz!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.introContainer}>
        <MyIcon/>
        <ThemedText type="subtitle">React Native İlk Giriş</ThemedText>
        <ThemedText>
          React native de ilk uygulamamı geliştirmeye başladım.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.actionContainer}>
        <Button title="Başlayın" onPress={() => alert('Başlamak için düğmeye basıldı!')} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  introContainer: {
    padding: 16,
    backgroundColor: '#000000',
    borderRadius: 10,
    marginVertical: 10,
  },
  stepContainer: {
    padding: 16,
    backgroundColor: '#E1F5FE',
    borderRadius: 10,
    marginVertical: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 20,
  },
  reactLogo: {
    height: 180,
    width: 300,
    resizeMode: 'contain',
  },
});
