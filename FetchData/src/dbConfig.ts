import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eabtahrrcubxwalcvcvj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhYnRhaHJyY3VieHdhbGN2Y3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0NTY2ODUsImV4cCI6MjA0MDAzMjY4NX0.4XPR8iq_8iW432-1ga42IP_3UkMbyIBt5ss7Xrq_JGA"
export const supabase = createClient(supabaseUrl, supabaseKey)