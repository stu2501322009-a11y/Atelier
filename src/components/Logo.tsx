import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="block text-center no-underline">
      <span className="font-script text-3xl text-brand-black block leading-none">
        fixed
      </span>
      <span className="font-serif text-sm text-brand-black block leading-none">
        by
      </span>
      <span className="font-serif text-sm text-brand-red uppercase tracking-widest block leading-tight mt-0.5">
        TEODORA GATEVA
      </span>
      <span className="font-serif text-[0.7rem] text-brand-red uppercase tracking-wider block leading-none mt-1">
        ATELIER
      </span>
    </Link>
  );
}
