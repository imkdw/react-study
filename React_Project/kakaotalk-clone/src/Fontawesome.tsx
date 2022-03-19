import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentSms,
  faUserPlus,
  faMagnifyingGlass,
  faUser,
  faComment,
  faBell,
  faXmark,
  faPenToSquare,
  faArrowLeft,
  faPencil,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

interface IconProps {
  width: string;
  height: string;
  color?: string;
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

export const FontawesomeCommentIcon = ({ width, height, color }: IconProps) => {
  return <FontAwesomeIcon icon={faComment} style={{ width, height, color }} />;
};

export const FontawesomeBellIcon = ({ width, height }: IconProps) => {
  return <FontAwesomeIcon icon={faBell} style={{ width, height }} />;
};

export const FontawesomeXMarkIcon = ({ width, height, color }: IconProps) => {
  return <FontAwesomeIcon icon={faXmark} style={{ width, height, color }} />;
};

export const FontawesomEditIcon = ({ width, height, color }: IconProps) => {
  return (
    <FontAwesomeIcon icon={faPenToSquare} style={{ width, height, color }} />
  );
};

export const FontawesomArrowLeftIcon = ({
  width,
  height,
  color,
}: IconProps) => {
  return (
    <FontAwesomeIcon icon={faArrowLeft} style={{ width, height, color }} />
  );
};

export const FontawesomPencilIcon = ({ width, height, color }: IconProps) => {
  return <FontAwesomeIcon icon={faPencil} style={{ width, height, color }} />;
};

export const FontawesomCameraIcon = ({ width, height, color }: IconProps) => {
  return <FontAwesomeIcon icon={faCamera} style={{ width, height, color }} />;
};
