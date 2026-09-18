import { Link } from 'react-router-dom';
import { heroImage } from '@/data/content';

export default function Hero() {
  return (
    <section
      className="text-center py-20 px-8 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(${heroImage})`,
      }}
    >
      <div className="max-w-3xl mx-auto animate-fade-up">
        <h1 className="text-white text-4xl md:text-5xl leading-tight mb-4 drop-shadow-lg">
          Вашата фигура диктува силуета,
          <br />
          а дрехата просто го следва
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Шивашки услуги и прецизна изработка за личния гардероб и колекциите на
          модните брандове.
        </p>
        <Link to="/contact" className="cta-button">
          Направете заявка
        </Link>
      </div>
    </section>
  );
}
