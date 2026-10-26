const languages = [
  {
    code: "zh-CN", label: "中文 · Chinese", greeting: "你好，冯薷萱", enter: "点击继续", dir: "ltr",
    eyebrow: "谨呈 · 冯薷萱", title: "愿你来，与我共赴伦敦的盛夏", salutation: "亲爱的冯薷萱：",
    poem: ["泰晤士河把七月的光，轻轻推向岸边；", "而所有漫长的奔赴，都将在掌声里有了回声。"],
    body: [
      "有些日子，尚未抵达，便已经在记忆里发亮。那些伏案至深夜的灯，那些穿过伦敦细雨的路，那些曾经遥远的愿望，终于要在这个盛夏，被郑重写成一页完成。",
      "谨以最诚挚的心意，邀请你于七月底来到伦敦政治经济学院（LSE），参加张艺韬的毕业典礼。愿你在场，与我一同看学位袍掠过夏日的风，听掌声在古老街巷间回荡；也一同见证，一段漫长旅程在此落笔，另一段人生从此启程。",
      "我想把这一天留给重要的人。伦敦很大，而有些时刻，唯有一个人的到来，才算真正完整。若能与你共享这场典礼，它便不只是一纸学位的纪念，更会成为多年以后，仍值得我们温柔想起的一天。具体日期、时间及典礼安排，将另行郑重告知。"
    ],
    when: ["时间", "七月底 · 具体安排另告"], where: ["地点", "伦敦政治经济学院 · 伦敦"], occasion: ["事由", "张艺韬毕业典礼"],
    closing: "静候你的到来，也静候我们在伦敦的重逢。"
  },
  {
    code: "en", label: "English", greeting: "Hello, 冯薷萱", enter: "Continue", dir: "ltr",
    eyebrow: "A FORMAL INVITATION", title: "In London’s summer, come witness an arrival", salutation: "Dear Feng Ruxuan,",
    poem: ["Across the sea, the summer wind comes ashore;", "every long journey finds its answer in applause."],
    body: [
      "Time has quietly gathered countless mornings and late-lit nights into this one chapter. The lamps left burning above open books and the roads walked through London rain are, at last, approaching their gentle and ceremonial echo.",
      "It is with the greatest sincerity that I invite you to join me at the London School of Economics and Political Science at the end of July for the graduation ceremony of Yitao Zhang. Come witness the academic gown meet the summer air, the applause fill these storied streets, and one journey close just as another begins.",
      "London is a vast city, yet certain moments become whole only when one particular person is there. To share this day with you would be its most precious footnote. The exact date, time and ceremony arrangements will be shared with you separately."
    ],
    when: ["WHEN", "Late July · Details to follow"], where: ["WHERE", "The London School of Economics · London"], occasion: ["OCCASION", "The graduation of Yitao Zhang"],
    closing: "With every hope that London will bring us together for this day."
  },
  {
    code: "fr", label: "Français · French", greeting: "Bonjour, 冯薷萱", enter: "Continuer", dir: "ltr",
    eyebrow: "UNE INVITATION SOLENNELLE", title: "Sous le ciel d’été de Londres, venez célébrer une arrivée", salutation: "Chère Feng Ruxuan,",
    poem: ["Le vent traverse la mer et l’été touche enfin la rive ;", "tout long voyage trouve un jour sa réponse dans les applaudissements."],
    body: [
      "Le temps a patiemment réuni tant de matins ordinaires et de nuits studieuses pour en faire ce chapitre. Les lumières veillant sur les livres et les pas sous la pluie de Londres trouvent enfin leur écho.",
      "C’est avec la plus grande sincérité que je vous invite, à la fin du mois de juillet, à la London School of Economics and Political Science pour assister à la cérémonie de remise de diplôme de Yitao Zhang. Venez voir une étape s’achever dans les applaudissements et une autre vie commencer.",
      "Londres est immense, mais certains instants ne deviennent complets que par la présence d’une personne précise. Partager ce jour avec vous en serait la note la plus précieuse. La date, l’heure et les détails vous seront communiqués séparément."
    ],
    when: ["DATE", "Fin juillet · Détails à venir"], where: ["LIEU", "London School of Economics · Londres"], occasion: ["OCCASION", "Remise de diplôme de Yitao Zhang"],
    closing: "Dans l’espoir de vous retrouver à Londres pour ce jour précieux."
  },
  {
    code: "es", label: "Español · Spanish", greeting: "Hola, 冯薷萱", enter: "Continuar", dir: "ltr",
    eyebrow: "UNA INVITACIÓN FORMAL", title: "En el verano de Londres, ven a celebrar una llegada", salutation: "Querida Feng Ruxuan:",
    poem: ["El viento cruza el mar y el verano alcanza la orilla;", "todo largo viaje encuentra su respuesta en los aplausos."],
    body: [
      "El tiempo ha reunido, en silencio, incontables mañanas y noches de estudio para escribir este capítulo. Las luces encendidas sobre los libros y los caminos recorridos bajo la lluvia de Londres encuentran por fin su eco.",
      "Con la mayor sinceridad, te invito a venir a finales de julio a la London School of Economics and Political Science para acompañarme en la ceremonia de graduación de Yitao Zhang. Ven a presenciar cómo termina un viaje entre aplausos y comienza otro.",
      "Londres es inmensa, pero hay momentos que solo se completan con la presencia de una persona especial. Compartir este día contigo sería su nota más preciosa. La fecha, la hora y los detalles se comunicarán por separado."
    ],
    when: ["CUÁNDO", "Finales de julio · Detalles próximamente"], where: ["DÓNDE", "London School of Economics · Londres"], occasion: ["MOTIVO", "Graduación de Yitao Zhang"],
    closing: "Con la esperanza de encontrarnos en Londres para este día."
  },
  {
    code: "de", label: "Deutsch · German", greeting: "Hallo, 冯薷萱", enter: "Weiter", dir: "ltr",
    eyebrow: "EINE FEIERLICHE EINLADUNG", title: "Im Londoner Sommer: Sei Zeugin eines Ankommens", salutation: "Liebe Feng Ruxuan,",
    poem: ["Der Wind zieht übers Meer, der Sommer erreicht das Ufer;", "jede lange Reise findet ihre Antwort im Applaus."],
    body: [
      "Die Zeit hat unzählige Morgen und lange Nächte still zu diesem Kapitel gefügt. Das Licht über offenen Büchern und die Wege durch den Londoner Regen finden nun ihren feierlichen Widerhall.",
      "Von Herzen lade ich dich ein, Ende Juli an der London School of Economics and Political Science an der Abschlussfeier von Yitao Zhang teilzunehmen. Sei dabei, wenn eine Reise im Applaus ihr Ziel findet und eine neue beginnt.",
      "London ist groß, doch manche Augenblicke werden erst durch die Anwesenheit eines besonderen Menschen vollkommen. Diesen Tag mit dir zu teilen, wäre seine kostbarste Fußnote. Datum, Uhrzeit und Ablauf folgen gesondert."
    ],
    when: ["WANN", "Ende Juli · Einzelheiten folgen"], where: ["WO", "London School of Economics · London"], occasion: ["ANLASS", "Abschlussfeier von Yitao Zhang"],
    closing: "In Vorfreude darauf, diesen Tag in London mit dir zu teilen."
  },
  {
    code: "it", label: "Italiano · Italian", greeting: "Ciao, 冯薷萱", enter: "Continua", dir: "ltr",
    eyebrow: "UN INVITO SOLENNE", title: "Nell’estate di Londra, vieni a celebrare un approdo", salutation: "Cara Feng Ruxuan,",
    poem: ["Il vento attraversa il mare e l’estate giunge a riva;", "ogni lungo viaggio trova la sua risposta nell’applauso."],
    body: [
      "Il tempo ha raccolto in silenzio innumerevoli mattine e notti di studio in questo capitolo. Le luci rimaste accese sui libri e le strade percorse sotto la pioggia di Londra trovano finalmente la loro eco.",
      "Con profonda sincerità, ti invito alla London School of Economics and Political Science alla fine di luglio per la cerimonia di laurea di Yitao Zhang. Vieni a vedere un viaggio compiersi tra gli applausi e un altro avere inizio.",
      "Londra è immensa, ma alcuni momenti diventano completi solo grazie alla presenza di una persona speciale. Condividere questo giorno con te sarebbe la sua nota più preziosa. Data, ora e dettagli saranno comunicati separatamente."
    ],
    when: ["QUANDO", "Fine luglio · Dettagli a seguire"], where: ["DOVE", "London School of Economics · Londra"], occasion: ["OCCASIONE", "Laurea di Yitao Zhang"],
    closing: "Con la speranza di ritrovarci a Londra per questo giorno."
  },
  {
    code: "pt", label: "Português · Portuguese", greeting: "Olá, 冯薷萱", enter: "Continuar", dir: "ltr",
    eyebrow: "UM CONVITE SOLENE", title: "No verão de Londres, venha celebrar uma chegada", salutation: "Querida Feng Ruxuan,",
    poem: ["O vento cruza o mar e o verão alcança a margem;", "toda longa viagem encontra sua resposta nos aplausos."],
    body: [
      "O tempo reuniu em silêncio incontáveis manhãs e noites de estudo para escrever este capítulo. As luzes sobre os livros e os caminhos sob a chuva de Londres finalmente encontram o seu eco.",
      "Com a mais profunda sinceridade, convido você a vir, no fim de julho, à London School of Economics and Political Science para a cerimônia de formatura de Yitao Zhang. Venha testemunhar uma jornada terminar entre aplausos e outra começar.",
      "Londres é imensa, mas certos momentos só se completam com a presença de alguém especial. Compartilhar este dia com você seria sua nota mais preciosa. A data, o horário e os detalhes serão informados separadamente."
    ],
    when: ["QUANDO", "Fim de julho · Detalhes em breve"], where: ["ONDE", "London School of Economics · Londres"], occasion: ["OCASIÃO", "Formatura de Yitao Zhang"],
    closing: "Na esperança de nos encontrarmos em Londres para este dia."
  },
  {
    code: "ja", label: "日本語 · Japanese", greeting: "こんにちは、冯薷萱", enter: "続きを見る", dir: "ltr",
    eyebrow: "謹んでご招待申し上げます", title: "ロンドンの夏、一つの旅の到着を見届けてください", salutation: "親愛なる冯薷萱さんへ",
    poem: ["風は海を越え、夏は岸辺へたどり着く。", "長い旅はいつか、拍手の中で答えを得る。"],
    body: [
      "幾つもの朝と、灯りの消えない夜が、静かに今日という一章を綴ってきました。本の上に残る光、ロンドンの雨の中を歩いた道のりが、いま晴れやかな余韻へと結ばれます。",
      "七月末、ロンドン・スクール・オブ・エコノミクス（LSE）にて執り行われる張藝韜の卒業式に、心よりご出席をお願い申し上げます。一つの旅が拍手とともに結ばれ、新たな人生が始まる瞬間を、どうか共に見届けてください。",
      "広いロンドンでも、ある大切な人がいてこそ完成する時間があります。この日をあなたと分かち合えることが、何より大切な記念になります。詳しい日時と式典のご案内は、改めてお知らせいたします。"
    ],
    when: ["日時", "七月末・詳細は後日ご案内"], where: ["会場", "ロンドン・スクール・オブ・エコノミクス"], occasion: ["式典", "張藝韜 卒業式"],
    closing: "ロンドンでこの日をご一緒できることを、心より願っています。"
  },
  {
    code: "ko", label: "한국어 · Korean", greeting: "안녕하세요, 冯薷萱", enter: "계속하기", dir: "ltr",
    eyebrow: "정중히 초대합니다", title: "런던의 여름, 한 여정의 도착을 함께해 주세요", salutation: "사랑하는 Feng Ruxuan에게,",
    poem: ["바람은 바다를 건너고 여름은 마침내 기슭에 닿습니다.", "모든 긴 여정은 언젠가 박수 속에서 답을 찾습니다."],
    body: [
      "수많은 아침과 늦은 밤이 조용히 모여 오늘의 한 장을 이루었습니다. 책 위를 비추던 불빛과 런던의 빗속을 걷던 길이 이제 따뜻하고 장엄한 울림을 맞이합니다.",
      "7월 말, 런던정경대학교(LSE)에서 열리는 장이타오의 졸업식에 진심으로 당신을 초대합니다. 한 여정이 박수 속에서 마무리되고 또 다른 삶이 시작되는 순간을 함께 지켜봐 주세요.",
      "런던은 넓지만 어떤 순간은 특별한 한 사람이 있어야 비로소 완전해집니다. 이 날을 당신과 나누는 것이 가장 소중한 기록이 될 것입니다. 정확한 날짜와 시간, 행사 안내는 추후 전해 드리겠습니다."
    ],
    when: ["일시", "7월 말 · 세부 일정 추후 안내"], where: ["장소", "런던정경대학교 · 런던"], occasion: ["행사", "장이타오 졸업식"],
    closing: "런던에서 이 날을 함께할 수 있기를 진심으로 기다립니다."
  },
  {
    code: "ar", label: "العربية · Arabic", greeting: "مرحبًا، 冯薷萱", enter: "متابعة", dir: "rtl",
    eyebrow: "دعوة رسمية", title: "في صيف لندن، كوني شاهدة على وصول رحلة", salutation: "عزيزتي فنغ رو شيوان،",
    poem: ["تعبر الريح البحر ويبلغ الصيف الشاطئ؛", "وكل رحلة طويلة تجد جوابها يومًا في التصفيق."],
    body: [
      "جمع الزمن في هدوء صباحات لا تحصى وليالي طويلة ليكتب هذا الفصل. وها هي الأضواء فوق الكتب والطرق التي سلكناها تحت مطر لندن تجد أخيرًا صداها المهيب.",
      "بكل المحبة والصدق، أدعوك في أواخر يوليو إلى كلية لندن للاقتصاد والعلوم السياسية لحضور حفل تخرج ييتاو تشانغ. تعالي لتشهدي رحلة تكتمل وسط التصفيق، وأخرى تبدأ.",
      "لندن مدينة واسعة، لكن بعض اللحظات لا تكتمل إلا بحضور شخص بعينه. مشاركتك هذا اليوم ستكون أجمل ما يُكتب في هامشه. ستُرسل تفاصيل التاريخ والوقت والحفل لاحقًا."
    ],
    when: ["الموعد", "أواخر يوليو · التفاصيل لاحقًا"], where: ["المكان", "كلية لندن للاقتصاد · لندن"], occasion: ["المناسبة", "حفل تخرج ييتاو تشانغ"],
    closing: "على أمل أن تجمعنا لندن في هذا اليوم العزيز."
  },
  {
    code: "ru", label: "Русский · Russian", greeting: "Здравствуйте, 冯薷萱", enter: "Продолжить", dir: "ltr",
    eyebrow: "ТОРЖЕСТВЕННОЕ ПРИГЛАШЕНИЕ", title: "Лондонским летом станьте свидетелем прибытия", salutation: "Дорогая Фэн Жусюань,",
    poem: ["Ветер пересекает море, и лето достигает берега;", "каждый долгий путь однажды находит ответ в аплодисментах."],
    body: [
      "Время незаметно собрало бесчисленные утра и поздние ночи в эту главу. Свет над раскрытыми книгами и дороги под лондонским дождём наконец обретают своё торжественное эхо.",
      "От всего сердца приглашаю Вас в конце июля в Лондонскую школу экономики и политических наук на церемонию выпуска Итао Чжана. Станьте свидетелем того, как один путь завершается под аплодисменты и начинается другой.",
      "Лондон огромен, но некоторые мгновения становятся полными только благодаря присутствию особенного человека. Разделить этот день с Вами — его самая драгоценная строка. Точные дата, время и порядок церемонии будут сообщены отдельно."
    ],
    when: ["КОГДА", "Конец июля · Подробности позже"], where: ["ГДЕ", "Лондонская школа экономики · Лондон"], occasion: ["СОБЫТИЕ", "Выпускная церемония Итао Чжана"],
    closing: "С надеждой разделить с Вами этот день в Лондоне."
  },
  {
    code: "hi", label: "हिन्दी · Hindi", greeting: "नमस्ते, 冯薷萱", enter: "आगे बढ़ें", dir: "ltr",
    eyebrow: "एक औपचारिक निमंत्रण", title: "लंदन की गर्मियों में, एक मंज़िल के साक्षी बनें", salutation: "प्रिय फ़ेंग रुषुआन,",
    poem: ["हवा समुद्र पार करती है और ग्रीष्म किनारे आता है;", "हर लंबी यात्रा को एक दिन तालियों में अपना उत्तर मिलता है।"],
    body: [
      "समय ने अनगिनत सुबहों और देर रातों को चुपचाप जोड़कर यह अध्याय लिखा है। किताबों पर जलते दीप और लंदन की बारिश में चले रास्ते अब अपने गरिमामय प्रतिध्वनि तक पहुँच रहे हैं।",
      "पूरे हृदय से आपको जुलाई के अंत में लंदन स्कूल ऑफ इकोनॉमिक्स एंड पॉलिटिकल साइंस में यीताओ झांग के दीक्षांत समारोह में आमंत्रित करता हूँ। आइए, एक यात्रा को तालियों में पूर्ण और दूसरी को आरंभ होते देखें।",
      "लंदन विशाल है, पर कुछ क्षण किसी विशेष व्यक्ति की उपस्थिति से ही पूरे होते हैं। आपके साथ यह दिन बाँटना इसकी सबसे अनमोल पंक्ति होगी। निश्चित तारीख, समय और कार्यक्रम अलग से साझा किए जाएँगे।"
    ],
    when: ["समय", "जुलाई का अंत · विवरण शीघ्र"], where: ["स्थान", "लंदन स्कूल ऑफ इकोनॉमिक्स · लंदन"], occasion: ["अवसर", "यीताओ झांग का दीक्षांत समारोह"],
    closing: "इस दिन लंदन में आपके साथ होने की आशा के साथ।"
  },
  {
    code: "el", label: "Ελληνικά · Greek", greeting: "Γεια σου, 冯薷萱", enter: "Συνέχεια", dir: "ltr",
    eyebrow: "ΜΙΑ ΕΠΙΣΗΜΗ ΠΡΟΣΚΛΗΣΗ", title: "Στο καλοκαίρι του Λονδίνου, γίνε μάρτυρας μιας άφιξης", salutation: "Αγαπητή Feng Ruxuan,",
    poem: ["Ο άνεμος διασχίζει τη θάλασσα και το καλοκαίρι φτάνει στην ακτή·", "κάθε μακρύ ταξίδι βρίσκει κάποτε την απάντησή του στο χειροκρότημα."],
    body: [
      "Ο χρόνος ένωσε σιωπηλά αμέτρητα πρωινά και νύχτες μελέτης σε αυτό το κεφάλαιο. Τα φώτα πάνω από τα βιβλία και οι δρόμοι στη βροχή του Λονδίνου βρίσκουν επιτέλους την επίσημη ηχώ τους.",
      "Με όλη μου την ειλικρίνεια, σε προσκαλώ στα τέλη Ιουλίου στο London School of Economics and Political Science για την τελετή αποφοίτησης του Yitao Zhang. Έλα να δεις ένα ταξίδι να ολοκληρώνεται με χειροκρότημα και ένα άλλο να αρχίζει.",
      "Το Λονδίνο είναι μεγάλο, όμως ορισμένες στιγμές ολοκληρώνονται μόνο με την παρουσία ενός ξεχωριστού ανθρώπου. Το να μοιραστώ αυτή την ημέρα μαζί σου θα είναι η πιο πολύτιμη υποσημείωσή της. Οι λεπτομέρειες θα σταλούν χωριστά."
    ],
    when: ["ΠΟΤΕ", "Τέλη Ιουλίου · Λεπτομέρειες προσεχώς"], where: ["ΠΟΥ", "London School of Economics · Λονδίνο"], occasion: ["ΠΕΡΙΣΤΑΣΗ", "Αποφοίτηση του Yitao Zhang"],
    closing: "Με την ελπίδα να μοιραστούμε αυτή την ημέρα στο Λονδίνο."
  },
  {
    code: "nl", label: "Nederlands · Dutch", greeting: "Hallo, 冯薷萱", enter: "Ga verder", dir: "ltr",
    eyebrow: "EEN PLECHTIGE UITNODIGING", title: "Wees in de Londense zomer getuige van een aankomst", salutation: "Beste Feng Ruxuan,",
    poem: ["De wind steekt de zee over en de zomer bereikt de kust;", "elke lange reis vindt ooit haar antwoord in applaus."],
    body: [
      "De tijd heeft ontelbare ochtenden en late studienachten stilletjes tot dit hoofdstuk samengebracht. Het licht boven open boeken en de wegen door de Londense regen vinden eindelijk hun plechtige weerklank.",
      "Met grote oprechtheid nodig ik je uit om eind juli naar de London School of Economics and Political Science te komen voor de diploma-uitreiking van Yitao Zhang. Wees erbij wanneer één reis onder applaus eindigt en een andere begint.",
      "Londen is groot, maar sommige momenten worden pas compleet door de aanwezigheid van één bijzonder persoon. Deze dag met jou delen zou de kostbaarste voetnoot zijn. De exacte datum, tijd en ceremoniegegevens volgen afzonderlijk."
    ],
    when: ["WANNEER", "Eind juli · Details volgen"], where: ["WAAR", "London School of Economics · Londen"], occasion: ["GELEGENHEID", "Diploma-uitreiking van Yitao Zhang"],
    closing: "In de hoop deze dag samen in Londen te beleven."
  },
  {
    code: "sv", label: "Svenska · Swedish", greeting: "Hej, 冯薷萱", enter: "Fortsätt", dir: "ltr",
    eyebrow: "EN HÖGTIDLIG INBJUDAN", title: "I Londons sommar – bevittna en ankomst", salutation: "Kära Feng Ruxuan,",
    poem: ["Vinden korsar havet och sommaren når stranden;", "varje lång resa finner till sist sitt svar i applåder."],
    body: [
      "Tiden har stilla samlat otaliga morgnar och sena studiekvällar till detta kapitel. Ljuset över öppna böcker och vägarna genom Londons regn finner nu sitt högtidliga eko.",
      "Av hela mitt hjärta bjuder jag in dig till London School of Economics and Political Science i slutet av juli för Yitao Zhangs examensceremoni. Kom och se en resa fullbordas i applåder och en annan ta sin början.",
      "London är stort, men vissa stunder blir hela först när en särskild person är där. Att dela denna dag med dig vore dess dyrbaraste fotnot. Exakt datum, tid och ceremoniinformation meddelas separat."
    ],
    when: ["NÄR", "Slutet av juli · Detaljer följer"], where: ["VAR", "London School of Economics · London"], occasion: ["TILLFÄLLE", "Yitao Zhangs examen"],
    closing: "Med hopp om att få dela denna dag med dig i London."
  },
  {
    code: "pl", label: "Polski · Polish", greeting: "Dzień dobry, 冯薷萱", enter: "Przejdź dalej", dir: "ltr",
    eyebrow: "UROCZYSTE ZAPROSZENIE", title: "Latem w Londynie bądź świadkiem spełnionej podróży", salutation: "Droga Feng Ruxuan,",
    poem: ["Wiatr przemierza morze, a lato dociera do brzegu;", "każda długa podróż odnajduje kiedyś odpowiedź w oklaskach."],
    body: [
      "Czas po cichu połączył niezliczone poranki i późne noce nauki w ten jeden rozdział. Światła nad książkami i drogi przebyte w londyńskim deszczu znajdują wreszcie swój uroczysty rezonans.",
      "Z największą szczerością zapraszam Cię pod koniec lipca do London School of Economics and Political Science na uroczystość ukończenia studiów przez Yitao Zhanga. Zobacz, jak jedna podróż kończy się oklaskami, a druga właśnie się zaczyna.",
      "Londyn jest ogromny, ale niektóre chwile stają się pełne dopiero dzięki obecności wyjątkowej osoby. Dzielenie tego dnia z Tobą byłoby jego najcenniejszym dopiskiem. Szczegóły daty, godziny i ceremonii zostaną przesłane osobno."
    ],
    when: ["KIEDY", "Koniec lipca · Szczegóły wkrótce"], where: ["GDZIE", "London School of Economics · Londyn"], occasion: ["OKAZJA", "Ukończenie studiów Yitao Zhanga"],
    closing: "Z nadzieją, że spotkamy się w Londynie w tym ważnym dniu."
  },
  {
    code: "tr", label: "Türkçe · Turkish", greeting: "Merhaba, 冯薷萱", enter: "Devam et", dir: "ltr",
    eyebrow: "RESMÎ BİR DAVET", title: "Londra yazında bir varışa tanıklık et", salutation: "Sevgili Feng Ruxuan,",
    poem: ["Rüzgâr denizi aşar, yaz kıyıya ulaşır;", "her uzun yolculuk bir gün cevabını alkışlarda bulur."],
    body: [
      "Zaman, sayısız sabahı ve geç saatlere uzanan çalışma gecelerini sessizce bu bölümde birleştirdi. Açık kitapların üzerindeki ışık ve Londra yağmurunda yürünmüş yollar şimdi törensel yankısına kavuşuyor.",
      "Seni tüm içtenliğimle temmuz sonunda London School of Economics and Political Science’da Yitao Zhang’ın mezuniyet törenine davet ediyorum. Bir yolculuğun alkışlarla tamamlanıp yenisinin başladığı ana birlikte tanıklık edelim.",
      "Londra büyük bir şehir; yine de bazı anlar ancak özel birinin varlığıyla tamamlanır. Bu günü seninle paylaşmak onun en değerli notu olacak. Kesin tarih, saat ve tören ayrıntıları ayrıca bildirilecektir."
    ],
    when: ["ZAMAN", "Temmuz sonu · Ayrıntılar yakında"], where: ["YER", "London School of Economics · Londra"], occasion: ["VESİLE", "Yitao Zhang’ın mezuniyeti"],
    closing: "Bu günü Londra’da seninle paylaşma ümidiyle."
  },
  {
    code: "vi", label: "Tiếng Việt · Vietnamese", greeting: "Xin chào, 冯薷萱", enter: "Tiếp tục", dir: "ltr",
    eyebrow: "TRÂN TRỌNG KÍNH MỜI", title: "Trong mùa hè London, xin hãy chứng kiến một hành trình cập bến", salutation: "Thân gửi Feng Ruxuan,",
    poem: ["Gió vượt biển xa, mùa hè chạm bến;", "mọi hành trình dài rồi sẽ tìm thấy lời đáp trong tiếng vỗ tay."],
    body: [
      "Thời gian đã lặng lẽ gom biết bao sớm mai và những đêm học muộn thành chương này. Ánh đèn trên trang sách và những con đường dưới mưa London cuối cùng cũng tìm thấy tiếng vọng trang trọng của mình.",
      "Bằng tất cả sự chân thành, tôi trân trọng mời bạn đến Trường Kinh tế và Khoa học Chính trị London vào cuối tháng Bảy để tham dự lễ tốt nghiệp của Yitao Zhang. Xin hãy cùng chứng kiến một hành trình khép lại trong tiếng vỗ tay và một hành trình khác bắt đầu.",
      "London rộng lớn, nhưng có những khoảnh khắc chỉ trọn vẹn khi một người đặc biệt hiện diện. Được chia sẻ ngày này với bạn sẽ là dòng ghi chú quý giá nhất. Ngày giờ và chương trình cụ thể sẽ được thông báo riêng."
    ],
    when: ["THỜI GIAN", "Cuối tháng Bảy · Chi tiết sẽ gửi sau"], where: ["ĐỊA ĐIỂM", "London School of Economics · London"], occasion: ["SỰ KIỆN", "Lễ tốt nghiệp của Yitao Zhang"],
    closing: "Mong được gặp bạn tại London trong ngày đặc biệt này."
  },
  {
    code: "th", label: "ไทย · Thai", greeting: "สวัสดี, 冯薷萱", enter: "ดำเนินการต่อ", dir: "ltr",
    eyebrow: "คำเชิญอย่างเป็นทางการ", title: "ในฤดูร้อนแห่งลอนดอน มาร่วมเป็นพยานของการเดินทางที่ถึงฝั่ง", salutation: "ถึง Feng Ruxuan ที่รัก",
    poem: ["สายลมข้ามทะเล และฤดูร้อนเดินทางถึงฝั่ง", "ทุกการเดินทางอันยาวนาน ย่อมพบคำตอบในเสียงปรบมือ"],
    body: [
      "กาลเวลาได้รวบรวมเช้าวันนับไม่ถ้วนและค่ำคืนแห่งการเรียนรู้ไว้เป็นบทหนึ่ง แสงไฟเหนือหน้าหนังสือและถนนใต้สายฝนของลอนดอนกำลังจะได้พบเสียงสะท้อนอันงดงาม",
      "ด้วยความจริงใจอย่างที่สุด ขอเชิญคุณมาที่ London School of Economics and Political Science ในช่วงปลายเดือนกรกฎาคม เพื่อร่วมพิธีสำเร็จการศึกษาของ Yitao Zhang มาร่วมเห็นการเดินทางหนึ่งสิ้นสุดท่ามกลางเสียงปรบมือ และอีกการเดินทางเริ่มต้นขึ้น",
      "ลอนดอนนั้นกว้างใหญ่ แต่บางช่วงเวลาจะสมบูรณ์ก็ต่อเมื่อมีคนสำคัญอยู่ด้วย การได้แบ่งปันวันนี้กับคุณจะเป็นบันทึกที่ล้ำค่าที่สุด รายละเอียดวัน เวลา และพิธีจะแจ้งให้ทราบอีกครั้ง"
    ],
    when: ["วันเวลา", "ปลายเดือนกรกฎาคม · จะแจ้งรายละเอียดภายหลัง"], where: ["สถานที่", "London School of Economics · London"], occasion: ["โอกาส", "พิธีสำเร็จการศึกษาของ Yitao Zhang"],
    closing: "หวังเป็นอย่างยิ่งว่าจะได้แบ่งปันวันนี้กับคุณที่ลอนดอน"
  },
  {
    code: "id", label: "Bahasa Indonesia · Indonesian", greeting: "Halo, 冯薷萱", enter: "Lanjutkan", dir: "ltr",
    eyebrow: "SEBUAH UNDANGAN RESMI", title: "Di musim panas London, saksikan sebuah perjalanan berlabuh", salutation: "Feng Ruxuan yang terkasih,",
    poem: ["Angin menyeberangi laut dan musim panas tiba di tepian;", "setiap perjalanan panjang menemukan jawabannya dalam tepuk tangan."],
    body: [
      "Waktu telah menghimpun pagi yang tak terhitung dan malam-malam panjang menjadi satu bab ini. Cahaya di atas buku dan jalan yang ditempuh dalam hujan London akhirnya menemukan gaungnya yang khidmat.",
      "Dengan ketulusan terdalam, saya mengundangmu datang ke London School of Economics and Political Science pada akhir Juli untuk menghadiri wisuda Yitao Zhang. Mari saksikan satu perjalanan selesai dalam tepuk tangan dan perjalanan lain dimulai.",
      "London begitu luas, namun beberapa momen baru utuh ketika seseorang yang istimewa hadir. Berbagi hari ini denganmu akan menjadi catatan paling berharga. Tanggal, waktu, dan susunan acara akan disampaikan secara terpisah."
    ],
    when: ["WAKTU", "Akhir Juli · Detail menyusul"], where: ["TEMPAT", "London School of Economics · London"], occasion: ["ACARA", "Wisuda Yitao Zhang"],
    closing: "Dengan harapan kita dapat berbagi hari ini di London."
  }
];

const $ = (selector) => document.querySelector(selector);
const welcome = $("#welcome");
const invitation = $("#invitation");
const greeting = $(".greeting");
const enterButton = $("#enterButton");
const enterLabel = $(".enter-button__label");
const languagePicker = $("#languagePicker");
const languageCarousel = $("#languageCarousel");
const languageContinue = $("#languageContinue");
const letter = $("#letter");
let activeIndex = 0;
let selectedLanguageIndex = 0;
let cycleTimer;
let carouselFrame;
let carouselScrollLockUntil = 0;
let carouselResetTimer;
let selectedVirtualIndex = languages.length;

const languageGradients = [
  "linear-gradient(145deg, #ff9a8b 0%, #ff6a88 48%, #6a5cff 100%)",
  "linear-gradient(145deg, #111827 0%, #2563eb 52%, #7dd3fc 100%)",
  "linear-gradient(145deg, #132a13 0%, #31572c 50%, #90a955 100%)",
  "linear-gradient(145deg, #2d1b69 0%, #8a4fff 52%, #ff8fb3 100%)",
  "linear-gradient(145deg, #061a40 0%, #0353a4 52%, #b9d6f2 100%)",
  "linear-gradient(145deg, #541212 0%, #b43a3a 48%, #f6bd60 100%)",
  "linear-gradient(145deg, #004e64 0%, #00a5cf 50%, #9fffcb 100%)",
  "linear-gradient(145deg, #3d0000 0%, #c1121f 50%, #fdf0d5 100%)",
  "linear-gradient(145deg, #001219 0%, #0a9396 48%, #ee9b00 100%)",
  "linear-gradient(145deg, #172554 0%, #4338ca 52%, #c4b5fd 100%)",
  "linear-gradient(145deg, #2b0a3d 0%, #7b2cbf 50%, #e0aaff 100%)",
  "linear-gradient(145deg, #5f0f40 0%, #9a031e 48%, #fb8b24 100%)",
  "linear-gradient(145deg, #06283d 0%, #256d85 50%, #dff6ff 100%)",
  "linear-gradient(145deg, #14213d 0%, #fca311 52%, #e5e5e5 100%)",
  "linear-gradient(145deg, #1b4332 0%, #40916c 50%, #b7e4c7 100%)",
  "linear-gradient(145deg, #0b132b 0%, #3a506b 48%, #5bc0be 100%)",
  "linear-gradient(145deg, #3c096c 0%, #9d4edd 52%, #ff9e00 100%)",
  "linear-gradient(145deg, #3a0ca3 0%, #4361ee 50%, #4cc9f0 100%)",
  "linear-gradient(145deg, #582f0e 0%, #a68a64 48%, #ddb892 100%)",
  "linear-gradient(145deg, #023047 0%, #219ebc 48%, #ffb703 100%)"
];

function populateLanguageCarousel() {
  for (let copy = 0; copy < 3; copy += 1) {
    languages.forEach((language, index) => {
      const slide = document.createElement("button");
      slide.type = "button";
      slide.className = "language-slide";
      slide.dataset.index = String(index);
      slide.dataset.virtualIndex = String(copy * languages.length + index);
      slide.dataset.language = language.code;
      slide.setAttribute("role", "option");
      slide.setAttribute("aria-selected", "false");
      slide.style.setProperty("--slide-background", languageGradients[index]);
      slide.innerHTML = `<span class="language-slide__greeting">${language.greeting}</span>`;
      languageCarousel.append(slide);
    });
  }
}

function selectLanguage(index, { scroll = false, virtualIndex = null, instant = false } = {}) {
  selectedLanguageIndex = Math.max(0, Math.min(languages.length - 1, index));
  const language = languages[selectedLanguageIndex];
  const slides = [...languageCarousel.querySelectorAll(".language-slide")];
  if (virtualIndex !== null) {
    selectedVirtualIndex = virtualIndex;
  } else {
    const candidates = slides.filter((slide) => Number(slide.dataset.index) === selectedLanguageIndex);
    const nearest = candidates.reduce((best, slide) => {
      if (!best) return slide;
      const distance = Math.abs(Number(slide.dataset.virtualIndex) - selectedVirtualIndex);
      const bestDistance = Math.abs(Number(best.dataset.virtualIndex) - selectedVirtualIndex);
      return distance < bestDistance ? slide : best;
    }, null);
    if (nearest) selectedVirtualIndex = Number(nearest.dataset.virtualIndex);
  }
  slides.forEach((slide) => {
    const selected = Number(slide.dataset.virtualIndex) === selectedVirtualIndex;
    slide.classList.toggle("is-selected", selected);
    slide.setAttribute("aria-selected", String(selected));
  });
  $("#languageContinueLabel").textContent = language.enter;
  invitation.style.setProperty("--selected-background", languageGradients[selectedLanguageIndex]);
  if (scroll) {
    const slide = slides.find((item) => Number(item.dataset.virtualIndex) === selectedVirtualIndex);
    if (!slide) return;
    carouselScrollLockUntil = Date.now() + (instant ? 120 : 1300);
    languageCarousel.scrollTo({
      left: slide.offsetLeft - (languageCarousel.clientWidth - slide.offsetWidth) / 2,
      behavior: instant ? "auto" : "smooth"
    });
    window.clearTimeout(carouselResetTimer);
    carouselResetTimer = window.setTimeout(recenterCarousel, instant ? 140 : 1400);
  }
}

function recenterCarousel() {
  const total = languages.length;
  let targetVirtualIndex = selectedVirtualIndex;
  if (selectedVirtualIndex < total) targetVirtualIndex += total;
  if (selectedVirtualIndex >= total * 2) targetVirtualIndex -= total;
  if (targetVirtualIndex === selectedVirtualIndex) return;
  selectLanguage(selectedLanguageIndex, { scroll: true, virtualIndex: targetVirtualIndex, instant: true });
}

function updateWelcome(index) {
  const language = languages[index];
  greeting.classList.add("is-changing");
  enterLabel.style.opacity = "0";
  window.setTimeout(() => {
    greeting.textContent = language.greeting;
    enterLabel.textContent = language.enter;
    enterButton.setAttribute("aria-label", language.enter);
    greeting.classList.remove("is-changing");
    enterLabel.style.opacity = "1";
  }, 480);
}

function startLanguageCycle() {
  cycleTimer = window.setInterval(() => {
    activeIndex = (activeIndex + 1) % languages.length;
    updateWelcome(activeIndex);
  }, 2550);
}

function showInvitation() {
  window.clearInterval(cycleTimer);
  welcome.classList.add("is-leaving");
  window.setTimeout(() => {
    welcome.hidden = true;
    invitation.hidden = false;
    invitation.classList.add("is-choosing");
    languagePicker.hidden = false;
    languagePicker.classList.remove("is-leaving");
    letter.hidden = true;
    letter.classList.remove("is-visible");
    letter.setAttribute("aria-hidden", "true");
    invitation.classList.add("is-entering");
    invitation.scrollTop = 0;
    history.pushState({ screen: "invitation" }, "", "#invitation");
    selectedVirtualIndex = languages.length + selectedLanguageIndex;
    selectLanguage(selectedLanguageIndex, { scroll: true, virtualIndex: selectedVirtualIndex, instant: true });
    languageCarousel.querySelector(".is-selected")?.focus({ preventScroll: true });
  }, 720);
}

function showWelcome({ fromHistory = false } = {}) {
  invitation.hidden = true;
  invitation.classList.remove("is-entering");
  welcome.hidden = false;
  welcome.classList.remove("is-leaving");
  if (!fromHistory && location.hash) history.pushState({ screen: "welcome" }, "", location.pathname);
  window.clearInterval(cycleTimer);
  startLanguageCycle();
}

function renderLetter(code) {
  const content = languages.find((language) => language.code === code);
  if (!content) return;

  document.documentElement.lang = content.code;
  letter.dir = content.dir;
  $("#letterEyebrow").textContent = content.eyebrow;
  $("#letterTitle").textContent = content.title;
  $("#letterSalutation").textContent = content.salutation;
  $("#poemLineOne").textContent = content.poem[0];
  $("#poemLineTwo").textContent = content.poem[1];
  $("#letterBody").replaceChildren(...content.body.map((paragraph) => {
    const element = document.createElement("p");
    element.textContent = paragraph;
    return element;
  }));
  $("#whenLabel").textContent = content.when[0];
  $("#whenValue").textContent = content.when[1];
  $("#whereLabel").textContent = content.where[0];
  $("#whereValue").textContent = content.where[1];
  $("#occasionLabel").textContent = content.occasion[0];
  $("#occasionValue").textContent = content.occasion[1];
  $("#closingText").textContent = content.closing;

  letter.hidden = false;
  letter.classList.remove("is-visible");
  letter.setAttribute("aria-hidden", "false");
  void letter.offsetWidth;
  letter.classList.add("is-visible");
}

function openLetter() {
  const language = languages[selectedLanguageIndex];
  renderLetter(language.code);
  languagePicker.classList.add("is-leaving");
  window.setTimeout(() => {
    languagePicker.hidden = true;
    invitation.classList.remove("is-choosing");
    invitation.scrollTo({ top: 0, behavior: "smooth" });
  }, 520);
}

function returnToLanguagePicker() {
  letter.hidden = true;
  letter.classList.remove("is-visible");
  letter.setAttribute("aria-hidden", "true");
  languagePicker.hidden = false;
  invitation.classList.add("is-choosing");
  languagePicker.classList.remove("is-leaving");
  invitation.scrollTo({ top: 0, behavior: "smooth" });
  window.setTimeout(() => {
    selectedVirtualIndex = languages.length + selectedLanguageIndex;
    selectLanguage(selectedLanguageIndex, { scroll: true, virtualIndex: selectedVirtualIndex, instant: true });
  }, 40);
}

populateLanguageCarousel();
selectLanguage(0);
startLanguageCycle();
window.setTimeout(() => enterButton.classList.add("is-visible"), 3900);

enterButton.addEventListener("click", showInvitation);
$("#backButton").addEventListener("click", () => {
  if (!letter.hidden) returnToLanguagePicker();
  else showWelcome();
});
languageContinue.addEventListener("click", openLetter);
languageCarousel.addEventListener("click", (event) => {
  const slide = event.target.closest(".language-slide");
  if (slide) selectLanguage(Number(slide.dataset.index), {
    scroll: true,
    virtualIndex: Number(slide.dataset.virtualIndex)
  });
});
languageCarousel.addEventListener("scroll", () => {
  if (Date.now() < carouselScrollLockUntil) return;
  if (carouselFrame) cancelAnimationFrame(carouselFrame);
  carouselFrame = requestAnimationFrame(() => {
    const center = languageCarousel.getBoundingClientRect().left + languageCarousel.clientWidth / 2;
    const slides = [...languageCarousel.querySelectorAll(".language-slide")];
    let nearestSlide = slides[0];
    let nearestDistance = Infinity;
    slides.forEach((slide) => {
      const rect = slide.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - center);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestSlide = slide;
      }
    });
    const nearestVirtualIndex = Number(nearestSlide.dataset.virtualIndex);
    const nearestLanguageIndex = Number(nearestSlide.dataset.index);
    if (nearestVirtualIndex !== selectedVirtualIndex) {
      selectLanguage(nearestLanguageIndex, { virtualIndex: nearestVirtualIndex });
    }
    window.clearTimeout(carouselResetTimer);
    carouselResetTimer = window.setTimeout(recenterCarousel, 140);
  });
}, { passive: true });

window.addEventListener("popstate", () => {
  if (location.hash === "#invitation") {
    welcome.hidden = true;
    invitation.hidden = false;
  } else {
    showWelcome({ fromHistory: true });
  }
});

if (location.hash) {
  history.replaceState({ screen: "welcome" }, "", location.pathname);
}
