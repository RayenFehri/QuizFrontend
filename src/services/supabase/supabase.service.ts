// supabase.js

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://skwmpwbmpwcuvzecehsf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21wd2JtcHdjdXZ6ZWNlaHNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODMzMjkwNywiZXhwIjoyMDIzOTA4OTA3fQ.-zvSVNTKdx23ChzCaipN3wFfRtHOq329GJU3DA6TZYs'
);

export default supabase;