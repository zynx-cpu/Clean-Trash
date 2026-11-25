// connect.js
const supabaseUrl = 'https://uzkilomxmgerbcaqwohr.supabase.co';
const supabaseKey = 'sb_publishable_04y-wjh0ohG-yMN6mOWaWw_MUvUZWRa';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

async function fetchWasteData() {
  const { data, error } = await supabaseClient.from('waste_records').select('*');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('ข้อมูลที่ดึงมาได้:', data);
  }
}

fetchWasteData();