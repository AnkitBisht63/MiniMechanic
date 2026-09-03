import { Text, View } from 'react-native';
import { styles } from '../theme/styles';

type Props = {
  isOpen: boolean;
};

export function StatusBadge({ isOpen }: Props) {
  return (
    <View style={[styles.statusBadge, isOpen ? styles.openBadge : styles.closedBadge]}>
      <Text style={[styles.statusText, isOpen ? styles.openText : styles.closedText]}>
        {isOpen ? 'Open' : 'Closed'}
      </Text>
    </View>
  );
}
