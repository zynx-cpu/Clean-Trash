# 🌱 Clean Trash - ระบบจัดการขยะ

เว็บแอปพลิเคชันสำหรับส่งเสริมการจัดการขยะอย่างยั่งยืน ช่วยให้ผู้ใช้สามารถบันทึกข้อมูลการแยกขยะ สะสมแต้ม แลกของรางวัล และติดต่อสื่อสารกับแอดมินได้ พัฒนาด้วย HTML, CSS, JavaScript (Vanilla) และเชื่อมต่อฐานข้อมูลผ่าน Supabase

## ✨ ฟีเจอร์หลัก
- **ระบบสมาชิก (Authentication):** สมัครสมาชิก, เข้าสู่ระบบ, ออกจากระบบ
- **แก้ไขโปรไฟล์:** เปลี่ยนชื่อที่แสดง, อัปโหลดรูปโปรไฟล์, และเปลี่ยนอีเมล (แยกส่วนกันชัดเจน)
- **แยกขยะ (Waste Form):** บันทึกข้อมูลการแยกขยะ (ประเภท, น้ำหนัก, แนบรูปภาพ)
- **แลกขยะ (Redeem):** สะสมแต้มจากการแยกขยะ (1 กก. = 10 แต้ม) และแลกของรางวัล (เสื้อ, กางเกง, กระเป๋า)
- **สัดส่วนขยะ (Stats):** แสดงกราฟวงกลม (Doughnut Chart) สรุปสัดส่วนขยะแต่ละประเภทของผู้ใช้
- **การรณรงค์ (Campaign):** ประชาสัมพันธ์กิจกรรมและแคมเปญรักษ์โลก พร้อมป๊อปอัปดูรายละเอียด
- **ติดต่อเรา & แชท (Contact & Chat):** ฟอร์มติดต่อสอบถาม และระบบแชทลอย (Floating Chat) แบบเรียลไทม์กับแอดมิน (สไตล์ Roblox)
- **Responsive Design:** รองรับการใช้งานบนมือถือ แท็บเล็ต และคอมพิวเตอร์

## 🛠️ เทคโนโลยีที่ใช้
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend & Database:** [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage, Realtime)
- **Chart:** [Chart.js](https://www.chartjs.org/)
- **Icons:** [Font Awesome](https://fontawesome.com/)
- **Fonts:** [Google Fonts (Kanit)](https://fonts.google.com/specimen/Kanit)

## 📂 โครงสร้างโปรเจกต์
```text
clean-trash/
├── index.html          # หน้า Dashboard หลัก
├── auth.html           # หน้า Register / Login
├── profile.html        # หน้าแก้ไขโปรไฟล์
├── waste-form.html     # หน้าบันทึกการแยกขยะ
├── redeem.html         # หน้าแลกของรางวัล
├── waste-stats.html    # หน้าสัดส่วนขยะ (กราฟ)
├── campaign.html       # หน้าข่าวสารการรณรงค์
├── contact.html        # หน้าติดต่อเรา & แชท
├── connect.js          # ไฟล์เชื่อมต่อ Supabase
└── README.md           # ไฟล์อธิบายโปรเจกต์
```
## 📂 โครงสร้างโปรเจกต์
🚀 การติดตั้งและใช้งาน (Getting Started)
1. Clone โปรเจกต์
```text
git clone https://github.com/[ชื่อผู้ใช้ของคุณ]/clean-trash.git
cd clean-trash
```

### 2. ตั้งค่า Supabase
สมัครสมาชิกที่ Supabase และสร้างโปรเจกต์ใหม่
คัดลอก Project URL และ Anon Key (หรือ Publishable Key)
นำค่าที่ได้ไปใส่ในไฟล์ connect.js หรือในแท็ก <script> ของหน้าเว็บ:
```text
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
```

### 3. สร้างตารางในฐานข้อมูล (Database Schema)
คุณต้องสร้างตารางดังต่อไปนี้ใน Supabase (Table Editor):
```text
  profiles (ข้อมูลโปรไฟล์)
  id (uuid, Primary Key)
  full_name (text)
  avatar_url (text)
  updated_at (timestamptz)
  waste_records (ประวัติการแยกขยะ)
  id (int8, Primary Key, Identity) user_id (uuid)
  waste_type (text)
  weight (float8)
  image_url (text)
  created_at (timestamptz)
  messages (ข้อความแชท)
  id (int8, Primary Key, Identity)
  user_id (uuid)
  sender (text: 'user' หรือ 'admin')
  content (text)
  created_at (timestamptz
```

### 4. ตั้งค่า RLS (Row Level Security)
เพื่อความปลอดภัยของข้อมูล ควรเปิด RLS และสร้าง Policy สำหรับแต่ละตาราง: 
  - **profiles: อนุญาตให้ผู้ใช้เห็น/แก้ไขเฉพาะข้อมูลของตัวเอง (auth.uid() = id)**
  - **waste_records: อนุญาตให้ผู้ใช้เห็น/เพิ่มข้อมูลของตัวเอง (auth.uid() = user_id)**
  - **messages: อนุญาตให้ผู้ใช้เห็น/ส่งข้อความของตัวเอง (auth.uid() = user_id)**

### 5. การตั้งค่า Storage (สำหรับรูปภาพ)
  - **สร้าง Bucket ชื่อ avatars (รูปโปรไฟล์) และ waste_images (รูปขยะ)**
  - **ตั้งค่าเป็น Public bucket**
  - **สร้าง Policy อนุญาตให้ INSERT และ SELECT สำหรับผู้ใช้ที่ล็อกอิน**

### 6. การตั้งค่า Authentication
  - ** ไปที่ Authentication > Providers > Email**
  - ** ปิด Confirm email (เพื่อความสะดวกในการทดสอบ)**
  - ** ตั้งค่า Site URL และ Redirect URLs เป็น URL ของเว็บคุณ (เช่น https://www.cleantrash.online)**
### 7. รันโปรเจกต์
เปิดไฟล์ index.html ในเบราว์เซอร์ หรือใช้ Extension อย่าง Live Server ใน VS Code เพื่อทดสอบ

# 🐛 การแก้ไขปัญหาที่พบบ่อย (Troubleshooting)
  - **Error: supabase is not defined**
        - ตรวจสอบให้แน่ใจว่าได้โหลด <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script> ก่อน ไฟล์ connect.js หรือสคริปต์ที่ใช้งาน Supabase
  - **Error: redeclaration of non-configurable global property supabase**
        - เกิดจากการประกาศตัวแปร const supabase ซ้ำกันหลายที่ ให้ตรวจสอบและลบให้เหลือเพียงจุดเดียว
  - **Error: invalid input syntax for type uuid**
        - เกิดจากพยายามกรอกตัวเลข (เช่น "1") ลงในช่อง id ที่เป็นชนิด uuid ให้ปล่อยว่างไว้หรือใช้ gen_random_uuid()
  - **อัปโหลดรูปภาพไม่ขึ้น / Error เกี่ยวกับ Storage**
        - ตรวจสอบว่าสร้าง Bucket แล้วหรือยัง และได้ตั้งค่า Policy ให้ INSERT และ SELECT เรียบร้อยแล้ว
  - **สมัครสมาชิกแล้วล็อกอินไม่ได้**
        - ตรวจสอบว่าได้ปิด Confirm email ใน Supabase > Authentication > Providers > Email แล้วหรือยัง**

### 📌 หมายเหตุและข้อควรระวัง
  - **ไฟล์นี้เป็นตัวอย่างสำหรับการพัฒนาเบื้องต้น คุณสามารถปรับแต่งเพิ่มเติมได้ตามต้องการ
  อย่าลืมเปลี่ยน YOUR_SUPABASE_URL และ YOUR_SUPABASE_ANON_KEY ให้เป็นค่าของคุณเอง
  ห้ามนำ Secret Key ของ Supabase ไปใส่ในโค้ด Frontend เด็ดขาด เพราะจะทำให้ฐานข้อมูลไม่ปลอดภัย
  หากพบปัญหาหรือข้อผิดพลาด สามารถแจ้งได้ที่ Issues
  การ Deploy: แนะนำให้ใช้ GitHub Pages, Netlify หรือ Vercel ในการโฮสต์เว็บ (ฟรี)**

# 👨‍💻 ผู้พัฒนา
นัทธวัฒน์ ปลอดสันเทียะ - https://github.com/zynx-cpu

# 📄 License
none
