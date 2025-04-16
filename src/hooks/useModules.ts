
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

type Module = Database['public']['Tables']['modules']['Row'];
type ModuleContent = Database['public']['Tables']['module_content']['Row'];

export const useModules = (category?: string) => {
  return useQuery({
    queryKey: ['modules', category],
    queryFn: async () => {
      let query = supabase.from('modules').select(`
        *,
        module_content (*)
      `).order('order_index');

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as (Module & { module_content: ModuleContent[] })[];
    }
  });
};
