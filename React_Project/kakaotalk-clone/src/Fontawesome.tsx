import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentSms,
  faUserPlus,
  faMagnifyingGlass,
  faUser,
  faComment,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

interface IconProps {
  width: string;
  height: string;
  children?: any;
}

export const FontawesomeSmsIcon = ({ width, height }: IconProps) => {
  return <FontAwesomeIcon icon={faCommentSms} style={{ width, height }} />;
};

export const FontawesomeUserPlusIcon = ({ width, height }: IconProps) => {
  return <FontAwesomeIcon icon={faUserPlus} style={{ width, height }} />;
};

export const FontawesomeSearchIcon = ({ width, height }: IconProps) => {
  return <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width, height }} />;
};

export const FontawesomeUserIcon = ({ width, height }: IconProps) => {
  return <FontAwesomeIcon icon={faUser} style={{ width, height }} />;
};

export const FontawesomeCommentIcon = ({ width, height }: IconProps) => {
  return <FontAwesomeIcon icon={faComment} style={{ width, height }} />;
};

export const FontawesomeBellIcon = ({ width, height }: IconProps) => {
  return <FontAwesomeIcon icon={faBell} style={{ width, height }} />;
};
