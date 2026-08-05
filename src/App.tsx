import { Droplet, Snowflake, Activity, Users, Factory, TrendingUp, ShieldCheck, Truck, Settings, Anchor, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen rtl" dir="rtl">
      {/* Header / Hero */}
      <header className="bg-blue-900 text-white py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
           <Snowflake size={400} />
        </div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 opacity-10">
           <Droplet size={400} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            مشروع إنتاج المياه الصحية والثلج
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto text-blue-100">
            منشأة صناعية متكاملة بنظام التناضح العكسي (RO) لتلبية احتياجات قضاء الشنافية والقرى المجاورة.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 border border-white/20">
                <Snowflake className="text-blue-300" />
                <span className="font-bold">2000 قالب ثلج يومياً</span>
             </div>
             <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 border border-white/20">
                <Users className="text-blue-300" />
                <span className="font-bold">خدمة 30,000 نسمة</span>
             </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Executive Summary Section */}
        <section className="mb-20">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">الملخص التنفيذي وأهمية المشروع</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                 <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-3 text-slate-800">تحسين الصحة العامة</h3>
                 <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                   توفير مياه شرب نقية ومطابقة للمعايير الصحية للحد من مخاطر المياه غير المصفاة عبر نظام التناضح العكسي (RO).
                 </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                 <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Activity size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-3 text-slate-800">دعم القطاع الزراعي والتجاري</h3>
                 <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                   تلبية احتياجات قطاعات متعددة مثل المطاعم، محلات بيع الأسماك، والقطاع الزراعي والحيواني.
                 </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                 <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-3 text-slate-800">جدوى اقتصادية عالية</h3>
                 <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                   دورة رأس مال سريعة وعوائد نقدية يومية تضمن استمرارية التشغيل وتوفير فرص عمل لأبناء المنطقة.
                 </p>
              </div>
           </div>
        </section>

        {/* Video Presentation Section */}
        <section className="mb-20">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">عرض توضيحي للمشروع</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
                 شاهد هذا الفيديو للتعرف على تفاصيل دراسة الجدوى وآلية عمل معمل الشنافية بشكل مبسط ومفصل.
              </p>
           </div>
           
           <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
              <video 
                 className="w-full aspect-video" 
                 controls 
                 playsInline
              >
                 {/* 
                   يرجى رفع ملف الفيديو الخاص بك إلى مجلد public 
                   وتسميته project-video.mp4
                 */}
                 <source src="./project-video.mp4" type="video/mp4" />
                 متصفحك لا يدعم تشغيل مقاطع الفيديو.
              </video>
           </div>
        </section>

        {/* Process Section */}
        <section className="mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">آلية العمل المتكاملة</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
           </div>

           <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* RO Water Process */}
              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center">
                       <Droplet size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">مسار إنتاج المياه الصحية</h3>
                 </div>
                 <ul className="space-y-6 relative before:absolute before:inset-y-0 before:right-6 before:w-0.5 before:bg-slate-100">
                    <li className="flex gap-4 relative">
                       <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-bold z-10 relative">1</div>
                       <div className="pt-2">
                          <h4 className="text-lg font-bold mb-1 text-slate-800">سحب المياه الخام والفلترة</h4>
                          <p className="text-slate-600 text-sm">سحب المياه إلى الخزانات الأساسية وتمريرها عبر فلاتر الرمل والكربون لإزالة الشوائب والروائح.</p>
                       </div>
                    </li>
                    <li className="flex gap-4 relative">
                       <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-bold z-10 relative">2</div>
                       <div className="pt-2">
                          <h4 className="text-lg font-bold mb-1 text-slate-800">معالجة التناضح العكسي (RO)</h4>
                          <p className="text-slate-600 text-sm">ضغط المياه عبر الأغشية الدقيقة لإزالة الأملاح والمعادن الزائدة بنسبة عالية.</p>
                       </div>
                    </li>
                    <li className="flex gap-4 relative">
                       <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-bold z-10 relative">3</div>
                       <div className="pt-2">
                          <h4 className="text-lg font-bold mb-1 text-slate-800">التعقيم النهائي (UV)</h4>
                          <p className="text-slate-600 text-sm">التعقيم بالأشعة لضمان القضاء التام على البكتيريا والفيروسات قبل التعبئة.</p>
                       </div>
                    </li>
                 </ul>
              </div>

              {/* Ice Process */}
              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                       <Snowflake size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">مسار إنتاج قوالب الثلج</h3>
                 </div>
                 <ul className="space-y-6 relative before:absolute before:inset-y-0 before:right-6 before:w-0.5 before:bg-slate-100">
                    <li className="flex gap-4 relative">
                       <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold z-10 relative">1</div>
                       <div className="pt-2">
                          <h4 className="text-lg font-bold mb-1 text-slate-800">ملء قوالب الوجبة</h4>
                          <p className="text-slate-600 text-sm">ضخ المياه النقية لتعبئة 2000 قالب ثلج داخل حوض التجميد المعدني.</p>
                       </div>
                    </li>
                    <li className="flex gap-4 relative">
                       <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold z-10 relative">2</div>
                       <div className="pt-2">
                          <h4 className="text-lg font-bold mb-1 text-slate-800">منظومة التبريد المركزية</h4>
                          <p className="text-slate-600 text-sm">ضغط غاز الأمونيا عبر ضواغط مركزية لتبريد مياه الملح وتجميد القوالب.</p>
                       </div>
                    </li>
                    <li className="flex gap-4 relative">
                       <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold z-10 relative">3</div>
                       <div className="pt-2">
                          <h4 className="text-lg font-bold mb-1 text-slate-800">السحب والإنتاج النهائي</h4>
                          <p className="text-slate-600 text-sm">سحب القوالب المتجمدة بواسطة ناقل حركة كهروميكانيكي (Crane) لتوجيهها للتسويق.</p>
                       </div>
                    </li>
                 </ul>
              </div>
           </div>
        </section>

        {/* Equipment List */}
        <section className="mb-20">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">قائمة المعدات الأساسية</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                 { icon: <Factory />, title: "ضاغط تبريد مركزي (2005)", desc: "ضغط الغاز في دورة التبريد لإنتاج الثلج بكفاءة." },
                 { icon: <Settings />, title: "ضاغط تبريد مركزي (2006)", desc: "مزود بمحرك لضمان استمرارية التجميد." },
                 { icon: <Anchor />, title: "ناقل حركة كهروميكانيكي", desc: "رافعة علوية (Crane) لسحب ونقل قوالب الثلج." },
                 { icon: <Snowflake />, title: "حوض التجميد المعدني", desc: "يتسع لـ 2000 قالب، مجهز بشبكات أنابيب." },
                 { icon: <Zap />, title: "منظومة توليد الطاقة", desc: "3 مولدات (كيا + 2 إضافية) للعمل المستمر." },
                 { icon: <Droplet />, title: "خط تصفية متكامل (RO)", desc: "فلاتر رمل وكاربون وأشعة فوق بنفسجية." },
              ].map((item, index) => (
                 <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                       {item.icon}
                    </div>
                    <div>
                       <h4 className="font-bold text-lg mb-1 text-slate-800">{item.title}</h4>
                       <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Marketing and Financials */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
           <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8 md:p-10 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Truck size={28} className="text-blue-300" />
                 </div>
                 <h3 className="text-2xl font-bold">خطة التوزيع والتسويق</h3>
              </div>
              <ul className="space-y-5">
                 <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed text-blue-50">البيع المباشر (الجملة والمفرد) عبر نافذة المصنع.</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed text-blue-50">التعاقد المباشر مع محلات الأسماك، المقاهي، ومراكز التسوق.</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed text-blue-50">توفير خدمة توصيل (أسطول نقل مبرد) لضمان الوصول للعملاء في المناطق البعيدة.</span>
                 </li>
              </ul>
           </div>

           <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <TrendingUp size={28} className="text-blue-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-blue-900">المؤشرات المالية</h3>
              </div>
              <div className="space-y-6">
                 <div className="pb-4 border-b border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">الإيرادات المتوقعة</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">بيع 2,000 قالب يومياً في المواسم الحارة، وعوائد مستمرة من بيع المياه الصحية المعبأة، مما يولد تدفقاً نقدياً عالياً.</p>
                 </div>
                 <div className="pb-4 border-b border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">هامش الربح الصافي</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">يتوقع تحقيق هامش ربح شهري ممتاز بعد خصم المصاريف التشغيلية، نظراً لانخفاض تكلفة المواد الأولية (الماء).</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-800 mb-2">فترة استرداد رأس المال</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">سريعة جداً ومرتبطة بمواسم الذروة الصيفية وكثافة الطلب في القرى والمناطق المجاورة.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
         <div className="container mx-auto px-4">
            <p className="max-w-2xl mx-auto leading-relaxed mb-8">يجمع المشروع بين الجدوى الفنية المتمثلة في البنية التحتية القوية والمعدات المتكاملة، والجدوى الاقتصادية المستندة إلى الطلب العالي، ليكون استثماراً آمناً ومربحاً يساهم في دعم الاقتصاد المحلي.</p>
            
            <div className="flex flex-col items-center gap-3 mb-8 border-t border-slate-800 pt-8 max-w-2xl mx-auto">
               <p className="font-bold text-white text-lg">إعداد : مهندس سجاد الهنداوي</p>
               <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300" dir="ltr">
                  <a href="tel:07826940781" className="hover:text-white transition-colors">07826940781</a>
                  <span className="text-slate-600">|</span>
                  <a href="mailto:sajjad.abdulhameed@gmail.com" className="hover:text-white transition-colors">sajjad.abdulhameed@gmail.com</a>
                  <span className="text-slate-600">|</span>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
               </div>
            </div>

            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} مشروع إنتاج المياه الصحية والثلج في الشنافية. جميع الحقوق محفوظة.</p>
         </div>
      </footer>
    </div>
  );
}
