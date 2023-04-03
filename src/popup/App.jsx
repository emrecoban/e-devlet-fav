import React from "react";
import "./app.css";
import logo from "../img/icon128.png";

export default function App() {
  return (
    <main>
      <header>
        <img src={logo} width="60" alt="e-Devlet Favoriler" />
        <h1>e-Devlet Favoriler</h1>
      </header>
      <section>
        <h3>Hakkında</h3>
        <p>
          Bu Chrome eklentisi, turkiye.gov.tr'de kullanıcıların favori
          işlemlerini arama kutusunun altında listelemektedir.
        </p>
        <ul>
          <li>Ücretsiz</li>
          <li>Açık Kaynak</li>
        </ul>
        <h3>Geri bildirim</h3>
        <p>
          Hata raporları, özellik talepleri ve pull request'ler memnuniyetle
          karşılanmaktadır. Bunun için{" "}
          <a href="https://github.com/emrecoban/e-devlet-fav">GitHub</a>{" "}
          üzerinden geri bildirimde bulunabilirsiniz [CTRL + Click].
        </p>
        <h3>Geliştirici</h3>
        <p>
          <a href="https://emrecoban.github.io">Emre ÇOBAN</a> tarafından 2023
          yılında ReactJS, CRXJS ve cheerio ile geliştirilmiştir.
        </p>
      </section>
    </main>
  );
}
