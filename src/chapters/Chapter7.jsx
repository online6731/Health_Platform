import React from 'react';
import { Brain, Cpu, Bot, Settings, GitPullRequest, Search, CheckCircle, Activity, BrainCircuit, ScanEye, Network, MessageSquare, LineChart, ShieldCheck, Microscope, Database, Sparkles, Layers } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter7.css';

export default function Chapter7() {
  return (
    <ChapterLayout 
      title="فصل ۷: معماری هوش مصنوعی و مدل‌های پایه" 
      englishTitle="AI Core Engine & Agentic Architecture"
    >

      <div className="intro-box">
        <h3>۷-۱ پارادایم جدید هوش مصنوعی در سلامت</h3>
        <p>
          در این پلتفرم، هوش مصنوعی یک امکان جانبی (Add-on) نیست، بلکه دقیقاً <strong>«هسته مرکزی»</strong> تمام پردازش‌ها محسوب می‌شود. 
          برخلاف سامانه‌هایی که تنها از یک مدل زبانی عمومی (General LLM) استفاده می‌کنند، این معماری بر پایه <strong>خانواده‌ای از مدل‌های تخصصی سلامت (Health Foundation Models)</strong> و معماری <strong>چندعاملی (Multi-Agent Architecture)</strong> طراحی شده است.
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
              سیستم با دریافت بازخورد از پزشکان (RLHF) و تحلیل خروجی‌های واقعی (Real-World Evidence)، به‌طور پیوسته دقت خود را افزایش می‌دهد.
            </p>
          </div>
        </div>
      </section>

      <div className="conclusion-box">
        <h3>۷-۵ جمع‌بندی فصل</h3>
        <p>
          طراحی <strong>چندعاملی (Multi-Agent)</strong> در کنار استفاده از <strong>مدل‌های بومی‌سازی‌شده (Foundation Models)</strong>، این اکوسیستم را از یک ابزار ساده به یک <strong>تیم پزشکی و مشاوره مجازی</strong> تبدیل می‌کند که با بالاترین سطح دقت، امنیت و سرعت، خدمات شخصی‌سازی‌شده ارائه می‌دهد.
        </p>
      </div>

    </ChapterLayout>
  );
}
