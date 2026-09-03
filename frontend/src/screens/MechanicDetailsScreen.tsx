import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { fetchMechanic } from '../api/mechanics';
import { ServiceTags } from '../components/ServiceTags';
import { StatusBadge } from '../components/StatusBadge';
import { styles } from '../theme/styles';
import { Mechanic } from '../types/mechanic';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'MechanicDetails'>;

export function MechanicDetailsScreen({ navigation, route }: Props) {
  const [mechanic, setMechanic] = useState<Mechanic | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMechanic() {
      try {
        setError(null);
        setMechanic(await fetchMechanic(route.params.mechanicId));
      } catch {
        setError('Unable to load garage details.');
      } finally {
        setIsLoading(false);
      }
    }

    void loadMechanic();
  }, [route.params.mechanicId]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  if (error || !mechanic) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorTitle}>Details unavailable</Text>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.detailContent}>
      <View style={styles.detailHeader}>
        <View style={styles.detailTitleBlock}>
          <Text style={styles.detailTitle}>{mechanic.name}</Text>
          <Text style={styles.metaText}>Rating {mechanic.rating.toFixed(1)} • {mechanic.distance}</Text>
        </View>
        <StatusBadge isOpen={mechanic.isOpen} />
      </View>

      <View style={styles.infoPanel}>
        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.bodyText}>{mechanic.address}</Text>
      </View>

      <View style={styles.infoPanel}>
        <Text style={styles.sectionTitle}>Services & Pricing</Text>
        <View style={styles.servicePriceList}>
          {mechanic.services.map((service) => (
            <View key={service} style={styles.servicePriceRow}>
              <View style={styles.servicePriceTextBlock}>
                <Text style={styles.serviceName}>{service}</Text>
                <Text style={styles.serviceDescription}>Available for booking</Text>
              </View>
              <Text style={styles.servicePrice}>
                {mechanic.servicePricing?.[service] ?? 'Quote on visit'}
              </Text>
            </View>
          ))}
        </View>
        <ServiceTags services={mechanic.services} />
      </View>

      <View style={styles.infoPanel}>
        <Text style={styles.sectionTitle}>Working Hours</Text>
        <Text style={styles.bodyText}>{mechanic.workingHours}</Text>
      </View>

      <View style={styles.infoPanel}>
        <Text style={styles.sectionTitle}>Phone Number</Text>
        <Text style={styles.bodyText}>{mechanic.phoneNumber}</Text>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        disabled={!mechanic.isOpen}
        onPress={() => navigation.navigate('RequestService', { mechanic })}
      >
        <Text style={styles.primaryButtonText}>
          {mechanic.isOpen ? 'Request Service' : 'Currently Closed'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
