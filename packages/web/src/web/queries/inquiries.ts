import { useMutation } from '@tanstack/react-query';
import { orpc } from '../lib/api';
export function useInquiry() { return useMutation(orpc.inquiries.create.mutationOptions()); }