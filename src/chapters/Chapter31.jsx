import React from 'react';
import { Hammer } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './ChapterConstruction.css';

export default function Chapter31() {
  return (
    <ChapterLayout 
      title="فصل ۳۱: پرونده سلامت هوشمند" 
      englishTitle="Smart Health Record"
    >
      <div className="construction-container">
        <div className="construction-icon-wrapper">
          <Hammer size={64} className="construction-icon" />
        </div>
        <h2>در حال تکمیل...</h2>
        <p>
          محتوای این فصل با عنوان <strong>«پرونده سلامت هوشمند»</strong> هم‌اکنون توسط تیم هوش مصنوعی و مهندسی در حال تدوین است.
          این بخش به زودی در دسترس قرار خواهد گرفت.
        </p>
        <div className="progress-bar-container">
          <div className="progress-bar-fill pulse"></div>
        </div>
      </div>
    </ChapterLayout>
  );
}
