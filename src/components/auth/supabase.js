import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


console.log('Supabase URL:', supabaseUrl); // Debug line
console.log('Supabase Key:', supabaseAnonKey); // Debug line



export const supabase = createClient(supabaseUrl, supabaseAnonKey);