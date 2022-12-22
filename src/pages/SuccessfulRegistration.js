const SuccessfulRegistration = () => {
  return (
    <main className="landing-body">
      <div className="container">
        <article className="main-section">
          <h1 className="landing-title">Ваша анкета успішно збережена!</h1>
          <div className="main-section-wrapper">
            <p>Роботодавець зможе зв'язатися з Вами, якщо Ви підійдете під його вимоги</p>
            <a href="/">
              <button>Повернутися на головну сторінку</button>
            </a>
          </div>
        </article>
      </div>
    </main>
  );
};

export default SuccessfulRegistration;
