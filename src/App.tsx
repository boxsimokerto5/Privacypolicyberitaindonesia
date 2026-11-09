/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { KeyHighlights } from './components/KeyHighlights';
import { PolicySections } from './components/PolicySections';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bi_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [viewMode, setViewMode] = useState<'summary' | 'full'>('summary');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bi_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bi_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSelectSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans transition-colors">
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onPrint={handlePrint}
      />

      <main>
        <HeroSection />
        <KeyHighlights onSelectSection={handleSelectSection} />
        <PolicySections
          viewMode={viewMode}
          onChangeViewMode={setViewMode}
        />
      </main>

      <Footer />
    </div>
  );
}
