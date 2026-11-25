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
