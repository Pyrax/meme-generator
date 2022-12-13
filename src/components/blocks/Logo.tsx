import classNames from 'classnames';

export type LogoProps = {
  className?: string | undefined;
};

const Logo = ({ className }: LogoProps) => (
  <div className={classNames(className, 'flex')}>
    <a href="/" className="flex items-center gap-2">
      <h1 className="pb-2 text-3xl font-bold text-indigo-600">
        Meme generator
      </h1>
      <img src="/logo.svg" className="h-10 pb-2" />
    </a>
  </div>
);

export default Logo;
