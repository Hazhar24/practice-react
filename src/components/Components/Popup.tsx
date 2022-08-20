import {
  FC,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";

export interface IPopUp {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  isShow: boolean;
}

const PopUp: FC<IPopUp> = ({ children, isShow, ...props }) => {
  if (!isShow) return null;

  const className =
    "flex justify-center items-center bg-gray-500 bg-opacity-10 backdrop-blur-sm fixed inset-0";
  return <div {...props}>{children}</div>;
};

export default PopUp;
