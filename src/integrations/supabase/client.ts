// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wcshkvpgkbcuulzkznol.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indjc2hrdnBna2JjdXVsemt6bm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3ODI3MzgsImV4cCI6MjA2MDM1ODczOH0.Mod6b4MVN2ISnP0w26dH-tCFFEx6Jc1mPo4g2mZeNpg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);