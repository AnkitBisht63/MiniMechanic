import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { fetchMechanics } from '../api/mechanics';
import { MechanicCard } from '../components/MechanicCard';
import { mockMechanics } from '../data/mockMechanics';
import { styles } from '../theme/styles';
import { Mechanic } from '../types/mechanic';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const loadMechanics = useCallback(async (refreshing = false) => {
    try {
      refreshing ? setIsRefreshing(true) : setIsLoading(true);
      setNotice(null);
      setMechanics(await fetchMechanics());
    } catch {
      setMechanics(mockMechanics);
      setNotice('Showing sample garages. Start the backend to use live data.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void loadMechanics();
  }, [loadMechanics]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.subtleText}>Finding nearby garages...</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.listContent}
      data={mechanics}
      keyExtractor={(item) => String(item.id)}
      ListHeaderComponent={
        <View style={styles.homeHeader}>
          <Text style={styles.homeTitle}>Nearby Mechanic Garages</Text>
          <Text style={styles.homeSubtitle}>Choose a garage and request help in a few taps.</Text>
          {notice ? (
            <View style={styles.noticeBanner}>
              <Text style={styles.noticeText}>{notice}</Text>
              <TouchableOpacity onPress={() => void loadMechanics()} style={styles.noticeButton}>
                <Text style={styles.noticeButtonText}>Retry</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      }
      ListFooterComponent={
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Instant Mechanic</Text>
          <Text style={styles.footerText}>Roadside support, garage visits, and quick service requests.</Text>
          <Text style={styles.footerText}>Support: 1800-555-0199</Text>
        </View>
      }
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={() => void loadMechanics(true)} />
      }
      renderItem={({ item }) => (
        <MechanicCard
          mechanic={item}
          onPress={() => navigation.navigate('MechanicDetails', { mechanicId: item.id, mechanic: item })}
        />
      )}
    />
  );
}
