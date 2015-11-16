	$(document).ready(function() { 

		//initiallize table sorting
	 	$("#data-table").tablesorter(); 
	 	$("#data-table-skinny").tablesorter(); 
	 	$("#data-table-skinny2").tablesorter(); 

	 	// list number of each request status in filter buttons
	 	$(".btn-status-overdue span").html($("#data-table tr td:contains('Overdue')").length);
	 	$(".btn-status-at-risk span").html($("#data-table tr td:contains('At-Risk')").length);
	 	$(".btn-status-on-track span").html($("#data-table tr td:contains('On-Track')").length);
	 	$(".btn-status-complete span").html($("#data-table tr td:contains('Complete')").length);
	 	$(".btn-status-all span").html($("#data-table tbody tr").length);

	 	// faux modal nav
	 	$(".new-request").click(function() {
	 		event.preventDefault();
	 		$(".modal-body2, modal-body3, .modal-body4").hide();
	 		$(".modal-body1").show();
	 		$(".modal-dialog").css("width", "400px");
	 	});
	 	$(".step1").click(function() {
	 		event.preventDefault();
	 		$(".modal-body1").hide();
	 		$(".modal-body2").show();
	 	});
	 	$(".step2").click(function() {
	 		event.preventDefault();
	 		$(".modal-body2").hide();
	 		$(".modal-body3").show();
	 	});
	 	$(".step3").click(function() {
	 		event.preventDefault();
	 		$(".modal-body3").hide();
	 		$(".modal-body4").show();
	 		$(".modal-dialog").css("width", "625px");
	 	});

	 }
	);  

	var jo = $(".data-table tbody").find("tr");

	function filterValue(data) { 
	    //create a jquery object of the rows
	    if (data.value == "") {
	        jo.show();
	        return;
	    }
	    //hide all the rows
	    jo.hide();
	    //Recusively filter the jquery object to get results.
	    jo.filter(function (i, v) {
	        var $t = $(this);
	        for (var d = 0; d < data.length; ++d) {
	            if ($t.is(":contains('" + data[d] + "')")) {
	                return true;
	            }
	        }
	        return false;
	    })
	    //show the rows that match.
	    .show();
	}

	$("#filterInput").keyup(function () {
	    //split the current value of searchInput
	    var data = this.value.split(" ");
		filterValue(data);
	}).focus(function () {
	    this.value = "";
	    $(this).css({
	        "color": "black"
	    });
	    $(this).unbind('focus');
	}).css({
	    "color": "#C0C0C0"
	});

	$(".btn-status-overdue").click(function () {
		$("#filterInput").val("");
		var data = $.makeArray("Overdue");
		filterValue(data);
	})
	$(".btn-status-at-risk").click(function () {
		$("#filterInput").val("");
		var data = $.makeArray("At-Risk");
		filterValue(data);
	})
	$(".btn-status-on-track").click(function () {
		$("#filterInput").val("");
		var data = $.makeArray("On-Track");
		filterValue(data);
	})
	$(".btn-status-complete").click(function () {
		$("#filterInput").val("");
		var data = $.makeArray("Complete");
		filterValue(data);
	})	
	$(".btn-status-all").click(function () {
		$("#filterInput").val("");
		var data = $.makeArray("");
		filterValue(data);
	})