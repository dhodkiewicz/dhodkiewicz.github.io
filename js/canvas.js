$(function() {
	$(".chart").CanvasJSChart({
		title: {
			text: "Population of Wisconsin since 1900"
		},
		axisY: {
			title: "Population in Millions",
			includeZero: false
		},
		axisX: {
			interval: 1
		},
		data: [
		{
			type: "line",
      lineDashType: "dot",
			toolTipContent: "{label}: {y} million",
			dataPoints: [
				{ label: "1900",  y: 2.69 },
				{ label: "1910",  y: 2.33 },
				{ label: "1920",  y: 2.63 },
				{ label: "1930", y: 2.93 },
				{ label: "1940",   y: 3.14 },
				{ label: "1950",  y: 3.43 },
				{ label: "1960",  y: 3.95 },
				{ label: "1970",   y: 4.42 },
				{ label: "1980",   y: 4.71 },
				{ label: "1990",   y: 4.89 },
				{ label: "2000",   y: 5.36 },
				{ label: "2010",   y: 5.69 },
        { label: "2018",   y: 5.8 }
			]
		}
		]
	});
});
