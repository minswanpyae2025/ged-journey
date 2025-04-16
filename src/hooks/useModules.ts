
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

type Module = Database['public']['Tables']['modules']['Row'];
type ModuleContent = Database['public']['Tables']['module_content']['Row'];
type ModuleCategory = Database['public']['Enums']['module_category'];

export const useModules = (category?: string) => {
  return useQuery({
    queryKey: ['modules', category],
    queryFn: async () => {
      let query = supabase.from('modules').select(`
        *,
        module_content (*)
      `).order('order_index');

      if (category) {
        // Only apply the filter if category is a valid module category
        const validCategories: ModuleCategory[] = ['math', 'science', 'language_arts', 'social_studies'];
        if (validCategories.includes(category as ModuleCategory)) {
          query = query.eq('category', category as ModuleCategory);
        }
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as (Module & { module_content: ModuleContent[] })[];
    }
  });
};
