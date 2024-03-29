import Drink from "@/shared/types/Drink";

export const drinks: Drink[] = [
    {
        id: 1,
        value: "ivanchai",
        name: "Настойка на Иван-чае",
        title: "Рецепт настойки на Иван-чае",
        description: "Ещё на Руси употребляли настой из Иван-чая как напиток и лекарство от различных хворей. " +
            "Эта невзрачная на вид травка по лечебному воздействию и оздоравливающим свойствам, учитывая неповторимое " +
            "химическое содержание, многократно превосходит даже морскую капусту.",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg",
            "8.jpg",
            "9.jpg",
        ],
        recipe: "•\tИван-чай (ферментированные и высушенные листья);|•\tводка (спирт 40-45%);|•\tжидкий мед (сахар, фруктоза);|•\tсушеные яблоки (по желанию).|" +
            "В качестве алкогольной основы подойдет магазинная водка, сахарный или зерновой водкой, а также этиловый спирт, разбавленный водой до 40-45%.\n" +
            "Цветочный мед лучше всего сочетается с Иван-чаем. Если меда нет, его можно заменить фруктозой или сахаром для смягчения вкуса. " +
            "Сушеные яблоки обогащают аромат напитка, но здесь главное не переборщить, чтобы яблочные тона не вышли на первый план.| |" +
            "1. Все ингредиенты сложить в стеклянную емкость для настаивания – бутылку или банку.|" +
            "2. Влить алкогольную основу (водку или спирт). Перемешивать, пока мед (сахар) не растворится.|" +
            "4. Готовую настойку процедить через 2-3 слоя марли или кухонное ситечко. Чай отжать досуха.|" +
            "5. Попробовать напиток на вкус, по желанию дополнительно подсластить сахаром (медом).|" +
            "6. Разлить в бутылки для хранения, плотно закрыть. Оставить на 3-5 дней. Полностью вкус настойки раскрывается только после 30-45 дней выдержки.| |"
    },
    {
        id: 2,
        value: "cherry",
        name: "Настойка из вишни",
        title: "Классическая настойка из вишни:",
        description: "Самый простой вариант приготовления с насыщенным вкусом и узнаваемым миндальным послевкусием.",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
        ],
        recipe: "•\tягоды вишни;|•\tводка (коньяк, спирт 45%);|•\tсахар.|" +
            "1. Подвялить свежие или замороженные вишни на солнцепеке, выложив ровным слоем и оставив на несколько дней под воздействием прямых солнечных лучей. " +
            "Альтернативный вариант – 4-6 часов запекать ягоды в духовке при 60-80°C.|" +
            "Этап необязательный, но подсушивание убирает из вишен лишнюю влагу, которая делает настойку водянистой.|" +
            "2. Смешать в трехлитровой банке водку, сахар и ягоды (алкогольная основа должна перекрывать вишни минимум на 1-2 см, в случае необходимости влить больше). " +
            "Плотно закрыть крышкой, поставить на 30 дней в темное место с комнатной температурой. Раз в 2-3 дня содержимое банки встряхивать.|" +
            "3. Готовую настойку процедить через несколько слоев марли, хорошо отжать ягоды. Жидкую часть профильтровать через вату.|" +
            "4. Разлить напиток в бутылки и плотно закрыть пробками. Хранить в холодильнике или подвале. Срок годности вдали от прямых солнечных лучей до 3-х лет. Крепость – 20-25%.| |"
    },
    {
        id: 3,
        value: "zubrovka",
        name: "Рецепт «Зубровки»",
        title: "Рецепт «Зубровки»:",
        description: "Трава зубровка содержит гликозид кумарина – вещество которое формирует у настойки аромат " +
            "свежескошенного сена, повышает аппетит и улучшает пищеварение.",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
        ],
        recipe: "•\tводка (спирт 40-45%);|•\tсухая трава зубровка;|•\tсахар;|•\tвода.|" +
            "В классической пропорции на 1000 кг водки требуется 2 кг травы. В домашних условиях для простоты подсчетов допустим, что литр водки " +
            "по весу равен 1-му килограмму. Сахарный сироп смягчает вкус, но не дает явной сладости, поскольку его концентрация в растворе незначительна.|" +
            "В качестве алкогольной основы подойдет водка или разбавленный этиловый спирт (желательно зерновой).| |" +
            "Трава зубровка содержит гликозид кумарина – вещество которое формирует у настойки аромат свежескошенного сена, повышает аппетит и улучшает пищеварение.| |" +
            "1. Траву порубить на мелкие кусочки, затем сложить в банку. Можно не измельчать зубровку, тогда напиток смотрится эффектнее и больше похож на магазинный аналог, но время настаивания увеличится на 5 дней.|" +
            "2. Смешать сахар с горячим кипятком. Охладить до комнатной температуры. Снять белую пену с поверхности в случае появления.|" +
            "3. Залить зубровку в банке алкогольной основой, добавить сироп. Перемешать.|" +
            "4. Банку плотно закрыть крышкой. Поставить на 14 дней (если трава настаивается целиком – 20 дней) в темное теплое место.|" +
            "5. Профильтровать настойку через марлю, сложенную в 2-3 слоя. С целой травой можно оставить как есть.|" +
            "6. Разлить напиток в бутылки, герметично закрыть.| |"
    },
    {
        id: 4,
        value: "apricot",
        name: "Абрикосовая настойка",
        title: "Абрикосовая настойка:",
        description: "",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
        ],
        recipe: "•\tизюм;|•\tкурага;|•\tводка (спирт 40-45%).|Любители сладких настоек на втором этапе могут добавить несколько столовых ложек мёда или сахара.| |" +
            "1. Сухофрукты хорошо помыть и подсушить, после чего засыпать в банку.|" +
            "2. Добавить водку, перемешать, плотно закрыть крышкой.|" +
            "3. Поставить банку на 14-16 дней в темное место с температурой 16-25°C. Раз в 3-4 дня хорошо встряхивать.|" +
            "4. Слить настойку в другую емкость через два слоя марли. Сухофрукты хорошо отжать, так как они впитали в себя много алкогольной основы.|" +
            "5. Профильтровать настойку через ватный фильтр. Можно использовать обычную лейку, в которую вставлена вата.|" +
            "6. Перед употреблением выдержать напиток 2-3 дня.|" +
            "Получается настойка из сухофруктов с ярко выраженным запахом кураги и легкими нотками изюма. Можно хранить до 3-х лет.|"
    },
    {
        id: 5,
        value: "beherovka",
        name: "Бехеровка",
        title: "Бехеровка:",
        description: "Карловы Вары, место где была изобретена Бехеровка, уже несколько веков остается признанным оздоровительным курортом. \n" +
            "Здесь находится 12 термальных источников, а 13 источником, дающим жизненные силы и здоровье, называют Бехеровку. Этот \n" +
            "крепленый ликер (на минуточку, крепость его – 38%!) был разработан в 1807 году как лекарство для пищеварения местным \n" +
            "аптекарем немецкого происхождения Йозефом Витусом Бехером. Сначала он продавал его только в своей аптеке под названием «English Bitter».",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
        ],
        recipe: "•\tВодка 45%.|•\tСахар.|•\tВода.|•\tАпельсиновая цедра без белой мякоти.|•\tКардамон.|•\tГвоздика.|•\tЧёрный перец.|•\tАнис.|•\tКорица.|" +
            "Сложно ли настаивать? Всё смешать, залить водкой, настоять 7 дней и профильтровать через марлю. Если какой-то из ингредиентов у вас вызывает неприятные эмоции, " +
            "то его можно убрать (мне вот анис вообще не нравится). Все специи в идеале заранее измельчить, чтобы они быстрее отдавали свои вкусовые качества.|"
    },
    {
        id: 6,
        value: "chernosliv",
        name: "Настойка чернослива на водке",
        title: "Настойка чернослива на водке:",
        description: "Приготовленная по этому рецепту домашняя настойка отличается сладким привкусом и больше подходит для \n" +
            "дам или как десертный напиток. В качестве алкогольной основы рекомендую брать хорошую водку или разбавленный до 45 градусов спирт.",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
        ],
        recipe: "•\tчернослив с косточками;|•\tсахар;|•\tводка.| |" +
            "1. Добавить в трехлитровую банку чернослив и сахар.|" +
            "2. Залить водкой.|" +
            "3. Закрыть банку крышкой, взболтать и поставить на 14-16 дней в темное место. Не рекомендуется выдерживать напиток дольше 20 дней, так как вредные вещества из косточек могут попасть в настойку.|" +
            "4. Профильтровать черносливовую настойку через марлю, разлить в бутылки и плотно закрыть пробками.|" +
            "Чтобы уменьшить крепость, перед употреблением настойки её можно разбавить яблочным соком в желаемых пропорциях."
    },
    {
        id: 7,
        value: "kalganovka",
        name: "Рецепт Калгановки",
        title: "Калгановка – вкусная и полезная настойка корня калгана на водке:",
        description: "Калган (Potentilla), или лапчатка, дубровка – это многолетнее лекарственное растение из семейства Розовые. \n" +
            "В переводе с латыни «потенция» — это «сила». И это растение не зря так назвали. На Руси его прозвали «могущником».Наши предки \n" +
            "использовали корень калгана для лечения заболеваний желудка, печени и повышения иммунитета.",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
        ],
        recipe: "•\tВодка 45%.|•\tКорень калгана.|•\tДубовые палочки или кубики.|•\tИзюм.|•\tКурага.|•\tСахар.|" +
            "Настаивать продукт мы будем 2 недели в тёмном месте, а после этого интенсивно фильтровать через толстый слой марли. Дайте напитку отдохнуть одну ночь, после чего можно приступать к дегустации!\n" +
            "Водку лучше 40% или 45%? В рецепте имеются сухофрукты, которые заберут часть спирта, после чего общая крепость незначительно уменьшится. Чтобы не пить 37% напиток, я " +
            "советую сразу же взять основу покрепче. Здесь 45% будет самым оптимальным вариантом.|"
    },
    {
        id: 8,
        value: "erofeich",
        name: "Рецепт Ерофеича",
        title: "Рецепт Ерофеича:",
        description: "Ерофеич – травяная настойка российского дворянства, появилась в начале XVIII века. Из-за высокой " +
            "концентрации эфирных масел имела специфический горький вкус и употреблялась в небольших количествах " +
            "(максимум 2 рюмки) перед едой для повышения аппетита. Закусывали ерофеич жирными мясными и рыбными блюдами.\n" +
            "Ради исторической достоверности в рецепте используются травы, упоминающиеся в первой и третьей версиях происхождения.",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg",
        ],
        recipe: "•\tводка (спирт 60-80%);|•\tизмельченный корень калгана (лапчатки);|•\tзверобой;|•\tперечная (английская) мята;|•\tромашка;|•\tполынь;|•\tанис.|" +
            "В состав можно добавить (или убрать) любые травы, создавая уникальный рецепт. Традиционно в ерофеиче сахар не использовался, настойка должна быть горькой. В некоторых " +
            "редких вариантах встречается мед. Использовать водку не рекомендуется, поскольку её крепость слишком низкая. Минимальное содержание спирта в алкогольной основе – 60%.| |" +
            "1. Травы сложить в банку для настаивания.|" +
            "2. Залить крепкой водкой или спиртом. Перемешать.|" +
            "3. Банку плотно закрыть крышкой. Поставить на 14-16 дней в теплое темное место. Раз в 2-3 дня взбалтывать.|" +
            "4. Профильтровать настой через 3-4 слоя марли или плотную ткань, хорошо отжав жмых.|" +
            "5. Разлить готовый ерофеич в бутылки для хранения (желательно из темного стекла), герметично закрыть. Перед дегустацией оставить на 2-3 дня для стабилизации вкуса. " +
            "Хранить в темном месте. Срок годности до 5-ти лет. Крепость зависит от использующегося спирта, обычно при настаивании теряется 3-5%.|"
    },
    {
        id: 9,
        value: "hrenovuha",
        name: "Рецепт Хреновухи",
        title: "Классический рецепт хреновухи на водке на 3 литра:",
        description: "Не существует какого-то старинного и канонического рецепта, которого придерживаются столетиями.\n" +
            "Но я нашёл те пропорции, которые дадут что-то между мягкой и ядрёной настойкой:",
        images: [],
        recipe: "•\tХрен;|•\tВодка 40%;|•\tМёд;| |" +
            "Сколько настаивать?|В домашних условиях срок настаивания составляет 3 до 7 дней (на кухне или в прогребе). Хрен невероятно быстро отдаёт " +
            "свой запах и вкус, поэтому месяцами держать его в банке смысла нет. Я рекомендую настаивать напиток три дня, после чего процедить через " +
            "ватный диск или марлю в стеклянные бутылки. Хотя бы ночь дайте настойке отдохнуть, после чего можно приступать к дегустации.| |" +
            "Как правильно приготовить?|" +
            "Чистим хрен от земли, моем и нарезаем тонкими кругляшками. Кидаем получившуюся массу в трёхлитровую банку, добавляем мёд и заливаем всё это " +
            "дело водкой. Настаиваем, фильтруем и ждём. Хреновуха готова!"
    },
    {
        id: 10,
        value: "citrus",
        name: "Рецепт Цитрусовой настойки",
        title: "Рецепт цитрусовой настойки:",
        description: "О прекрасном сочетании водки с цитрусовыми фруктами известно давно. Нарезанные дольками апельсины и лимоны – " +
            "это отличная закуска, а их соки входят в состав многих коктейлей. Еще из цитрусовых получаются оригинальные домашние настойки, \n" +
            "которые не стыдно поставить на стол перед гостями. В народе эти напитки называют «апельсиновыми водками», но плоды и кожуру апельсинов также можно настаивать на водке или спирте." +
            "Разбавив водку апельсиновым соком, вы получите простенький слабоалкогольный коктейль, который отлично утоляет жажду и легко пьётся",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
        ],
        recipe: ""
    },
    {
        id: 11,
        value: "coffee",
        name: "Рецепт кофейного ликёра",
        title: "Рецепт кофейного ликёра:",
        description: "Повышает настроение, отгоняет усталость и сон.",
        images: [
            "1.jpg",
            "2.jpg",
        ],
        recipe: "•\tмолотый кофе;|•\tводка (спирт);|•\tвода;| |" +
            "Любители сладкого спиртного на третьем этапе приготовления могут добавить сахар по вкусу, получится напиток, " +
            "напоминающий кофейный ликёр, но без сливок и молока.|" +
            "1. Сварить кофе, охладить его до комнатной кътемпературы и процедурить.|" +
            "2. Смешать водку с кофе, полученный напиток настоять 5-7 дней в темном месте с комнатной температурой.|" +
            "3. Разбавить настойку водой до желаемой крепости и перед употреблением выдержать ещё сутки.| |" +
            "Хранить в плотно закрытых бутылкахю Срок годности до 5-ти лет."
    },
    {
        id: 12,
        value: "vodka",
        name: "Водка",
        title: "Водка:",
        description: "На территории России водка появилась в XIV веке в Чудовом монастыре. В винокурне монахи " +
            "делали водку выгонкой спирта из ржаного сырья, которого были излишки в то время. В 1517 году Матвей " +
            "Меховский в «Трактате о двух Сарматиях» упоминает, что жители Московии «делают жгучую жидкость или " +
            "спирт и пьют, чтобы спастись … от холода».",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
        ],
        recipe: ""
    },
    {
        id: 13,
        value: "gin",
        name: "Джин",
        title: "Джин:",
        description: "Джин подходит для любителей крепкого алкоголя. Во время застолья охлажденный до температуры +4-6 °C \n" +
            "неразбавленный джин подают в качестве аперитива (до основной трапезы). Напиток возбуждает аппетит и приводит \n" +
            "гостей в восторг, особенно тех, кто никогда не пробовал его раньше.Во рту чистый джин вызывает ощущение холода. \n" +
            "Чистый джин закусывают лимонами, маслинами и даже маринованным луком. Эти продукты не испортят вкус, наоборот, \n" +
            "будут прекрасным дополнением к напитку." +
            "Джин смешивают с газированной минеральной водой, колой, содовой или фруктовыми соками (преимущественно цитрусовыми). \n" +
            "Главное преимущество этого способа – возможность регулировать крепость спиртного в своем бокале.Точных пропорций нет, \n" +
            "разбавлять джин можно по своему усмотрению. Самое популярное сочетание – 1:1, то есть в наполовину наполненный джином \n" +
            "стакан доливают столько же другого безалкогольного напитка.Также джин хорошо сочетается с другим спиртным, например, \n" +
            "с вермутами или ликерами.Мягкий чистый вкус и высокая крепость позволяют смешивать джин с другими ингредиентами, \n" +
            "получая отменные коктейли умеренной крепости",
        images: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
        ],
        recipe: "•\tМожжевеьник|•\tКориандр|•\tСушеная цедра лимона|•\tСушеная цедра апельсина|•\tКардамона|•\tБадьяна|•\tЧерный горошок|•\tКорень дягиля|•\tКорень ириса|•\tПалочки корицы"
    }
]