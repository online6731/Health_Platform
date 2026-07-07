import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronRight, ChevronLeft, Volume2, VolumeX, Loader } from 'lucide-react';
import './PresentationMode.css';

const GEMINI_API_KEY = 'AQ.Ab8RN6J-yKZMk220yHlycPzbim6qkC5zc8pTo7Mjx9O3nMM2lQ';

export default function PresentationMode({ slides, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  
  const audioCtxRef = useRef(null);
  const sourceNodeRef = useRef(null);

  const stopAudio = () => {
    if (sourceNodeRef.current) {
      try { sourceNodeRef.current.stop(); } catch(e){}
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }
  };

  const playL16Audio = async (base64Audio) => {
    stopAudio();
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const audioCtx = audioCtxRef.current;
    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    const binaryString = atob(base64Audio);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    // Gemini 2.5 Flash TTS usually returns raw PCM 16-bit 24kHz. 
    const floats = new Float32Array(len / 2);
    const dataView = new DataView(bytes.buffer);
    for (let i = 0; i < len / 2; i++) {
      // using Little Endian. If static noise occurs, this needs to be false (Big Endian)
      const int16 = dataView.getInt16(i * 2, true); 
      floats[i] = int16 / 32768.0;
    }
    
    const audioBuffer = audioCtx.createBuffer(1, floats.length, 24000);
    audioBuffer.getChannelData(0).set(floats);
    
    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioCtx.destination);
    source.start();
    sourceNodeRef.current = source;
  };

  const fetchGeminiTTS = async (text) => {
    setIsAudioLoading(true);
    try {
      const body = {
        contents: [{ parts: [{ text: "Convert the following text to speech exactly, read it in Persian naturally: " + text }] }],
        generationConfig: {
          responseModalities: ["AUDIO"]
        }
      };
      
      const response = await fetch(\https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=\\, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      
      const data = await response.json();
      if (data.candidates && data.candidates[0].content.parts[0].inlineData) {
        const base64Audio = data.candidates[0].content.parts[0].inlineData.data;
        await playL16Audio(base64Audio);
      }
    } catch (err) {
      console.error("Gemini TTS Error:", err);
    } finally {
      setIsAudioLoading(false);
    }
  };

  const playNarration = (text) => {
    stopAudio();
    if (!isAudioEnabled || !text) return;
    fetchGeminiTTS(text);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  // Handle narration on slide change
  useEffect(() => {
    if (slides[currentSlide] && slides[currentSlide].narration) {
      playNarration(slides[currentSlide].narration);
    }
    return () => stopAudio(); // Cleanup on unmount or slide change
  }, [currentSlide, isAudioEnabled, slides]);

  // Clean up audio completely when closing presentation
  useEffect(() => {
    return () => stopAudio();
  }, []);

  if (!slides || slides.length === 0) return null;

  const current = slides[currentSlide];
  const Icon = current.icon;

  return (
    <div className="presentation-overlay">
      <div className="pres-background-animation"></div>
      
      <button className="pres-close-btn" onClick={onClose} title="بستن (Esc)">
        <X size={32} />
      </button>

      <button 
        className={\pres-audio-btn \\}
        onClick={() => setIsAudioEnabled(!isAudioEnabled)}
        title="روشن/خاموش کردن صدای گوینده هوشمند"
      >
        {isAudioLoading ? (
          <Loader size={24} className="spinning-icon" />
        ) : isAudioEnabled ? (
          <Volume2 size={24} />
        ) : (
          <VolumeX size={24} />
        )}
        <span>
          {isAudioLoading ? 'در حال ساخت صدا...' : isAudioEnabled ? 'صدای هوش مصنوعی روشن' : 'صدا خاموش'}
        </span>
      </button>

      <div className={\pres-content \\}>
        {Icon && <div className="pres-icon-wrapper"><Icon size={80} /></div>}
        <h1 className="pres-title">{current.title}</h1>
        <p className="pres-text">{current.content}</p>
        
        {current.bullets && (
          <ul className="pres-bullets">
            {current.bullets.map((bullet, idx) => (
              <li key={idx} style={{ animationDelay: \\s\ }} className="bullet-item">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>

      {current.narration && (
        <div className={\pres-cinematic-subtitles \\}>
          <div className="subtitle-text">{current.narration}</div>
        </div>
      )}

      <div className="pres-controls">
        <button 
          className="pres-nav-btn" 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
        >
          <ChevronRight size={40} />
        </button>
        
        <div className="pres-indicators">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={\pres-dot \\}
              onClick={() => {
                if (idx !== currentSlide) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(idx);
                    setIsTransitioning(false);
                  }, 300);
                }
              }}
            />
          ))}
        </div>

        <button 
          className="pres-nav-btn" 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronLeft size={40} />
        </button>
      </div>
    </div>
  );
}
