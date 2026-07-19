export const images = {
  logo: '/images/ZNS_LOGO.png',
  heroProcess: '/images/hero-process.png',
  heroAdvantages: '/images/hero-advantages.jpg',
  heroQuality: '/images/hero-quality.jpg',
  bullet1: '/images/bullet-1.png',
  bullet2: '/images/bullet-2.png',
  bullet3: '/images/bullet-3.png',
  delivery: '/images/delivery.png',
  product60: '/images/product-60.png',
  product37_10l: '/images/product-37-10l.png',
  location: '/images/location.png',
  whatsappFab: '/images/whatsapp-fab.png',
  reviews: [
    '/images/review-04.jpg',
    '/images/review-02.jpg',
    '/images/review-03.jpg',
    '/images/review-05.jpg',
    '/images/review-06.jpg',
    '/images/review-07.jpg',
    '/images/review-08.jpg',
    '/images/review-09.jpg',
    '/images/review-10.jpg',
    '/images/review-11.jpg',
    '/images/review-12.jpg',
    '/images/review-13.jpg',
    '/images/review-14.jpg',
    '/images/review-15.jpg',
    '/images/review-01.jpg',
  ],
}

export const heroCopy = {
  title: 'ПЕРЕКИСЬ ВОДОРОДА',
  subtitle: 'ЛУЧШЕЕ РЕШЕНИЕ ДЛЯ ВАШЕГО БАССЕЙНА',
  ctaCatalog: 'Купить перекись',
  ctaCalculator: 'Калькулятор расчета перекиси водорода',
}

export const processSection = {
  title: 'ПРОЦЕСС ОЧИСТКИ',
  text: 'Перекись водорода - экономичное, эффективное, экологичное средство для очистки и дезинфекции воды в бассейнах. Раствор перекиси водорода, при взаимодействии с водой выделяет активный кислород. Обеззараживает воду, очищая от болезнетворных бактерий и микроорганизмов. Сохраняет свежесть и прозрачность воды долгое время. Не имеет неприятного запаха, как после хлорсодержащих средств.',
  image: images.heroProcess,
}

export const productBenefitsSection = {
  title: 'ПРЕИМУЩЕСТВА',
  titleAccent: 'ПЕРЕКИСИ ВОДОРОДА',
  image: images.heroAdvantages,
  items: [
    {
      title: 'Мощное очищение',
      text: 'Перекись водорода эффективно убивает микроорганизмы и водоросли, не изменяя кислотность воды, что упрощает поддержание оптимальных условий и чистоты без дополнительных химикатов и добавления хлора.',
    },
    {
      title: 'Безопасность',
      text: 'Эффективно удаляет органические вещества, такие как пот и масла, проникающие в бассейн. В отличие от хлора не вызывает раздражения кожи, глаз и не вредит волосам, делая плавание приятным.',
    },
    {
      title: 'Экологически чистый',
      text: 'Перекись водорода распадается на воду и кислород, не оставляя вредных веществ и не загрязняя окружающей среды. Обработанную воду в бассейне можно будет спокойно слить в огород.',
    },
  ],
}

export const qualitySection = {
  title: 'КАЧЕСТВО ПРОДУКЦИИ',
  text: 'Наша продукция - соответствует самым высоким стандартам безопасности и имеет все необходимые сертификаты качества. Канистры оснащены клапанными крышками и системой контроля вскрытия, предотвращающими случайное проливание и гарантирующими, что продукт остается в идеальном состоянии до момента использования.',
  image: images.heroQuality,
  certificateLabel: 'СЕРТИФИКАТ КАЧЕСТВА',
  certificateUrl:
    'https://drive.google.com/drive/folders/1ptQI7rm7Ho_588J8dggfLwurB6HIGooW?usp=sharing',
}

export const companyBenefitsSection = {
  title: 'НАШИ ПРЕИМУЩЕСТВА',
  items: [
    {
      icon: images.bullet1,
      title: 'Опыт и доверие',
      text: 'За 5 лет работы мы обслужили более 3000 довольных клиентов и получили множество положительных отзывов',
    },
    {
      icon: images.bullet2,
      title: 'Профессиональная консультация',
      text: 'Мы предлагаем полное сопровождение от момента покупки, до подсчета точных размеров и нужных дозировок для вашего бассейна',
    },
    {
      icon: images.bullet3,
      title: 'Индивидуальный подход',
      text: 'Мы ориентируемся на высокий сервис, обеспечивая помощь в решении любых вопросов и быструю доставку в удобное вам время',
    },
    {
      icon: images.bullet3,
      title: 'Безопасность',
      text: 'Мы заботимся о вашем здоровье и прилагаем к каждому заказу набор средств индивидуальной защиты и инструкцию',
    },
  ],
}

export const delivery = {
  title: 'БЕСПЛАТНАЯ ДОСТАВКА',
  text: 'Доставим куда и когда вам удобно',
  image: images.delivery,
}

export const products = [
  {
    name: 'Перекись водорода 60%',
    volume: '5 литров',
    price: '11 900',
    oldPrice: '14 400',
    currency: 'тг.',
    image: images.product60,
  },
  {
    name: 'Перекись водорода 60%',
    volume: '10 литров',
    price: '18 900',
    oldPrice: '20 900',
    currency: 'тг.',
    image: images.product60,
  },
  {
    name: 'Перекись водорода 37%',
    volume: '10 литров',
    price: '14 400',
    oldPrice: '16 400',
    currency: 'тг.',
    image: images.product37_10l,
  },
]

export const reviewsSection = {
  title: 'Наши отзывы:',
  images: images.reviews,
}

export const calculatorCopy = {
  title: 'КАЛЬКУЛЯТОР РАСЧЕТА ПЕРЕКИСИ ВОДОРОДА',
  squareTitle: 'КВАДРАТНЫЙ БАССЕЙН',
  roundTitle: 'КРУГЛЫЙ БАССЕЙН',
  lengthLabel: 'Длина бассейна в метрах',
  widthLabel: 'Ширина бассейна в метрах',
  depthLabel: 'Глубина бассейна в метрах',
  diameterLabel: 'Диаметр бассейна в метрах',
  volumeLabel: 'ОБЪЕМ ВАШЕГО БАССЕЙНА:',
  volumeUnit: 'куб.м.',
  consultation: 'КОНСУЛЬТАЦИЯ',
  dosageSectionTitle: 'РАСХОД ПЕРЕКИСИ ВОДОРОДА НА КУБ.М.',
  dosage37Label: 'РАСХОД 37 % ПЕРЕКИСИ ВОДОРОДА НА КУБ.М.',
  dosage60Label: 'РАСХОД 60 % ПЕРЕКИСИ ВОДОРОДА НА КУБ.М.',
  dosageTotalLabel: 'РАСХОД НА ВАШ ОБЪЕМ БАССЕЙНА:',
  dosageTotalUnit: 'л',
  rateLimitMin: '1куб.м.',
  rateLimitMax: '100куб.м.',
}

export const locationSection = {
  title: 'МЕСТОПОЛОЖЕНИЕ',
  addressLabel: 'НАШ АДРЕС:',
  address: 'Тлендиева 355д',
  addressNote: '(Предупредите за 30 минут до приезда)',
  routeLabel: 'Построить маршрут',
  routeUrl: 'https://2gis.kz/almaty/firm/70000001089212959',
  image: images.location,
}

export const contactSection = {
  title: 'СВЯЖИТЕСЬ С НАМИ',
}

export const contactInfo = {
  whatsapp: '77066100821',
  phone: '77066100821',
  instagram: 'https://instagram.com/perekis.kz?igshid=NTc4MTIwNjQ2YQ==',
  buyMessage: 'Здравствуйте! Хочу приобрести перекись',
  contactMessage: 'Здравствуйте! Хочу приобрести перекись',
}
