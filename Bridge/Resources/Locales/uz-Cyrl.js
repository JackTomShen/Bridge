Bridge.merge(new System.Globalization.CultureInfo("uz-Cyrl", true), {
    englishName: "Uzbek (Cyrillic)",
    nativeName: "ўзбекча",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "ҳақиқий сон эмас",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "сўм",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["якш","душ","сеш","чор","пай","жум","шан"],
        abbreviatedMonthGenitiveNames: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""],
        abbreviatedMonthNames: ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",""],
        amDesignator: "ТО",
        dateSeparator: "/",
        dayNames: ["якшанба","душанба","сешанба","чоршанба","пайшанба","жума","шанба"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, dd MMMM, yyyy HH:mm:ss",
        longDatePattern: "dddd, dd MMMM, yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["январ","феврал","март","апрел","май","июн","июл","август","сентябр","октябр","ноябр","декабр",""],
        monthNames: ["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр",""],
        pmDesignator: "ТК",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Як","Ду","Се","Чо","Па","Жу","Ша"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
