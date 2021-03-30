

frappe.views.calendar["Custom Event"] = {
	field_map: {
		"start": "starts_on",
		"end": "ends_on",
		"id": "name",
		"allDay": "all_day",
		"title": "subject",
		"status": "event_type",
		"color": "color"
	},
	style_map: {
		"Public": "success",
		"Private": "info"
	},
    get_events_method: "stock_ledger_report.stock_ledger_report.doctype.custom_event.custom_event.get_events"
}