import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CloudButton from './components/CloudButton';
import PageContainer from './components/Container';
import HeaderTitle from './components/HeaderTittle';
import Navigation from './components/Navigation';
import VideoShowcase from './components/VideoShowcase';
import VideoPage from './pages/VideoPage';

export default function App() {
  return (

    <PageContainer>
      
     <Navigation/>

    </PageContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
