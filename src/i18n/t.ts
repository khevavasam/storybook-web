 import messages from '@/i18n/messages/en.json'
 
 type AnyRecord = Record<string, unknown>
 
 function getByPath(obj: unknown, path: string): unknown {
   return path.split('.').reduce<unknown>((acc, key) => {
     if (acc && typeof acc === 'object' && key in (acc as AnyRecord)) {
       return (acc as AnyRecord)[key]
     }
     return undefined
   }, obj)
 }
 
 /**
  * Temporary lightweight translator.
  * Later replace with next-intl (useTranslations / messages by locale).
  */
 export function t(key: string): string {
   const value = getByPath(messages, key)
   return typeof value === 'string' ? value : key
 }

