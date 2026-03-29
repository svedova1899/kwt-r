document.querySelectorAll('[contenteditable="true"]').forEach(element => {
  const storageKey = `savedText_${element.className}_${element.tagName}`;
  element.innerText = localStorage.getItem(storageKey) || element.innerText;

  element.addEventListener('input', () => {
    localStorage.setItem(storageKey, element.innerText);
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const modal = document.querySelector(".modal");
  const btn = document.querySelector(".description-list__button");
  const closeBtn = document.querySelector(".close");

  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
})

const translations = {
  Ukrainian: {

    phone1: "0995535030",
    phone2: "0675241200",
    company_info: "КВТ ГРУП ТОВ, ЄДРПОУ/ДРФО 45149954 МФО 305299,<br>№UA583052990000026007050590339",
    address: "м. Дніпро, вул. Мандриківська 44а +38 067 524 12 00",

    main_title: "Маятник<br>Дугінця",
    description1: "Запатентована машина перетворює<br>коливання маятника в електроенергію.",
    description2: "Тепер для вас 1 квт=1гривня",
    description3: "Ми допоможемо вам заробляти, а не тільки<br>економити",
    description4: "Маятник виробляється на замовлення.<br> Потужність від 50 квт до 200 квт.",
    investors: "<span class=\"color-span\">Інвестори</span> від 4 000 грн до 40 000 000 грн<br>ласкаво просимо!",
    button_guarantees: "Фінансові гарантії для інвесторів",

    modal_text: "Перед тим, як інвестувати в когось, треба довіряти тій компанії або людині. Потрібно відповісти на питання: А хто ця людина чи хто стоїть за цією компанією? Чи є в нього план Б повернення моїх грошей? <br>" +
      "Директором ТОВ КВТ ГРУП є Дугінець Ігор Євгенович. Який досвід він має, щоб довірити йому свої гроші?Як він повертатиме їх, якщо щось піде не по плану? <br>" +
      "Досвід Дугінця Ігоря Євгеновича: <br>" +
      "1. У 2001 році ,у віці 24 роки, привіз до Дніпра перший довгий лімузин на 6 персон для обслуговування весіль та різноманітних івентів. Попри всіх скептиків бізнес став успішним. " +
      "Рекорд у 2007 році у вересні місяці прибуток на двох з партнером склав $41000 за один місяць. " +
      "У 2008 році має на двох з партнером 8 довгих лімузинів, включно з єдиним в Україні 12 метровим шостиколісним лімузином на 14 персон та хамером лімузином на 20 персон, та 10 автомобілів представницького класу, та єдиний в Україні кабріолет лінкольн контінентал 1963 року. " +
      "На подібному авто їздив американський президент Джон Ф Кенеді. До початку повномасштабного вторгнення у 2022 році лімузини працювали та приносили прибуток власникам і радість клієнтам. " +
      "Зараз не той у людей настрій, щоб так помпезно відзначати весілля. Але лімузини окупились ще у 2010 році. І після цього 12 років приносили чистий прибуток. <br>" +
      "2.З 2015 року Дугінець Ігор Євгенович привіз під замовлення більше 400 електромобілів юридичним та фізичним особам. Має 99% позитивних відгуків. <br>" +
      "3.З 2019 року має парк електро таксі. Зараз кількість автомобілів 22 штуки. Машини працювали в блекаути і працюють зараз, приносячи прибуток. Дохід в середньому 500000 грн на місяць. <br>" +
      "4.Також має свої швидкісні зарядні станції. <br>" +
      "Якщо припустити, що проект Маятник Дугінця не працює, як Дугінець Ігор Євгенович буде віддавати інвестовані гроші? " +
      "В нього є прибутковий бізнес з якого він може розраховуватись. <br>" +
      "Але Маятник Дугінця буде популярним настільки ,що буде черга на місяці вперед. Заводи будуть відкриті у різних містах України та інших держав. " +
      "Будуть отримані патенти у цих державах. Маятник Дугінця це базовий проект дешевої електроенергії. " +
      "Анонс: Після його старту будуть ще, як мінімум, чотири великих проекта, пов'язаних з виробництвом дешевої електроенергії: <br>" +
      "1. Електрифікація вантажних перевезень по всій Україні на основі дешевої електроенергії, яку виробляє Маятник Дугінця. " +
      "Клієнтами стануть Нова Пошта, Delivery та інші подібні сервіси, а також фермери по всій Україні. " +
      "Бо тарифи на перевезення вантажів будуть значно нижче ніж на дизельних фурах. Більше інформації з'явиться пізніше. <br>" +
      "2. Клуб \"Один Біткоїн на добу \" теж працюватиме від Маятника Дугінця. Буде закуплено майнінгове обладнання, " +
      "яке буде приносити один Біткоїн на добу, використовуючи електроенергію Маятників Дугінця. " +
      "Приблизно потрібно 114000 квт на добу, щоб отримати один Біткоїн. Інформація про вступ в клуб буде пізніше. <br>" +
      "3. Мобільні швидкісні зарядні станції: Буде виробництво причепів на 450 квт ємністю, які будуть заряджатись маятниками Дугінця і вивозитись на місце, " +
      "де електромобілі будуть заряджатись зі швидкістю до 240 квт за годину. Їх буде багато в різних містах України. " +
      "Економія на оренді площі під кожне паркомісце для кожного електромобіля декілька тисяч гривень на місяць. " +
      "Плюс продажна ціна 1кВт =14 грн при собівартості менше однієї гривні. " +
      "До двох разів на день один причеп може виїджати і продавати електроенергію. Більше інформації згодом. <br>" +
      "4. Виробництво, встановлення лінійних генераторів на електромобілі, які працюють від нерівності наших доріг. " +
      "Ці генератори будуть заряджати батарею електромобіля в прцесі руху. " +
      "Це додаткове обладнання для електромобілів, яке буде встановлюватись в різних містах України з подальшим обслуговуванням. <br>" +
      "Ті хто інвестує у Маятник Дугінця, отримє можливість інвестувати в ці проекти. " +
      "Тому інвестувати в Маятник Дугінця вигідно і безпечно. " +
      "Також разом ми зможемо зробити Україну більш конкурентноспроможною. " +
      "Тепер український виробник, знизивши витрати на виробництво своєї продукції, може конкурувати по ціні та якості з іншими подібними виробництвами. <br>" +
      "Я завжди заробляв гроші, одночасно роблячи корисні речі для людей. " +
      "Це неймовірне відчуття приносити користь та нести світло і тепло людям в прямому сенсі слова. " +
      "Маятник Дугінця виробляє електроенергію за низькою ціною для світла, опалення і виробництва будь-чого.",

    explanation1: "Перетворення можливо завдяки закону збереження енергії. Тому що вічних двигунів не існує і не може існувати. Вкладена енергія = енергія на виході. В нашому випадку Вкладена енергія = енергія підштовхування маятника(кожен період 24/7) + сила тяжіння. Можна ще розписувати ці сили на складові, але важливо, що Маятник Дугінця працює і виробляє електроенергію дуже дешево. Собівартість виробленої електроенергії менше однієї гривні за один квт. Ця машина як і описано фізикою має великий виграш в силі і великий програш у відстані. Маємо велику амплітуду коливань маятника і дуже малий хід вихідного механізму, маючи багато сили.",
    explanation_point1: "Спочатку енергія вкладається в Маятник Дугінця за допомогою підштовхування кожний період коливань. Коливання маятника змушують інший край коромисла підійматись вверх кожен раз, коли маятник проходить нижню точку своїх коливань. Завдяки особливості конструкції Маятник, який не зв'язаний жорстко з іншими частинами машини, потребує одного і того ж зусилля для підтримування коливань.",
    explanation_point2: "Якщо порівняти цю систему з ,наприклад , зубчатою передачею або ланцюговою, то в них при блокуванні однієї частини механізму блокується все. Тому маятник в цій системі не реагує на можливе блокування будь якої частини всієї машини. Він буде продовжувати свої коливання поки його підштовхують, виробляючи або не виробляючи електроенергію. Тому і зусилля на підтримку коливань одне і теж, з навантаженням чи без.",
    explanation_point3: "Маятник має свій ліміт сили, яку він може передати машині для скоєння роботи. Якщо навантажити другу частину коромисла, на якому з однієї сторони маятник ,а з іншої противага, непід'йомною вагою для конкретного маятника, то робота не буде вироблятись, а маятник буде коливатись з тією ж самою амплітудою та з тим самим зусиллям, якби він підіймав вантаж с другої сторони коромисла.",

    pendulum_description: "Маятник змушує коливатись противагу, яка в свою чергу змушує підіймати і опускати модулі з магнітами в лінійному генераторі та виробляти електроенергію. Лінійний генератор включає в себе закріплений статор( залізо, з намотаною на нього мідною проволокою) та рухаючийся слайдер на колесах з магнітами. Магніти, рухаючись вдовж статора виробляють електроенергію. Для необхідної потужності вихідної електроенергії додається потрібна кількість модулів, а також розраховується необхідна вага маятника та противаги, та довжина коромисла.",

    video_button: "Як за допомогою маятника<br>заробляти",

    circle1: "Як за допомогою маятника не просто економити на рахунках за електроенергію, а ще і заробляти?",
    circle2: "Можна додатково інвестувати в содіум іонні батареї. Ми будемо давати  заряджені батареї в оренду,  а розряджені привозити до вас на зарядку. ",
    circle3: "Ви заробляєте від 13 до 17 грн на одному кіловаті. Ваш маятник працює 24/7",

    money_making_description: "Уявіть, ви придбали Маятник Дугінця. Інвестували в додаткові батареї. Далі ми підписуємо договір оренди батарей з вами і даємо в оренду ваші заряджені батареї офісам, магазинам, швидкісним зарядним станціям, торговим центрам, будь-якому бізнесу. Бо в них тариф на електроенергію від 16 до 20 грн. А ми їм даємо дешевше. Вони нічого не платять, ми встановлюємо шафи з інверторами, батареями і лічильником. Раз на тиждень міняємо розряджені батареї. А у випадку зі швидкісними станціями декілька разів на день. Щоб вам було легко заробляти з маятником Дугінця, нам довелось створити свій науково дослідницький інститут з виробничим цехом, інвестувати більше $250 000 та 7 років наполегливої праці, провести багато дорогих випробувань, витратити купу нервів, знайти потрібних фахівців, яких майже не має, навчати своїх працівників і навчатись самим, вірити в успіх тоді, коли не було надії на фінансування та на знайомство з потрібними фахівцями. В цей продукт вкладено гроші, віра, праця, роки життя від першої думки у 2011 році до виготовлення працюючої машини у 2025 році. Тепер ви розумієте весь пройдений шлях. Дякуємо.",

    footer_company_info: "КВТ ГРУП ТОВ, ЄДРПОУ/ДРФО 45149954 МФО 305299,<br>№ UA583052990000026007050590339",
    footer_address: "м. Дніпро, вул. Мандриківська 44а <br>+38 067 524 12 00",
    title_indicators: "Показники випробувань:",
    text_indicators: "1. Один модуль лінійного генератора видає 170 ватт при частоті рухів магнітів 1,3 руха в секунду. " +
      "При збільшенні частоти в три рази, майже 4 рухи в секунду, модуль видає швидкість зарядки батарей 1,53 квт " +
      "на годину. Таких модулів може бути скільки завгодно відносно до ваги маятника. <br>" +
      "2. Маятник вагою 300 кг або вагою 1400 кг потребує одну і ту ж кількість квт на годину для підтримки " +
      "коливань. Детальне пояснення принципу роботи маятника додається. Це 4,6 квт на годину. Маятник вагою " +
      "1400 кг буде видавати швидкість зарядки 100 квт на годину. Його вагу можна регулювати доданням дисків по " +
      "25 кг. Витрати на підтримання коливань маятника можуть зрости на 2 - 3 квт на годину, якщо вага маятника " +
      "буде збільшена до двох тонн. Розрахунки робились кафедрою машинобудування гірничої академії з офіційною оплатою. " +
      "Показники знімала ліцензійна компанія з обслуговування електричних мереж заправочних станцій. " +
      "Маятник може працювати цілодобово. Окупність машини при роботі 24/7 складе менше 8 місяців, " +
      "якщо порівнювати з ціною за 1 квт = 16 грн з пдв.",
  },

  English: {

    phone1: "0995535030",
    phone2: "0675241200",
    company_info: "KVT GROUP LLC, EDRPOU/DRFO 45149954 MFO 305299,<br>№UA583052990000026007050590339",
    address: "Dnipro, Mandrykivska St. 44a +38 067 524 12 00",

    main_title: "Duginets<br>Pendulum",
    description1: "A patented machine converts<br>pendulum oscillations into electricity.",
    description2: "Now for you 1 kW=1 hryvnia",
    description3: "We will help you earn, not just<br>save money",
     description4: "The pendulum is manufactured to order. <br>Power output ranges from 50 kW to 200 kW.",
    investors: "<span class=\"color-span\">Investors</span> from 4,000 UAH to 40,000,000 UAH<br>welcome!",
    button_guarantees: "Financial guarantees for investors",

    modal_text: "Before investing in someone, you need to trust that company or person. " +
      "You need to answer the question: Who is this person or who stands behind this company? Does he have a Plan B to return my money? <br>" +
      "The director of KVT GROUP LLC is Duginets Ihor Yevhenovych. " +
      "What experience does he have to entrust him with my money? How will he return it if something doesn't go according to plan? <br>" +
      "Experience of Duginets Ihor Yevhenovych: <br>" +
      "1. In 2001, at the age of 24, he brought the first long limousine for 6 persons to Dnipro for wedding services and various events. " +
      "Despite all the skeptics, the business became successful. " +
      "The record in September 2007 was $41,000 profit per month with a partner. " +
      "In 2008, he has 8 long limousines with a partner, including the only 12-meter six-wheel limousine for 14 persons " +
      "and a Hummer limousine for 20 persons in Ukraine, and 10 executive cars, and the only 1963 Lincoln Continental convertible in Ukraine. " +
      "A similar car was driven by US President John F. Kennedy. " +
      "Until the start of the full-scale invasion in 2022, the limousines worked and brought profit to the owners and joy to customers. " +
      "Now people are not in the mood for such pompous wedding celebrations. " +
      "But the limousines paid for themselves back in 2010. And after that, they brought net profit for 12 years. <br>" +
      "2. Since 2015, Duginets Ihor Yevhenovych has imported over 400 electric cars for legal entities and individuals. Has 99% positive feedback. <br>" +
      "3. Since 2019, he has a fleet of electric taxis. Currently, the number of cars is 22 units. " +
      "The cars worked during blackouts and work now, bringing profit. Average income is 500,000 UAH per month. <br>" +
      "4. Also has his own fast charging stations. <br>" +
      "If we assume that the Duginets Pendulum project doesn't work, how will Duginets Ihor Yevhenovych return the invested money? " +
      "He has a profitable business from which he can pay. <br>" +
      "But the Duginets Pendulum will be so popular that there will be a queue for months ahead. " +
      "Plants will be opened in different cities of Ukraine and other countries. Patents will be obtained in these countries. " +
      "The Duginets Pendulum is a basic project for cheap electricity. " +
      "Announcement: After its launch, there will be at least four more large projects related to the production of cheap electricity: <br>" +
      "1. Electrification of freight transportation throughout Ukraine based on cheap electricity produced by the Duginets Pendulum. " +
      "Clients will include Nova Poshta, Delivery and other similar services, as well as farmers throughout Ukraine. " +
      "Because freight transportation tariffs will be significantly lower than on diesel trucks. More information will appear later. <br>" +
      "2. The \"One Bitcoin per Day\" club will also work from the Duginets Pendulum. " +
      "Mining equipment will be purchased that will bring one Bitcoin per day using the electricity of Duginets Pendulums. " +
      "Approximately 114,000 kW per day is needed to get one Bitcoin. Information about joining the club will be available later. <br>" +
      "3. Mobile fast charging stations: Production of trailers with 450 kW capacity, which will be charged by Duginets Pendulums " +
      "and taken to places where electric cars will be charged at speeds up to 240 kW per hour. " +
      "There will be many of them in different cities of Ukraine. " +
      "Savings on renting space for each parking spot for each electric car is several thousand hryvnias per month. " +
      "Plus the selling price of 1 kW = 14 UAH with a cost of less than one hryvnia. " +
      "Up to twice a day, one trailer can go out and sell electricity. More information later. <br>" +
      "4. Production, installation of linear generators on electric cars that work from the unevenness of our roads. " +
      "These generators will charge the electric car battery while driving. " +
      "This is additional equipment for electric cars that will be installed in various cities of Ukraine with subsequent maintenance. <br>" +
      "Those who invest in the Duginets Pendulum will have the opportunity to invest in these projects. " +
      "Therefore, investing in the Duginets Pendulum is profitable and safe. " +
      "Also, together we can make Ukraine more competitive. " +
      "Now Ukrainian manufacturers, having reduced production costs, can compete in price and quality with other similar manufacturers. <br>" +
      "I have always made money while simultaneously doing useful things for people. " +
      "It's an incredible feeling to bring benefits and carry light and warmth to people in the literal sense of the word. " +
      "The Duginets Pendulum produces electricity at a low price for lighting, heating and manufacturing anything.",

    explanation1: "Transformation is possible thanks to the law of conservation of energy. Because perpetual motion machines do not exist and cannot exist. Input energy = output energy. In our case, Input energy = pendulum pushing energy (every period 24/7) + gravity. We can also describe these forces in components, but it is important that the Duginets Pendulum works and produces electricity very cheaply. The cost of produced electricity is less than one hryvnia per kW. This machine, as described by physics, has a large gain in force and a large loss in distance. We have a large amplitude of pendulum oscillations and a very small stroke of the output mechanism, having a lot of force.",
    explanation_point1: "First, energy is invested in the Duginets Pendulum by pushing each oscillation period. The pendulum oscillations force the other end of the rocker to rise up each time the pendulum passes the lowest point of its oscillations. Due to the design feature, the Pendulum, which is not rigidly connected to other parts of the machine, requires the same effort to maintain oscillations.",
    explanation_point2: "If we compare this system with, for example, a gear transmission or a chain transmission, then when one part of the mechanism is blocked, everything is blocked. Therefore, the pendulum in this system does not react to possible blocking of any part of the entire machine. It will continue its oscillations while it is pushed, producing or not producing electricity. Therefore, the effort to maintain oscillations is the same, with or without load.",
    explanation_point3: "The pendulum has its own limit of force that it can transfer to the machine to perform work. If you load the second part of the rocker, on which there is a pendulum on one side and a counterweight on the other, with an unbearable weight for a specific pendulum, then work will not be produced, and the pendulum will oscillate with the same amplitude and with the same effort as if it were lifting a load from the other side of the rocker.",


    pendulum_description: "The pendulum makes the counterweight oscillate, which in turn makes the modules with magnets in the linear generator rise and fall and produce electricity. The linear generator includes a fixed stator (iron, with copper wire wound around it) and a moving slider on wheels with magnets. The magnets, moving along the stator, produce electricity. For the required output power of electricity, the necessary number of modules is added, and the necessary weight of the pendulum and counterweight, as well as the length of the rocker, are calculated.",


    video_button: "How to earn with<br>a pendulum",


    circle1: "How to not only save on electricity bills with a pendulum, but also earn money?",
    circle2: "It is also possible to additionally invest in sodium-ion batteries. We will lease out charged batteries and bring discharged ones to you for recharging.",
    circle3: "You earn from 13 to 17 UAH per kilowatt. Your pendulum operates 24/7.",

    money_making_description: "Imagine you purchased the Duginets Pendulum and invested in additional batteries. " +
      "Then we sign a battery leasing agreement with you, and we lease your charged batteries to offices, shops, " +
      "fast-charging stations, shopping centers, and any businesses. Their electricity tariff ranges from 16 to 20 UAH, " +
      "while we provide cheaper energy. They pay nothing upfront; we install cabinets with inverters, batteries, " +
      "and a meter. Once a week, we replace discharged batteries. In the case of fast-charging stations, " +
      "this may be done several times a day. " +
      "To make it easy for you to earn with the Duginets Pendulum, we had to create our own research institute " +
      "with a production workshop, invest more than $250,000, and devote 7 years of hard work. " +
      "We conducted many expensive tests, spent a lot of effort, found the necessary specialists—who are very rare—" +
      "trained our employees and learned ourselves, and believed in success even when there was no hope for funding " +
      "or meeting the right experts. Money, faith, labor, and years of life have been invested in this product—" +
      "from the first idea in 2011 to the creation of a working machine in 2025. " +
      "Now you understand the entire journey we have taken. Thank you.",

    footer_company_info: "KVT GROUP LLC, EDRPOU/DRFO 45149954 MFO 305299,<br>№ UA583052990000026007050590339",
    footer_address: "Dnipro, Mandrykivska St. 44a <br>+38 067 524 12 00",

      title_indicators: "Test results:",
    text_indicators: "1. One linear generator module produces 170 watts at a magnet movement frequency " +
"of 1.3 strokes per second. When the frequency is increased threefold, to nearly 4 strokes per second, " +
"the module provides a battery charging rate of 1.53 kW per hour. The number of such modules can be unlimited " +
"relative to the weight of the pendulum. <br>"+
"2. A pendulum weighing 300 kg or 1400 kg requires the same number of kW per hour to maintain oscillations. " +
"A detailed explanation of the pendulum’s operating principle is attached. This is 4.6 kW per hour. " +
"A pendulum weighing 1400 kg will provide a charging rate of 100 kW per hour. Its weight can be adjusted " +
"by adding 25 kg discs. The energy required to maintain oscillations may increase by 2–3 kW per hour " +
"if the pendulum’s weight is increased to two tons. " +
"The calculations were carried out by the Department of Mechanical Engineering of the Mining Academy " +
"with official payment. The measurements were recorded by a licensed company servicing electrical networks " +
"of fuel stations. The pendulum can operate 24/7. The payback period of the machine, when operating 24/7, " +
"will be less than 8 months, based on an electricity price of 1 kW = 16 UAH including VAT.",
  }
};

let currentLang = "Ukrainian";

const langBtn = document.getElementById("langBtn");

function applyLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.dataset.lang;

    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
  langBtn.textContent = lang === "Ukrainian" ? "English" : "Ukrainian";
}

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "Ukrainian" ? "English" : "Ukrainian";
  applyLanguage(currentLang);
});

applyLanguage(currentLang);