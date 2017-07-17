Bridge.merge(new System.Globalization.CultureInfo("ia-FR", true), {
    englishName: "Interlingua (France)",
    nativeName: "interlingua (Francia)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: ".",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 9,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["dom","lun","mar","mer","jov","ven","sab"],
        abbreviatedMonthGenitiveNames: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","oct","nov","dec",""],
        abbreviatedMonthNames: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","oct","nov","dec",""],
        amDesignator: "a.m.",
        dateSeparator: "/",
        dayNames: ["dominica","lunedi","martedi","mercuridi","jovedi","venerdi","sabbato"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, yyyy MMMM dd HH:mm:ss",
        longDatePattern: "dddd, yyyy MMMM dd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["januario","februario","martio","april","maio","junio","julio","augusto","septembre","octobre","novembre","decembre",""],
        monthNames: ["januario","februario","martio","april","maio","junio","julio","augusto","septembre","octobre","novembre","decembre",""],
        pmDesignator: "p.m.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy/MM/dd",
        shortestDayNames: ["dom","lun","mar","mer","jov","ven","sab"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
