import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fpxlubobcdqebxnzrioj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZweGx1Ym9iY2RxZWJ4bnpyaW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzODQ5ODYsImV4cCI6MjAyNjk2MDk4Nn0.VF1Dx7PH06zQ3vluLRLpoBpscsd04WFLWcetC2nW9Jk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
