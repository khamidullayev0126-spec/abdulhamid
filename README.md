# Jamoa portfoliolari — CoddyCamp Junior

```
portfoliolar/
├── index.html          ← jamoa sahifasi (shuni oching)
├── fit.js              ← katta sarlavhalarni ekranga sig'diradi (umumiy)
├── abdulhamid/         ← Abdulhamid Xamidullayev portfoliosi (jurnal uslubi)
│   ├── index.html
│   ├── style.css
│   ├── script.js       ← BARCHA MATNLAR SHU YERDA (ME obyekti)
│   └── photo.jpg
└── bilol/              ← Bilol Bahriddinov portfoliosi (bento uslubi)
    ├── index.html
    ├── style.css
    └── script.js       ← BARCHA MATNLAR SHU YERDA (ME obyekti)
```

## Ko'rish
`index.html` ga ikki marta bosing — jamoa sahifasi ochiladi, u yerdan ikkala portfolioga o'tasiz.

## O'zgartirish
Har bir portfolioning matnlari `script.js` boshidagi `ME` obyektida turadi.
HTML'ga tegmasdan, faqat shu obyektni o'zgartirsangiz kifoya.

**Bilol uchun:**
- Rasm: rasmingizni `bilol/` papkasiga `photo.jpg` deb saqlang va `photo: "photo.jpg"` yozing.
- Aloqa: `contacts: [{ label: "Telegram", href: "https://t.me/username" }]`
- Loyiha: `projects: [{ title: "Loyiha nomi", desc: "Qisqa tavsif", link: "https://..." }]`
- `now.percent` — JavaScript'ni qanchalik o'rgandingiz (0–100).

## Yangi jamoadosh qo'shish
1. `bilol` papkasidan nusxa oling, masalan `aziz` deb nomlang.
2. `aziz/script.js` dagi `ME` obyektini o'zgartiring (rang va dizaynni `style.css` da).
3. `index.html` dagi "Jamoadosh — tez orada" kartochkasini havolaga almashtiring:
   `<a class="card bilol" href="aziz/index.html">...</a>`

## Internetga chiqarish
Bu oddiy (statik) sayt — server kerak emas. Eng oson yo'li: GitHub'ga yuklab,
repo **Settings → Pages** bo'limida `main` branch'ni tanlang. Manzil:
`https://USERNAME.github.io/REPO-NOMI/`
