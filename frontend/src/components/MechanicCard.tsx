import { Pressable, Text, View } from 'react-native';
import { Mechanic } from '../types/mechanic';
import { ServiceTags } from './ServiceTags';
import { StatusBadge } from './StatusBadge';
import { styles } from '../theme/styles';

type Props = {
  mechanic: Mechanic;
  onPress: () => void;
};

export function MechanicCard({ mechanic, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.cardHeader}>
        <View style={styles.cardTitleBlock}>
          <Text style={styles.cardTitle}>{mechanic.name}</Text>
          <Text style={styles.metaText}>{mechanic.location}</Text>
        </View>
        <StatusBadge isOpen={mechanic.isOpen} />
      </View>

      <View style={styles.metricRow}>
        <Text style={styles.metricText}>Rating {mechanic.rating.toFixed(1)}</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.metricText}>{mechanic.distance}</Text>
      </View>

      <ServiceTags services={mechanic.services} />
    </Pressable>
  );
}
