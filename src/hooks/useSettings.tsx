import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SettingsContextType {
  phone: string;
  isLoading: boolean;
  updatePhone: (newPhone: string) => Promise<void>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [phone, setPhone] = useState<string>('000000000');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPhone = async () => {
    try {
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'phone')
        .single();

      if (error) {
        console.error('Error fetching phone setting:', error);
        setPhone('000000000');
      } else {
        setPhone(data?.value || '000000000');
      }
    } catch (error) {
      console.error('Error fetching phone setting:', error);
      setPhone('000000000');
    } finally {
      setIsLoading(false);
    }
  };

  const updatePhone = async (newPhone: string) => {
    const { error } = await supabase
      .from('settings')
      .upsert({ key: 'phone', value: newPhone })
      .eq('key', 'phone');

    if (error) {
      throw error;
    }

    setPhone(newPhone);
  };

  useEffect(() => {
    fetchPhone();
  }, []);

  const value = {
    phone,
    isLoading,
    updatePhone,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};