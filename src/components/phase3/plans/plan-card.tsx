type PlanCardProps = {
  name: string;
  price: string;
  cadence?: string;
  discount: string;
  validity?: string;
  sessions: string;
  badge?: string;
};

export function PlanCard({ name, price, cadence, discount, validity, sessions, badge }: PlanCardProps) {
  return (
    <article className="relative flex h-[408px] w-full flex-col border border-[#cccccc] bg-white text-center text-[#292929] md:h-[430px]">
      {badge !== undefined && (
        <span className="absolute -top-[15px] right-0 bg-brand-orange px-3 py-1 text-xs text-white">
          {badge}
        </span>
      )}

      <div className="flex min-h-0 flex-1 flex-col px-8 pt-8 pb-6 md:px-7 md:pt-9">
        <h3 className="text-lg leading-tight font-normal">{name}</h3>
        <span className="mt-4 self-start text-base leading-none">$</span>
        <p className="mt-1 text-[58px] leading-none font-normal tracking-[-0.045em] md:text-[64px]">{price}</p>
        {cadence !== undefined && <p className="mt-1 text-xs">{cadence}</p>}
        <p className="mt-3 text-xs">{discount}</p>
        {validity !== undefined && <p className="mt-7 text-xs">{validity}</p>}

        <span aria-disabled="true" className="mt-auto flex h-[48px] cursor-default items-center justify-center bg-brand-blue text-sm text-white select-none">
          Select
        </span>
      </div>

      <div className="hidden h-[80px] shrink-0 items-center justify-center border-t border-[#d5d5d5] px-4 text-xs md:flex">
        {sessions}
      </div>
      <span aria-hidden="true" className="flex h-10 shrink-0 items-center justify-center text-xl leading-none text-[#999999] md:hidden">⌄</span>
    </article>
  );
}
