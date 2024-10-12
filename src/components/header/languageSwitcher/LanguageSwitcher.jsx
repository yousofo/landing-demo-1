'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
export default function LanguageSwitcher({ locale }) {
  const t = useTranslations('HomePage');
  return (
    <button>
      {t('title')}
    </button>
  );
}