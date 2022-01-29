import styles from './CSSModule.module.css';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx('wrapper', 'inverted')}>
      ㅎㅇ나는 <span className="something">CSS Module!</span>
    </div>
  )
}

export default CSSModule;
