import React from 'react';
import { Network, Database, Waypoints, Search, BookOpen, Share2, ArrowRight } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter35.css';

export default function Chapter35() {
  const components = [
    { icon: Database, title: 'استانداردسازی داده‌ها', desc: 'تطبیق مفاهیم استخراج شده با استانداردهای جهانی نظیر SNOMED CT، LOINC و ICD-10.' },
    { icon: Waypoints, title: 'کشف روابط پنهان', desc: 'یافتن ارتباطات غیربدیهی بین داروها، ژنتیک و عوارض جانبی که برای پزشک انسانی دشوار است.' },
    { icon: Search, title: 'جستجوی معنایی (Semantic Search)', desc: 'امکان جستجو بر اساس مفهوم (مثلاً جستجوی "بیماری‌های قلبی" نتایج "تپش قلب" را هم برمی‌گرداند).' },
    { icon: BookOpen, title: 'پایگاه دانش مرجع', desc: 'تغذیه مداوم از مقالات معتبر پزشکی (PubMed) برای به‌روزرسانی اطلاعات دارویی و درمانی.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۳۵: گراف دانش سلامت" 
      englishTitle="Healthcare Knowledge Graph"
    >
      <div className="kg-container">
        <div className="kg-hero">
          <h3>درک عمیق از روابط پزشکی</h3>
          <p>
            گراف دانش سلامت (Knowledge Graph) قلب تپنده هوش مصنوعی ما برای درک معنایی مفاهیم است. به جای ذخیره داده‌ها به صورت متنی، تمام علائم، بیماری‌ها، داروها و سوابق بیمار به صورت گره‌ها (Nodes) و روابط (Edges) ذخیره می‌شوند تا ماشین بتواند مانند پزشک استدلال کند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Share2 className="section-icon" style={{ color: '#0ea5e9' }} /> اجزای اصلی گراف دانش</h3>
          <div className="kg-grid">
            {components.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div key={idx} className="kg-card">
                  <div className="kg-icon">
                    <Icon size={24} />
                  </div>
                  <h4>{comp.title}</h4>
                  <p>{comp.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="kg-visual-section">
          <h3><Network className="section-icon" style={{ color: '#0ea5e9' }} /> نمونه ساده از گراف دانش (Ontology Mapping)</h3>
          <p className="section-desc">
            در این سیستم، داده‌های ایزوله به دانشی متصل تبدیل می‌شوند تا از تداخلات دارویی جلوگیری شده و تشخیص‌ها دقیق‌تر شوند:
          </p>
          <div className="kg-network">
            <div className="kg-node">Aspirin (Drug)</div>
            <div className="kg-edge">
              <span>CONTRAINDICATES</span>
              <ArrowRight size={16} />
            </div>
            <div className="kg-node">Peptic Ulcer (Disease)</div>
            <div className="kg-edge">
              <span>HAS_SYMPTOM</span>
              <ArrowRight size={16} />
            </div>
            <div className="kg-node">Stomach Pain (Symptom)</div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
