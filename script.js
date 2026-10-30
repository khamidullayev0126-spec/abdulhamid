// Abdulhamid portfoliosi
// Sahifadagi barcha matnlar shu obyektda. O'zgartirish uchun faqat shu yerni tahrirlang.
const ME = {
  firstName: "Abdulhamid",
  lastName: "Xamidullayev",
  photo: "photo.jpg",
  lead: "CoddyCamp o'quv markazining Junior guruhida dasturiy muhandislikni o'rganyapman. AI, dizayn va web dasturlash bilan ishlayman.",
  goal: "Kelajakda — <mark>Software Engineer</mark>",

  // O'rgangan ketma-ketligim. now: true — hozir o'rganyapman
  journey: [
    { name: "Scratch" },
    { name: "Pictoblox" },
    { name: "AI" },
    { name: "Figma" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Bootstrap" },
    { name: "JavaScript", now: true }
  ],

  works: [
    {
      kind: "Sayt · backend bilan",
      title: "AHdigital",
      desc: "Xizmatlarim sayti: narxlar, buyurtma formasi, admin panel va Node.js server. Render'da ishlayapti.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js"],
      link: "https://ahdigital-1pcz.onrender.com"
    },
    {
      kind: "Kontent · AI",
      title: "Noyabr Reels",
      desc: "Instagram uchun 12 ta qisqa video: web saytlar, HTML/CSS darslari va AI bilan kod yozish haqida.",
      tags: ["Claude", "AI", "Kontent"]
    },
    {
      kind: "JavaScript mashq",
      title: "Narx kalkulyatori",
      desc: "Xizmatlar sonini tanlasangiz, umumiy summani darhol hisoblaydi. AHdigital portfoliosida ishlaydi.",
      tags: ["JavaScript", "Massiv", "DOM"],
      link: "https://ahdigital-1pcz.onrender.com/portfolio/index.html#lab"
    }
  ],

  contacts: [
    { key: "Telegram", value: "@Abdulkhamid_2905", href: "https://t.me/Abdulkhamid_2905" },
    { key: "Telefon", value: "+998 95 532 29 05", href: "tel:+998955322905" },
    { key: "Gmail", value: "khamidullayev0126@gmail.com", href: "mailto:khamidullayev0126@gmail.com", copy: true }
  ]
};

// ---------- Sahifani chizish ----------

const $ = id => document.getElementById(id);

// Ism: ikki qatorga bo'lib yozamiz
$("name").innerHTML = "";
[ME.firstName, ME.lastName].forEach(part => {
  const span = document.createElement("span");
  span.textContent = part;
  $("name").appendChild(span);
});

$("photo").src = ME.photo;
$("photo").alt = ME.firstName;
$("lead").textContent = ME.lead;
$("goal").innerHTML = ME.goal;
$("issue").textContent = "Portfolio · " + new Date().getFullYear();
$("year").textContent = new Date().getFullYear();

// Ko'nikmalar lentasi: ro'yxatni ikki marta qo'yamiz, shunda aylanma lenta uzilmaydi
const tickerItems = [...ME.journey, ...ME.journey];
tickerItems.forEach(item => {
  const span = document.createElement("span");
  span.textContent = item.name;
  if (item.now) span.className = "now";
  $("ticker").appendChild(span);
});

// O'quv yo'li
ME.journey.forEach((item, i) => {
  const li = document.createElement("li");
  if (item.now) li.className = "now";
  li.innerHTML = `<span class="n"></span><span class="t"></span><span class="s"></span>`;
  li.querySelector(".n").textContent = String(i + 1).padStart(2, "0");
  li.querySelector(".t").textContent = item.name;
  li.querySelector(".s").textContent = item.now ? "hozir o'rganyapman" : "o'rgandim";
  $("journey").appendChild(li);
});

// Ishlar: havolasi bo'lsa — butun kartochka havola bo'ladi
ME.works.forEach(w => {
  const card = document.createElement(w.link ? "a" : "article");
  card.className = "work";
  if (w.link) { card.href = w.link; card.target = "_blank"; card.rel = "noopener"; }
  card.innerHTML = `<span class="kind"></span><h3></h3><p></p><div class="tags"></div>`;
  card.querySelector(".kind").textContent = w.kind;
  card.querySelector("h3").textContent = w.title;
  card.querySelector("p").textContent = w.desc;
  w.tags.forEach(t => {
    const s = document.createElement("span");
    s.textContent = t;
    card.querySelector(".tags").appendChild(s);
  });
  if (w.link) {
    const go = document.createElement("span");
    go.className = "go";
    go.textContent = "Ochish ↗";
    card.appendChild(go);
  }
  $("works").appendChild(card);
});

// Aloqa: email uchun "nusxalash" tugmasi
ME.contacts.forEach(c => {
  const li = document.createElement("li");
  li.innerHTML = `<span class="k"></span><a class="v"></a>`;
  li.querySelector(".k").textContent = c.key;
  const a = li.querySelector(".v");
  a.textContent = c.value;
  a.href = c.href;
  if (c.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
  if (c.copy) {
    const btn = document.createElement("button");
    btn.className = "copy";
    btn.type = "button";
    btn.textContent = "Nusxalash";
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(c.value);
        btn.textContent = "Nusxalandi ✓";
      } catch {
        btn.textContent = "Qo'lda nusxalang";
      }
      setTimeout(() => (btn.textContent = "Nusxalash"), 2000);
    });
    li.appendChild(btn);
  }
  $("contacts").appendChild(li);
});
