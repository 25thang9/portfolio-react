export default function Hero() {
  return (
    <section id="home" className="hero">
      <div>
        <p className="eyebrow">
          Xin chào, mình là
        </p>

        <h1 className="text-3xl font-bold">
  Vũ Thị Thanh Thảo
</h1>

        <p>
Mình là sinh viên năm 4 chuyên ngành Vật lý Tin học, quan tâm đến lập trình, xử lý dữ liệu, mô phỏng và phát triển các ứng dụng web đơn giản.
        </p>
       <a
  href="#contact"
  className="inline-block rounded-xl bg-brand-700 px-5 py-3 font-bold text-white! no-underline shadow-sm transition hover:bg-brand-500 dark:bg-brand-500 dark:text-slate-900! dark:hover:bg-brand-50"
>
  Liên hệ
</a>
      </div>
    </section>
  );
}