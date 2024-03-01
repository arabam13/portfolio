'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';


const LocalSwitcher= () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const nextLocale = e.target.value;
      startTransition(() => {
        router.replace(`/${nextLocale}`);
      });
    };

    return (
      <label className='fixed top-5 right-2 sm:right-5 border-2 rounded-md p-2 sm:top-[6rem] lg:top-7'>
        <p className='sr-only'>change language</p>
        <select
        defaultValue={localActive}
        className='bg-transparent py-1 outline-none text-[0.9rem]'
        onChange={onSelectChange}
        disabled={isPending}
        >
          <option value='en'>🏴󠁧󠁢󠁥󠁮󠁧󠁿 EN</option>
          <option value='fr'>🇫🇷 FR</option>
        </select>
      </label>  
    );
}
 
export default LocalSwitcher;