# 🐟 Đèn LED Đánh Cá Đông Nam — Landing Page

Website chính thức của **Công ty TNHH SX và DV TM Đông Nam** — chuyên sản xuất đèn LED đánh cá DN-1000W và DN-1200W cho tàu cá Việt Nam.

🌐 **Website:** [leddanhcadongnam.com](https://leddanhcadongnam.com)
📞 **Hotline:** 0967 567 535
📧 **Email:** dongnam535kd@gmail.com
📍 **Địa chỉ:** QL48B, Xã Quỳnh Lưu, Tỉnh Nghệ An

---

## 📂 Cấu trúc dự án

```
dongnam-led/
├── index.html          # Trang chủ
├── products.html       # Trang sản phẩm + bảng thông số
├── about.html          # Giới thiệu công ty
├── contact.html        # Liên hệ + form + Google Map
├── 404.html            # Trang lỗi 404
├── sitemap.xml         # Sitemap cho Google
├── robots.txt          # Cấu hình bot tìm kiếm
├── CNAME               # Tên miền tùy chỉnh
├── .nojekyll           # Tắt Jekyll trên GitHub Pages
├── README.md           # File này
└── assets/
    ├── css/
    │   └── style.css   # Toàn bộ design system
    ├── js/
    │   └── main.js     # JavaScript: menu, animation, form
    └── images/         # 17 hình ảnh sản phẩm + logo + favicon
```

---

## ✨ Tính năng chính

- ✅ **Responsive** — tương thích mọi thiết bị (mobile, tablet, desktop)
- ✅ **SEO chuẩn Google** — meta tags, Open Graph, Schema.org JSON-LD
- ✅ **Tối ưu tốc độ** — preload fonts, lazy loading hình ảnh
- ✅ **Tích hợp Zalo + Phone** — nút bấm trực tiếp gọi/chat
- ✅ **Google Maps embed** — vị trí công ty tại Nghệ An
- ✅ **Form liên hệ** — tự động mở Zalo với nội dung soạn sẵn
- ✅ **Hoạt hình mượt mà** — fade-in khi cuộn trang
- ✅ **404 page tùy chỉnh** — trải nghiệm chuyên nghiệp

---

## 🚀 Hướng dẫn Deploy lên GitHub Pages + Tên miền

### Bước 1: Tạo repository trên GitHub

1. Đăng nhập [GitHub](https://github.com)
2. Click **"New repository"** (góc trên bên phải)
3. Đặt tên repo: `leddanhcadongnam` (hoặc tên bất kỳ)
4. Chọn **Public**
5. Click **"Create repository"**

### Bước 2: Upload code lên GitHub

**Cách 1: Upload trực tiếp qua giao diện web (đơn giản)**

1. Trong repo vừa tạo, click **"uploading an existing file"**
2. Kéo thả tất cả file/folder trong dự án này vào
3. Viết commit message: `Initial commit - Đông Nam LED website`
4. Click **"Commit changes"**

**Cách 2: Dùng Git command line**

```bash
cd dongnam-led
git init
git add .
git commit -m "Initial commit - Đông Nam LED website"
git branch -M main
git remote add origin https://github.com/USERNAME/leddanhcadongnam.git
git push -u origin main
```
(Thay `USERNAME` bằng tên GitHub của bạn)

### Bước 3: Bật GitHub Pages

1. Vào tab **Settings** của repository
2. Cuộn xuống mục **Pages** (menu bên trái)
3. Phần **Source**: chọn **Deploy from a branch**
4. Phần **Branch**: chọn **main** và folder **/ (root)**
5. Click **Save**
6. Đợi 1-2 phút, GitHub sẽ hiển thị link: `https://USERNAME.github.io/leddanhcadongnam/`

### Bước 4: Kết nối tên miền `leddanhcadongnam.com`

#### 4.1. Cấu hình trên GitHub

1. Trong **Settings → Pages**
2. Phần **Custom domain**: nhập `leddanhcadongnam.com`
3. Click **Save**
4. Tick chọn **Enforce HTTPS** (sau khi DNS đã trỏ đúng)

> File `CNAME` trong repo đã có sẵn nội dung `leddanhcadongnam.com`

#### 4.2. Cấu hình DNS tại nhà cung cấp tên miền

Đăng nhập vào tài khoản quản lý DNS (PA Việt Nam, Mắt Bão, GoDaddy, Namecheap, Cloudflare...) và thêm các bản ghi sau:

**A. Bản ghi A (cho domain gốc `leddanhcadongnam.com`):**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**B. Bản ghi CNAME (cho subdomain `www`):**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | USERNAME.github.io | 3600 |

(Thay `USERNAME` bằng tên GitHub của bạn)

#### 4.3. Đợi DNS lan truyền

- Thời gian: **15 phút - 24 giờ** (thường 1-2 giờ)
- Kiểm tra DNS đã hoạt động: vào https://dnschecker.org và nhập `leddanhcadongnam.com`
- Khi DNS đã trỏ đúng, GitHub sẽ tự động cấp **SSL/HTTPS miễn phí**

### Bước 5: Kiểm tra hoàn tất

✅ Truy cập `https://leddanhcadongnam.com` — website hoạt động
✅ Có biểu tượng ổ khóa (HTTPS) trên trình duyệt
✅ Các trang con (`/products.html`, `/about.html`, `/contact.html`) đều mở được
✅ Trang 404 hiển thị khi truy cập URL sai

---

## 🔧 Cập nhật nội dung sau này

Khi muốn sửa text, thêm sản phẩm, đổi hình ảnh:

1. **Sửa file HTML** tương ứng (index.html, products.html...)
2. **Thay hình ảnh** trong thư mục `assets/images/`
3. **Push code mới** lên GitHub:
   ```bash
   git add .
   git commit -m "Cập nhật nội dung"
   git push
   ```
4. GitHub Pages tự động deploy lại trong 1-2 phút

---

## 🎯 Tối ưu SEO sau khi deploy

### 1. Đăng ký Google Search Console
- Truy cập: https://search.google.com/search-console
- Thêm property: `leddanhcadongnam.com`
- Submit sitemap: `https://leddanhcadongnam.com/sitemap.xml`

### 2. Đăng ký Bing Webmaster
- Truy cập: https://www.bing.com/webmasters
- Submit sitemap tương tự

### 3. Tạo Google Business Profile
- Truy cập: https://business.google.com
- Tạo hồ sơ doanh nghiệp với địa chỉ Quỳnh Lưu, Nghệ An
- Liên kết với website

### 4. Cài Google Analytics (tùy chọn)
- Tạo tài khoản tại https://analytics.google.com
- Thêm mã tracking vào cuối file `</head>` của các trang HTML

---

## 📞 Hỗ trợ

Nếu cần hỗ trợ kỹ thuật, vui lòng liên hệ:
- **Hotline/Zalo:** 0967 567 535
- **Email:** dongnam535kd@gmail.com

---

## 📜 Bản quyền

© 2026 Công ty TNHH SX và DV TM Đông Nam. All rights reserved.
