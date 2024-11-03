"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, ArrowLeft, Info, Star } from 'lucide-react';

const LingerieSizeCalculator = () => {
  const [step, setStep] = useState(1);
  const [measurementType, setMeasurementType] = useState<'bra' | 'panty' | null>(null);
  const [measurements, setMeasurements] = useState({
    bust: '',
    underbust: '',
    waist: '',
    hips: ''
  });
  const [showTips, setShowTips] = useState(false);

  const getBraStyleTips = (size: string) => {
    const matches = size.match(/\d+|\D+/g);
    if (!matches) return [];
    
    const [, cup] = matches;
    const tips = [];
    
    if (['A', 'B'].includes(cup)) {
      tips.push(
        "Балконет и пуш-ап визуально увеличат грудь",
        "Кружевные модели добавят объем",
        "Бралетты создадут легкий и женственный образ"
      );
    } else if (['C', 'D'].includes(cup)) {
      tips.push(
        "Классические формы обеспечат отличную поддержку",
        "Минимайзеры помогут под облегающей одеждой",
        "Бесшовные модели будут незаметны под одеждой"
      );
    } else {
      tips.push(
        "Выбирайте модели с широкими бретелями для комфорта",
        "Обратите внимание на модели с боковой поддержкой",
        "Формованные чашки обеспечат отличную посадку"
      );
    }
    
    return tips;
  };

  const getBraSize = (underbustMeasurement: number, bustMeasurement: number): string => {
    // Простая логика расчета размера бюстгальтера
    const bandSize = Math.round(underbustMeasurement);
    const cupDifference = bustMeasurement - underbustMeasurement;
    
    const cupSizes = ['A', 'B', 'C', 'D', 'DD', 'E', 'F'];
    const cupIndex = Math.floor(cupDifference / 2.5);
    const cup = cupSizes[Math.min(cupIndex, cupSizes.length - 1)];
    
    return `${bandSize}${cup}`;
  };

  const getPantySize = (waistMeasurement: number, hipsMeasurement: number): { size: string; description: string } => {
    // Простая логика расчета размера трусиков
    const averageMeasurement = (waistMeasurement + hipsMeasurement) / 2;
    
    if (averageMeasurement < 90) return { size: "XS", description: "Очень маленький размер" };
    if (averageMeasurement < 95) return { size: "S", description: "Маленький размер" };
    if (averageMeasurement < 100) return { size: "M", description: "Средний размер" };
    if (averageMeasurement < 105) return { size: "L", description: "Большой размер" };
    return { size: "XL", description: "Очень большой размер" };
  };

  // ... остальной код остается без изменений ...
};

export default LingerieSizeCalculator;
