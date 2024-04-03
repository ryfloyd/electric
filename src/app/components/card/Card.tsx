import type { CardProps } from '@/types';

export default function Card({ contentData, title }: CardProps) {
  return (
    
    <div className="flex flex-col p-8 bg-slate-100 dark:bg-slate-800 lg:rounded-xl space-y-2">
      <h2 className="mb-3 text-2xl font-semibold">
        {title}
      </h2>

      {contentData.map((child, index) => {
        if (typeof child === 'string') {
          return <p className="m-0 p-30 font-medium text-sm md:text-md" key={`content-${index}`}>{child}</p>;
        } else {
          return child;
        }
      })}
    </div>
  )
};