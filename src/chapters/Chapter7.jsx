import React from 'react';
import { Bot, GitPullRequest, Activity, BrainCircuit, ScanEye, Network, MessageSquare, ShieldCheck, Database, Sparkles, Layers } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter7.css';

export default function Chapter7() {
  return (
    <ChapterLayout 
      title="فصل ۷: معماری هوش مصنوعی و مدل‌های پایه" 
      englishTitle="AI Core Engine & Agentic Architecture"
    >

      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۷-۱ پارادایم جدید هوش مصنوعی در سلامت</h3>
        <p>
          هوش مصنوعی یک جزء اختیاری و کنترل‌شده در کنار قواعد، گردش‌کار و نظارت انسانی است؛ نباید نقطه شکست همه پردازش‌ها باشد. معماری چندعاملی، RAG، مدل عمومی یا مدل تخصصی گزینه‌هایی هستند که باید با کار پایه ساده‌تر، هزینه، ایمنی و قابلیت آزمون مقایسه شوند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Network className="section-icon" /> ۷-۲ معماری چندعاملی (Multi-Agent Architecture)</h3>
        <p>
          این سیستم صرفاً یک چت‌بات ساده نیست. معماری پلتفرم بر پایه <span className="highlight-text">عامل‌های هوشمند (Autonomous Agents)</span> استوار است که می‌توانند به‌طور مستقل فکر کنند، با هم مشورت کنند و اکشن انجام دهند.
        </p>

        <div className="agentic-grid">
          <div className="agent-card">
            <h4><Bot size={24} /> عامل رهبر (AI Orchestrator)</h4>
            <p>مغز متفکر و هماهنگ‌کننده کل سیستم که:</p>
            <ul className="agent-features">
              <li>درخواست‌های کاربر را تحلیل می‌کند</li>
              <li>وظایف را بین عامل‌های تخصصی تقسیم می‌کند</li>
              <li>خروجی‌های عامل‌ها را جمع‌بندی و اعتبارسنجی می‌کند</li>
            </ul>
          </div>
          
          <div className="agent-card">
            <h4><BrainCircuit size={24} /> عامل‌های تخصصی (Specialized Agents)</h4>
            <p>در این معماری ده‌ها عامل تخصصی (Expert Agents) در پس‌زمینه فعالیت دارند:</p>
            <ul className="agent-features">
              <li><strong>عامل پزشکی (Medical Agent):</strong> بررسی علائم و راهنماهای بالینی</li>
              <li><strong>عامل سلامت روان (Mental Agent):</strong> تحلیل لحن، احساسات و استرس</li>
              <li><strong>عامل دارویی (Pharma Agent):</strong> بررسی تداخلات و ایمنی داروها</li>
              <li><strong>عامل تغذیه (Nutrition Agent):</strong> تحلیل متابولیسم و رژیم غذایی</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Layers className="section-icon" /> ۷-۳ خانواده مدل‌های پایه سلامت (Health Foundation Models)</h3>
        <p>
          عامل‌های هوشمند برای تفکر نیاز به مغز دارند. این مغز از طریق چندین مدل پایه که با داده‌های تخصصی پزشکی آموزش دیده (Fine-tuned) شده‌اند، تامین می‌شود:
        </p>
        
        <div className="ai-capabilities-grid">
          <div className="ai-cap-card">
            <h4>
              <div className="ai-cap-icon-wrapper"><MessageSquare size={20}/></div>
              مدل زبانی پزشکی (Health-LLM)
            </h4>
            <ul>
              <li>فهم عمیق اصطلاحات پیچیده پزشکی</li>
              <li>استخراج داده از متن‌های بدون ساختار (نوت پزشک)</li>
              <li>پاسخگویی همدلانه به زبان ساده برای بیمار</li>
            </ul>
          </div>

          <div className="ai-cap-card">
            <h4>
              <div className="ai-cap-icon-wrapper"><ScanEye size={20}/></div>
              مدل بینایی پزشکی (Medical Vision)
            </h4>
            <ul>
              <li>تفسیر خودکار تصاویر رادیولوژی، MRI و CT</li>
              <li>تحلیل ضایعات پوستی و تصاویر پاتولوژی</li>
              <li>تشخیص زودهنگام ناهنجاری‌ها</li>
            </ul>
          </div>

          <div className="ai-cap-card">
            <h4>
              <div className="ai-cap-icon-wrapper"><Activity size={20}/></div>
              مدل‌های سیگنال و تایم‌سری (Signal AI)
            </h4>
            <ul>
              <li>تحلیل پیوسته نوار قلب (ECG) از ساعت هوشمند</li>
              <li>تشخیص آریتمی و ناهنجاری‌های قلبی عروقی</li>
              <li>پردازش امواج مغزی (EEG) در پلتفرم شناختی</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><GitPullRequest className="section-icon" /> ۷-۴ مکانیزم‌های استدلال و یادگیری</h3>
        
        <div className="reasoning-mechanisms">
          <div className="reasoning-item">
            <h4><Database size={18} /> بازیابی افزوده با تولید (RAG - Retrieval-Augmented Generation)</h4>
            <p>
              مدل‌ها برای جلوگیری از توهم (Hallucination) و ارائه پاسخ‌های مستند، ابتدا اطلاعات را از پایگاه دانش معتبر پزشکی و پرونده شخص بازیابی کرده و سپس پاسخ را تولید می‌کنند.
            </p>
          </div>
          
          <div className="reasoning-item">
            <h4><ShieldCheck size={18} /> هوش مصنوعی تفسیرپذیر (Explainable AI - XAI)</h4>
            <p>
              پزشکان باید به هوش مصنوعی اعتماد کنند. سیستم ما به جای تولید یک پاسخ جعبه سیاه (Black Box)، منابع، میزان اطمینان (Confidence Score) و مسیر استدلال خود را به پزشک نمایش می‌دهد.
            </p>
          </div>
          
          <div className="reasoning-item">
            <h4><Sparkles size={18} /> یادگیری مستمر (Continuous Learning)</h4>
            <p>
              بازخورد پزشک و داده محیط واقعی فقط از مسیر مصوب، با رضایت/مبنای قانونی، کنترل کیفیت و change control استفاده می‌شود. مدل نباید به‌صورت خودکار و پیوسته از تعاملات بالینی یاد بگیرد یا بدون اعتبارسنجی نسخه جدید منتشر کند.
            </p>
          </div>
        </div>
      </section>

      <div className="conclusion-box">
        <h3>۷-۵ جمع‌بندی فصل</h3>
        <p>
          تصمیم معماری پس از benchmark روی کاربرد محدود گرفته می‌شود. خروجی AI ابزار کمکی است، نه «تیم پزشکی مجازی»؛ دقت، ایمنی، سرعت و هزینه باید با داده و محیط نماینده گزارش شوند.
        </p>
      </div>

    </ChapterLayout>
  );
}
