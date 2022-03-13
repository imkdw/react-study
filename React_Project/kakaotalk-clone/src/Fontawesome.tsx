import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentSms, faUserPlus } from "@fortawesome/free-solid-svg-icons";

interface IconProps {
  width: string;
  height: string;
}

export const FontawesomeSmsIcon = ({ width, height }: IconProps) => {
  return <FontAwesomeIcon icon={faCommentSms} style={{ width, height }} />;
};

export const FontawesomeUserPlusIcon = ({ width, height }: IconProps) => {
  return <FontAwesomeIcon icon={faUserPlus} style={{ width, height }} />;
};
