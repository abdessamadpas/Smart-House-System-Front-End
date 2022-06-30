//apprearance
$("input.variation").on("click", function() {
	if ($(this).val() > 3) {
		$("body").css("background", "#111");
		$("footer").attr("class", "dark");
	} else {
		$("body").css("background", "#f9f9f9");
		$("footer").attr("class", "");
	}
});