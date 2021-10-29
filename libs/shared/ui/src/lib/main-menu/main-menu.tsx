import { FC } from 'react';
import cn from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LinkProps = any;

/* eslint-disable-next-line */
export interface MainMenuProps {
  Link: FC<LinkProps>;
  className?: string;
  activePath?: string;
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export function MainMenu({
  Link,
  activePath,
  className,
  ...props
}: MainMenuProps) {
  const classList = cn(
    // 'bg-brand text-white py-4 px-4 sm:px-6 lg:px-8 flex justify-start align-center',
    'bg-brand text-white px-4 sm:px-6 flex justify-start align-center',
    className
  );
  return (
    <ul className={classList} {...props}>
      {links.map(({ href, label }) => {
        const linkClassList = cn(
          activePath === href ? 'bg-gray-900 bg-opacity-10' : 'bg-transparent',
          'hover:bg-gray-900 hover:bg-opacity-25 inline-flex justify-center align-center py-4 px-4 sm:px-6 lg:px-8 text-white hover:text-gray-900 hover:text-white transition-colors'
        );
        return (
          <li key={href}>
            <Link href={href} passHref>
              <a href="passHref" className={linkClassList}>
                {label}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MainMenu;
