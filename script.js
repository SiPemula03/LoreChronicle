document.addEventListener("DOMContentLoaded", () => {
    const characterList = document.getElementById("character-list");
    const resultDisplay = document.getElementById("result-display");

    // Data karakter (contoh)
    const characters = [
        { name: "Lumine", material: "Lumine merupakan salah satu karakter protagonis yang dapat dimainkan di game Genshin Impact. Ia dikenal juga sebagai The Traveler dan memiliki saudara laki-laki bernama Aether." },
        { name: "Aether", material: "Aether merupakan sosok karakter laki-laki protagonis dalam game. Ia merupakan saudara kembar dari karakter perempuan Lumine yang sama-sama seorang petualang. Awalnya, mereka sedang melakukan perjalanan antar semesta hingga pada suatu saat keduanya dipisahkan oleh dewa yang menghalangi perjalanan mereka berdua." },
        { name: "Cipher", material: "Cifera? Ah, jadi kau pernah mendengar tentangku... Tapi jarang sekali orang memanggilku dengan nama itu akhir-akhir ini. Panggil saja aku Cipher. Nama itu lebih tajam dan cepat, seperti angin itu sendiri. Nama yang sempurna untuk pencuri ulung, bukan begitu?" },
        { name: "Kafka", material: "Kafka berasal dari planet Pteruges-V yang sangat dipengaruhi oleh inti bintang. Di planet itu, orang tidak bisa merasakan ketakutan dan didominasi oleh nafsu dan kesenangan serta menjadi setan. Kafka dulunya adalah pemburu setan, tapi dia tidak puas dengan status tersebut dan ingin mencari perubahan. Setelah bertemu Elio di New Babylon, dia menerima undangan Elio dan bergabung dengan Stellaron Hunter. Di bawah komando Elio, dia merekrut Blade dan Silver Wolf untuk bergabung dengan Stellaron Hunter. Kafka memiliki kemampuan kontrol mental yang kuat dan disebut kata roh; saat melepaskan kata roh, dia akan menggunakan mantra Dengarkan aku." }
    ];

    // Membuat tombol karakter
    characters.forEach(character => {
        const charDiv = document.createElement("div");
        charDiv.classList.add("character");
        charDiv.textContent = character.name;

        // Event listener untuk pemilihan karakter
        charDiv.addEventListener("click", () => {
            resultDisplay.textContent = `${character.material}`;
        });

        characterList.appendChild(charDiv);
    });
});
