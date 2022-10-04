const Card = ({ children, className }: { children: React.ReactNode; className: string }) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
