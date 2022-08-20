import {
  FC,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";

export interface IButtonDefault {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}

export const ButtonDefault: FC<IButtonDefault> = ({ children, ...props }) => {
  const className =
    "mt-5 mb-5 w-full py-4 px-4 rounded-md items-center text-white bg-blue-400 hover:bg-blue-500";
  return (
    <button className={className} {...props}>
      Login
      {children}
    </button>
  );
};
