import "./LoginFooter.scss";

const LoginFooter = () => {
  const languages = [
    "한국어",
    "English (US)",
    "Tiếng Việt",
    "Bahasa Indonesia",
    "ภาษาไทย",
    "Español",
    "中文(简体)",
    "日本語",
    "Português (Brasil)",
    "Français (France)",
    "Deutsch",
  ];

  return (
    <div className="footer-wrapper">
      <div className="footer">
        <ul className="languages">
          {languages.map((language) => (
            <li key={language} className="language">
              {language}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoginFooter;
