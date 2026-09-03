import { Text, View } from 'react-native';
import { styles } from '../theme/styles';

type Props = {
  services: string[];
};

export function ServiceTags({ services }: Props) {
  return (
    <View style={styles.tags}>
      {services.map((service) => (
        <View key={service} style={styles.tag}>
          <Text style={styles.tagText}>{service}</Text>
        </View>
      ))}
    </View>
  );
}
