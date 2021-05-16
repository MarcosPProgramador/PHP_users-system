import { useFonts as fonts } from 'expo-font';
import Loading from '../components/Loading';

interface Response {
  loaded: boolean;
  error: Error;
  loading: React.FC;
}

function useFonts(): Response {
  const [loaded, error] = fonts({
    'RobotoSlab-Medium': require('../../assets/fonts/RobotoSlab-Medium.ttf'),
    'RobotoSlab-Regular': require('../../assets/fonts/RobotoSlab-Regular.ttf'),
  });

  return { loaded, error, loading: Loading };
}
export default useFonts;
