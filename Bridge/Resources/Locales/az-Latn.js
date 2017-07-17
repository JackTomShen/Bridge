Bridge.merge(new System.Globalization.CultureInfo("az-Latn", true), {
    englishName: "Azerbaijani (Latin)",
    nativeName: "azərbaycan",

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
        currencySymbol: "₼",
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
        abbreviatedDayNames: ["B.","B.E.","Ç.A.","Ç.","C.A.","C.","Ş."],
        abbreviatedMonthGenitiveNames: ["yan","fev","mar","apr","may","iyn","iyl","avq","sen","okt","noy","dek",""],
        abbreviatedMonthNames: ["yan","fev","mar","apr","may","iyn","iyl","avq","sen","okt","noy","dek",""],
        amDesignator: "AM",
        dateSeparator: ".",
        dayNames: ["bazar","bazar ertəsi","çərşənbə axşamı","çərşənbə","cümə axşamı","cümə","şənbə"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "d MMMM yyyy, dddd HH:mm:ss",
        longDatePattern: "d MMMM yyyy, dddd",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr",""],
        monthNames: ["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy",
        shortestDayNames: ["B.","B.E.","Ç.A.","Ç.","C.A.","C.","Ş."],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
