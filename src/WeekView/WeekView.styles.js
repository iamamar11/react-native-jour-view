import { StyleSheet } from 'react-native';
import { CONTAINER_WIDTH } from '../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    height: "4%",
    justifyContent: 'center',
    alignItems: 'center',
    width: CONTAINER_WIDTH,
  },
});

export default styles;
