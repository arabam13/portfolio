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
      <label className='border-2 rounded-md p-2'>
          <p className='sr-only'>change language</p>
          <select
          defaultValue={localActive}
          className='bg-transparent py-2 outline-none'
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