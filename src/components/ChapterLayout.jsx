import React, { useState } from 'react';
import { Play, Bot, Brain, Sparkles, Target, Zap, Loader2 } from 'lucide-react';
import PresentationMode from './PresentationMode';
import './ChapterLayout.css';

const ICON_MAP = {
  Brain: Brain,
  Sparkles: Sparkles,
  Target: Target,
  Zap: Zap
};

export default function ChapterLayout({ title, englishTitle, slides, children }) {
  const [showPresentation, setShowPresentation] = useState(false);
  const [dynamicSlides, setDynamicSlides] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleStartPresentation = async () => {
    if (slides && slides.length > 0) {
      setDynamicSlides(slides);
      setShowPresentation(true);
      return;
    }

    if (dynamicSlides) {
      setShowPresentation(true);
      return;
    }

    setIsGenerating(true);
    try {
      const prompt = `You are a professional presenter for a Health OS Proposal. 
      Generate a short, engaging 3-slide presentation for the chapter titled: "${title}" (${englishTitle}).
      Return ONLY a valid JSON array of objects. Each object must have:
      - "iconName": string (choose from: "Brain", "Sparkles", "Target", "Zap")
      - "title": string (slide title in Persian)
      - "content": string (slide bullet points or main text in Persian)
      - "narration": string (the exact script the presenter will say in Persian, max 2 sentences)
      Do not include markdown formatting like \`\`\`json.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      const data = await response.json();
      if (data.candidates && data.candidates.length > 0) {
        let text = data.candidates[0].content.parts[0].text;
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(text);
        
        const mappedSlides = parsed.map(slide => ({
          icon: ICON_MAP[slide.iconName] || Brain,
          title: slide.title,
          content: slide.content,
          narration: slide.narration
        }));

        setDynamicSlides(mappedSlides);
        setShowPresentation(true);
      }
    } catch (error) {
      console.error("Failed to generate slides:", error);
      alert("متأسفانه خطایی در تولید اسلایدهای هوش مصنوعی رخ داد.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="chapter-container">
      {showPresentation && dynamicSlides && (
        <PresentationMode 
          slides={dynamicSlides} 
          onClose={() => setShowPresentation(false)} 
        />
      )}

      <div className="chapter-header">
        <div className="header-title-group">
          <h1>{title}</h1>
          {englishTitle && <p>{englishTitle}</p>}
        </div>
        <button 
          className="start-pres-btn" 
          onClick={handleStartPresentation}
          disabled={isGenerating}
        >
          {isGenerating ? <Loader2 className="animate-spin" size={20} /> : (slides ? <Play size={20} /> : <Bot size={20} />)}
          {isGenerating ? 'در حال ساخت اسلاید...' : (slides ? 'شروع ارائه صوتی' : 'تولید ارائه هوشمند')}
        </button>
      </div>

      <div className="chapter-content">
        {children}
      </div>
    </div>
  );
}
