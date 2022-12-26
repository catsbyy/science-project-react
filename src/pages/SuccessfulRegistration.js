const SuccessfulRegistration = () => {
  return (
    <main className="landing-body">
      <div className="container">
        <article className="main-section">
          <h1 className="landing-title">Ваша анкета успішно збережена!</h1>
          <div className="main-section-wrapper">
            <p>Роботодавець зв'яжеться з Вами, якщо Ви підійдете його вимогам</p>
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
