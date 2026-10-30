// Katta sarlavhalarni sig'diruvchi kichik funksiya.
// data-fit belgisi bor elementdagi har bir qator (span) o'z qutisiga sig'magunicha shrift o'lchamini kichraytiradi.
// Shunda uzun so'zlar (masalan, XAMIDULLAYEV) hech qachon o'rtasidan bo'linmaydi.
function fitAll() {
  document.querySelectorAll("[data-fit]").forEach(el => {
    el.style.fontSize = "";                     // CSS'dagi asl o'lchamdan boshlaymiz
    let size = parseFloat(getComputedStyle(el).fontSize);
    const lines = [...el.querySelectorAll("span")];
    const tooWide = () => lines.length
      ? lines.some(l => l.offsetWidth > el.clientWidth + 1)   // har bir qator alohida
      : el.scrollWidth > el.clientWidth + 1;                  // bitta qatorli sarlavha
    while (tooWide() && size > 12) {
      size -= 2;
      el.style.fontSize = size + "px";
    }
  });
}
document.fonts.ready.then(fitAll);
window.addEventListener("resize", fitAll);
