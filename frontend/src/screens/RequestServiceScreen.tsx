import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createServiceRequest } from '../api/mechanics';
import { styles } from '../theme/styles';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'RequestService'>;

type FormState = {
  customerName: string;
  phoneNumber: string;
  vehicleNumber: string;
  selectedService: string;
  problemDescription: string;
};

export function RequestServiceScreen({ navigation, route }: Props) {
  const { mechanic } = route.params;
  const [form, setForm] = useState<FormState>({
    customerName: '',
    phoneNumber: '',
    vehicleNumber: '',
    selectedService: mechanic.services[0] ?? '',
    problemDescription: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = useMemo(
    () => Object.values(form).every((value) => value.trim().length > 0) && /^\d{10}$/.test(form.phoneNumber),
    [form],
  );
  const selectedPrice = mechanic.servicePricing?.[form.selectedService] ?? 'Quote on visit';

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submitRequest() {
    if (!isValid) {
      Alert.alert('Check the form', 'Please fill all fields and use a 10 digit phone number.');
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await createServiceRequest({
        ...form,
        mechanicId: mechanic.id,
      });

      Alert.alert('Request confirmed', `${response.message}\nRequest ID: ${response.requestId}`, [
        { text: 'Done', onPress: () => navigation.popToTop() },
      ]);
    } catch {
      Alert.alert('Request failed', 'Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex}
    >
      <ScrollView contentContainerStyle={styles.formContent} keyboardShouldPersistTaps="handled">
        <Text style={styles.formTitle}>{mechanic.name}</Text>
        <Text style={styles.metaText}>{mechanic.address}</Text>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Customer Name</Text>
          <TextInput
            style={styles.input}
            value={form.customerName}
            onChangeText={(value) => updateField('customerName', value)}
            placeholder="Enter your name"
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={form.phoneNumber}
            onChangeText={(value) => updateField('phoneNumber', value.replace(/\D/g, '').slice(0, 10))}
            keyboardType="phone-pad"
            placeholder="10 digit phone number"
            maxLength={10}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Vehicle Number</Text>
          <TextInput
            style={styles.input}
            value={form.vehicleNumber}
            onChangeText={(value) => updateField('vehicleNumber', value.toUpperCase())}
            autoCapitalize="characters"
            placeholder="KA01AB1234"
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Service</Text>
          <View style={styles.pickerShell}>
            <Picker
              selectedValue={form.selectedService}
              onValueChange={(value) => updateField('selectedService', value)}
            >
              {mechanic.services.map((service) => (
                <Picker.Item key={service} label={service} value={service} />
              ))}
            </Picker>
          </View>
          <Text style={styles.priceHint}>Estimated price: {selectedPrice}</Text>
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Problem Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={form.problemDescription}
            onChangeText={(value) => updateField('problemDescription', value)}
            placeholder="Describe the issue"
            multiline
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity
          style={[styles.primaryButton, (!isValid || isSubmitting) && styles.disabledButton]}
          disabled={!isValid || isSubmitting}
          onPress={() => void submitRequest()}
        >
          <Text style={styles.primaryButtonText}>{isSubmitting ? 'Submitting...' : 'Submit Request'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
