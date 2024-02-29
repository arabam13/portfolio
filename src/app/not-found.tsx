'use client';

// import { NextIntlClientProvider, useMessages } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  // const messages = useMessages();
  // console.log(messages);
  // const locale = useLocale();
  // const t = useTranslations('NotFoundPage');

  return (
    <html>
      <body className='text-center'>
      {/* <NextIntlClientProvider
        // locale={locale}
        // messages={messages}
      > */}
        <h1 className='mt-10 font-semibold'>Page Not Found</h1>
        {/* <h1 className='mt-10 font-semibold'>{t('title')}</h1> */}
        <p className='mt-10'>Oops! It seems like you&apos;ve stumbled upon a page that doesn&apos;t exist. Please click on the button below to return to the home page.</p>
        <button type='button' className="mt-10 border p-2 rounded" onClick={()=> router.replace(`/en`)}>Back</button>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}