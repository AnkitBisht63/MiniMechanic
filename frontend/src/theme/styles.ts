import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    gap: 12,
  },
  homeHeader: {
    gap: 6,
    marginBottom: 6,
  },
  homeTitle: {
    color: '#0f172a',
    fontSize: 26,
    fontWeight: '800',
  },
  homeSubtitle: {
    color: '#64748b',
    fontSize: 15,
    lineHeight: 22,
  },
  noticeBanner: {
    backgroundColor: '#fff7ed',
    borderWidth: 1,
    borderColor: '#fed7aa',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    gap: 8,
  },
  noticeText: {
    color: '#9a3412',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
  noticeButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#fdba74',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  noticeButtonText: {
    color: '#9a3412',
    fontSize: 13,
    fontWeight: '800',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  subtleText: {
    marginTop: 12,
    color: '#64748b',
    fontSize: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  pressed: {
    opacity: 0.84,
  },
  footer: {
    backgroundColor: '#0f172a',
    borderRadius: 8,
    padding: 16,
    marginTop: 8,
    gap: 4,
  },
  footerTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '800',
  },
  footerText: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardTitleBlock: {
    flex: 1,
  },
  cardTitle: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: '700',
  },
  metaText: {
    color: '#64748b',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },
  metricRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 8,
  },
  metricText: {
    color: '#334155',
    fontSize: 14,
    fontWeight: '600',
  },
  dot: {
    color: '#94a3b8',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  tag: {
    backgroundColor: '#eef2ff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagText: {
    color: '#3730a3',
    fontSize: 12,
    fontWeight: '700',
  },
  statusBadge: {
    minWidth: 72,
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  openBadge: {
    backgroundColor: '#dcfce7',
  },
  closedBadge: {
    backgroundColor: '#fee2e2',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '800',
  },
  openText: {
    color: '#166534',
  },
  closedText: {
    color: '#991b1b',
  },
  detailContent: {
    padding: 16,
    gap: 14,
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
    marginBottom: 4,
  },
  detailTitleBlock: {
    flex: 1,
  },
  detailTitle: {
    color: '#0f172a',
    fontSize: 26,
    fontWeight: '800',
  },
  infoPanel: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  sectionTitle: {
    color: '#0f172a',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 6,
  },
  bodyText: {
    color: '#334155',
    fontSize: 15,
    lineHeight: 22,
  },
  servicePriceList: {
    gap: 10,
    marginTop: 2,
    marginBottom: 12,
  },
  servicePriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  servicePriceTextBlock: {
    flex: 1,
  },
  serviceName: {
    color: '#0f172a',
    fontSize: 15,
    fontWeight: '800',
  },
  serviceDescription: {
    color: '#64748b',
    fontSize: 13,
    marginTop: 3,
  },
  servicePrice: {
    color: '#166534',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'right',
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
  disabledButton: {
    backgroundColor: '#94a3b8',
  },
  errorTitle: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 6,
  },
  errorText: {
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 18,
  },
  formContent: {
    padding: 16,
    gap: 14,
  },
  formTitle: {
    color: '#0f172a',
    fontSize: 22,
    fontWeight: '800',
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    color: '#0f172a',
    fontSize: 14,
    fontWeight: '800',
  },
  input: {
    minHeight: 50,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 14,
    color: '#0f172a',
    fontSize: 16,
  },
  textArea: {
    minHeight: 130,
    paddingTop: 14,
  },
  pickerShell: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    overflow: 'hidden',
  },
  priceHint: {
    color: '#166534',
    fontSize: 14,
    fontWeight: '700',
  },
});
