import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ftkgwxqnuahjmdhydtek.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0a2d3eHFudWFoam1kaHlkdGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4ODE4OTEsImV4cCI6MjA0OTQ1Nzg5MX0.YXFTD-ZFYBPAxOX25v9XUsrBSVBq-Sg-d6ZuH5Qid-I';

export const supabase = createClient(supabaseUrl, supabaseKey);