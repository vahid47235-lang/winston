type LegalDoc = { fa: string[]; en: string[] };

export const legalContent: Record<"privacy" | "terms" | "cookies" | "age", LegalDoc> = {
  privacy: {
    fa: [
      "وینستون ایران به حریم خصوصی بازدیدکنندگان این وب‌سایت احترام می‌گذارد. این سیاست توضیح می‌دهد که چه اطلاعاتی جمع‌آوری می‌شود و چگونه از آن استفاده می‌کنیم.",
      "اطلاعاتی که از طریق فرم تماس ارسال می‌کنید، شامل نام، ایمیل و متن پیام، صرفاً برای پاسخ‌گویی به درخواست شما استفاده می‌شود.",
      "این وب‌سایت از کوکی‌ها برای بهبود تجربه کاربری و تحلیل ترافیک استفاده می‌کند. برای جزئیات بیشتر به سیاست کوکی مراجعه کنید.",
      "ما اطلاعات شخصی شما را بدون رضایت به اشخاص ثالث نمی‌فروشیم یا اجاره نمی‌دهیم.",
      "برای هرگونه سوال درباره این سیاست، از طریق صفحه تماس با ما در ارتباط باشید.",
    ],
    en: [
      "Winston Iran respects the privacy of visitors to this website. This policy explains what information is collected and how we use it.",
      "Information submitted through the contact form — including your name, email, and message — is used solely to respond to your inquiry.",
      "This website uses cookies to improve the user experience and analyze traffic. See the Cookie Policy for further detail.",
      "We do not sell or rent your personal information to third parties without consent.",
      "For any questions about this policy, please reach out via the Contact page.",
    ],
  },
  terms: {
    fa: [
      "استفاده از این وب‌سایت به معنای پذیرش این شرایط استفاده است.",
      "این وب‌سایت صرفاً برای ارائه اطلاعات درباره برند و محصولات وینستون در ایران طراحی شده و هیچ‌گونه فروش آنلاین دخانیات انجام نمی‌دهد.",
      "محتوای این وب‌سایت، شامل متن، تصاویر و طراحی، متعلق به صاحبان نشان تجاری وینستون است و کپی یا استفاده تجاری بدون مجوز ممنوع است.",
      "این وب‌سایت صرفاً برای استفاده افراد بالای سن قانونی مصرف دخانیات در نظر گرفته شده است.",
      "ما حق به‌روزرسانی این شرایط را در هر زمان محفوظ می‌داریم.",
    ],
    en: [
      "By using this website, you agree to these terms of use.",
      "This website is designed solely to provide information about the Winston brand and its products in Iran and does not process any online tobacco sales.",
      "Content on this website — including text, imagery, and design — belongs to the owners of the Winston trademark. Unauthorized copying or commercial use is prohibited.",
      "This website is intended exclusively for use by adults of legal smoking age.",
      "We reserve the right to update these terms at any time.",
    ],
  },
  cookies: {
    fa: [
      "این وب‌سایت از کوکی‌ها برای به‌خاطر سپردن تأیید سن، تنظیمات زبان و تحلیل بازدید استفاده می‌کند.",
      "کوکی‌های ضروری برای عملکرد صحیح وب‌سایت لازم هستند و قابل غیرفعال‌سازی نیستند.",
      "کوکی‌های تحلیلی به ما کمک می‌کنند تا نحوه استفاده بازدیدکنندگان از وب‌سایت را بهتر درک کنیم.",
      "شما می‌توانید کوکی‌ها را از طریق تنظیمات مرورگر خود مدیریت یا حذف کنید.",
    ],
    en: [
      "This website uses cookies to remember age verification, language preference, and to analyze visits.",
      "Essential cookies are required for the website to function correctly and cannot be disabled.",
      "Analytics cookies help us understand how visitors use the website.",
      "You can manage or delete cookies through your browser settings at any time.",
    ],
  },
  age: {
    fa: [
      "به دلیل ماهیت محصولات دخانی، این وب‌سایت پیش از نمایش هر صفحه‌ای، تأیید سن بازدیدکننده را الزامی می‌داند.",
      "دسترسی به این وب‌سایت صرفاً برای افرادی که به سن قانونی مصرف دخانیات در ایران رسیده‌اند مجاز است.",
      "پس از تأیید سن، یک نشست امن با استفاده از کوکی ایمن (HTTP-only) برای مدتی محدود در دستگاه شما ذخیره می‌شود تا در بازدیدهای بعدی، فرآیند تأیید تکرار نشود.",
      "این فرآیند تأیید سن صرفاً برای اهداف انطباق قانونی است و اطلاعات هویتی شما ذخیره یا به اشخاص ثالث منتقل نمی‌شود.",
      "با پایان یافتن اعتبار نشست، بازدیدکننده باید مجدداً فرآیند تأیید سن را تکمیل کند.",
    ],
    en: [
      "Due to the nature of tobacco products, this website requires age verification before any page is displayed.",
      "Access to this website is permitted only for individuals who have reached the legal smoking age in Iran.",
      "After verification, a secure session is stored on your device using a secure, HTTP-only cookie for a limited period, so you are not asked again on subsequent visits.",
      "This age-verification process is used solely for legal compliance purposes; no identifying information is stored or shared with third parties.",
      "Once the session expires, visitors are required to complete age verification again.",
    ],
  },
};
