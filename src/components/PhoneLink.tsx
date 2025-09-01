import { useSettings } from '@/hooks/useSettings';

interface PhoneLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export const PhoneLink = ({ className = "text-primary hover:underline font-medium", children }: PhoneLinkProps) => {
  const { phone } = useSettings();
  
  return (
    <a href={`tel:${phone}`} className={className}>
      {children || phone}
    </a>
  );
};